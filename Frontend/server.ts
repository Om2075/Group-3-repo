import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  discoverLiveProductsWithGemini,
  isSafePublicHttpsUrl,
  verifyProductAcrossPlatforms
} from './server/aiVerifier.ts';
import type { ProductVerifyInput } from './server/aiVerifier.ts';
import { getStartupScanStatus, startStartupScan } from './server/startupScanner.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  // Begin once-per-startup verification across all products & platforms immediately on boot
  void startStartupScan();

  // Startup verification status + verified snapshot
  app.get('/api/startup-scan/status', (_req: Request, res: Response) => {
    res.json(getStartupScanStatus());
  });

  // Health & capability status
  app.get('/api/health', (_req: Request, res: Response) => {
    const scan = getStartupScanStatus();
    res.json({
      ok: true,
      startupScanStatus: scan.status,
      qualifiedProducts: scan.qualifiedCount,
      liveSearchReady: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim())
    });
  });

  // Safe retail image proxy (prevents CDN hotlink blocking for verified product photos)
  app.get('/api/image-proxy', async (req: Request, res: Response) => {
    const rawUrl = typeof req.query.url === 'string' ? req.query.url : '';
    if (!isSafePublicHttpsUrl(rawUrl)) {
      res.status(400).json({ error: 'Invalid or unsafe image URL' });
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const upstream = await fetch(rawUrl, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
          Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8'
        }
      });

      if (!upstream.ok) {
        res.status(502).json({ error: `Upstream returned ${upstream.status}` });
        return;
      }

      const contentType = (upstream.headers.get('content-type') || '').toLowerCase();
      if (!contentType.startsWith('image/')) {
        res.status(415).json({ error: 'Upstream resource is not an image' });
        return;
      }

      const buffer = Buffer.from(await upstream.arrayBuffer());
      if (buffer.byteLength > 6 * 1024 * 1024) {
        res.status(413).json({ error: 'Image exceeds 6MB limit' });
        return;
      }

      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.send(buffer);
    } catch {
      res.status(502).json({ error: 'Failed to load retail image' });
    } finally {
      clearTimeout(timer);
    }
  });

  // Deep live store verification for a single product (image + prices + exact per-size availability)
  app.post('/api/verify-product', async (req: Request, res: Response) => {
    try {
      const { product, requestedSize, stylePreference, forceRefresh } = req.body as {
        product?: ProductVerifyInput;
        requestedSize?: string;
        stylePreference?: string;
        forceRefresh?: boolean;
      };

      if (!product || !product.name || !product.brand) {
        res.status(400).json({ error: 'Missing required product details.' });
        return;
      }
      if (!requestedSize) {
        res.status(400).json({ error: 'Missing requestedSize for size verification.' });
        return;
      }

      const report = await verifyProductAcrossPlatforms({
        product,
        requestedSize,
        stylePreference: stylePreference || 'Casual',
        forceRefresh: Boolean(forceRefresh)
      });

      res.json(report);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Product verification failed';
      res.status(500).json({ error: message });
    }
  });

  // Deep live store verification for a complete 3-piece outfit (Shirt/T-Shirt + Pant + Shoe)
  app.post('/api/verify-outfit', async (req: Request, res: Response) => {
    try {
      const { items, stylePreference, forceRefresh } = req.body as {
        items?: Array<{ product: ProductVerifyInput; requestedSize: string }>;
        stylePreference?: string;
        forceRefresh?: boolean;
      };

      if (!Array.isArray(items) || items.length === 0 || items.length > 3) {
        res.status(400).json({ error: 'Expected 1 to 3 outfit items to verify.' });
        return;
      }

      const settled = await Promise.allSettled(
        items.map((entry) =>
          verifyProductAcrossPlatforms({
            product: entry.product,
            requestedSize: entry.requestedSize,
            stylePreference: stylePreference || 'Casual',
            forceRefresh: Boolean(forceRefresh)
          })
        )
      );

      const reports: Record<string, unknown> = {};
      const errors: Record<string, string> = {};

      settled.forEach((result, idx) => {
        const key = String(items[idx].product.id);
        if (result.status === 'fulfilled') {
          reports[key] = result.value;
        } else {
          errors[key] = result.reason instanceof Error ? result.reason.message : 'Verification error';
        }
      });

      if (Object.keys(reports).length === 0 && Object.keys(errors).length > 0) {
        const firstErr = Object.values(errors)[0];
        res.status(500).json({ error: firstErr, errors });
        return;
      }

      res.json({ reports, errors });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Outfit verification failed';
      res.status(500).json({ error: message });
    }
  });

  // Live store discovery of Formal / Casual products matching exact user size across Indian stores
  app.post('/api/discover-products', async (req: Request, res: Response) => {
    try {
      const { stylePreference, category, color, requestedSize, query } = req.body as {
        stylePreference?: 'Formal' | 'Casual';
        category?: 'Shoe' | 'Shirt' | 'T-Shirt' | 'Pant';
        color?: string;
        requestedSize?: string;
        query?: string;
      };

      if (!category || !requestedSize) {
        res.status(400).json({ error: 'category and requestedSize are required.' });
        return;
      }

      const result = await discoverLiveProductsWithGemini({
        stylePreference: stylePreference === 'Formal' ? 'Formal' : 'Casual',
        category,
        color,
        requestedSize,
        query
      });

      res.json(result);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Live product discovery failed';
      res.status(500).json({ error: message });
    }
  });

  // Dev: mount Vite middleware | Prod: serve built dist/
  if (!IS_PROD) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Try & Buy full-stack server running at http://0.0.0.0:${PORT}`);
    console.log(`Opening browser at http://localhost:${PORT} ...`);
    import('child_process').then(({ exec }) => {
      exec(`start http://localhost:${PORT}`);
    });
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
