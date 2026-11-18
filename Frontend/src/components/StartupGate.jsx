import React from 'react';
import {
  ShieldCheck,
  Image as ImageIcon,
  Ruler,
  Tag,
  Star,
  CheckCircle2,
  Loader2,
  AlertTriangle
} from 'lucide-react';
import { useOutfit } from '../context/OutfitContext';

export default function StartupGate({ children }) {
  const { startupScan, startupError } = useOutfit();

  if (startupScan?.status === 'completed') {
    return children;
  }

  const percent = Math.max(0, Math.min(100, startupScan?.percent || 0));
  const totalProducts = startupScan?.totalProducts || 98;
  const checkedProducts = startupScan?.checkedProducts || 0;
  const totalListings = startupScan?.totalListings || 0;
  const checkedListings = startupScan?.checkedListings || 0;
  const qualifiedCount = startupScan?.qualifiedCount || 0;
  const excludedCount = startupScan?.excludedBelow4Count || 0;
  const recentLogs = Array.isArray(startupScan?.recentLogs) ? startupScan.recentLogs : [];

  return (
    <div className="min-h-screen bg-[#111318] text-white flex items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-[#181B22] border border-white/12 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-7">
        {/* Top Brand & Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-1.5">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Single Startup Verification Running</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Try & Buy · Preparing Storefront
            </h1>
            <p className="text-xs sm:text-sm text-white/65 mt-1">
              Checking every 4.0★+ shirt, T-shirt, pant & shoe across Flipkart, Myntra, Ajio, Tata CLiQ & Amazon once while loading.
            </p>
          </div>

          <div className="shrink-0 text-left sm:text-right tabular-nums">
            <span className="font-mono text-3xl sm:text-4xl font-bold text-white block">
              {percent}%
            </span>
            <span className="text-[11px] font-mono text-white/55">
              {checkedProducts} / {totalProducts} products
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2.5">
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[#1D4ED8] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.max(4, percent)}%` }}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/75">
            <span className="truncate font-medium">
              Inspecting: <strong className="text-white">{startupScan?.currentProductLabel || 'Loading catalog...'}</strong>
            </span>
            <span className="font-mono text-[11px] text-[#60A5FA] shrink-0">
              {startupScan?.currentPlatformLabel || 'All listed retailers'}
            </span>
          </div>
        </div>

        {/* 3 Verification Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex items-start gap-3">
            <ImageIcon className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-white block">1. Product Photo Check</span>
              <span className="text-[11px] text-white/60 block mt-0.5">
                Matching studio colorway against store product pages
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex items-start gap-3">
            <Ruler className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-white block">2. Size Stock Matrix</span>
              <span className="text-[11px] text-white/60 block mt-0.5">
                Checking size stock & sold-out items per store
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex items-start gap-3">
            <Tag className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-white block">3. Price & 4.0★+ Gate</span>
              <span className="text-[11px] text-white/60 block mt-0.5">
                Verifying INR rates, MRP & cross-store 4.0★+ rating
              </span>
            </div>
          </div>
        </div>

        {/* Live Telemetry Counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center tabular-nums">
          <div className="rounded-xl bg-black/25 border border-white/8 p-3">
            <span className="text-[11px] text-white/55 block">Products Checked</span>
            <span className="font-mono text-lg font-bold text-white">
              {checkedProducts}/{totalProducts}
            </span>
          </div>
          <div className="rounded-xl bg-black/25 border border-white/8 p-3">
            <span className="text-[11px] text-white/55 block">Store Pages Scanned</span>
            <span className="font-mono text-lg font-bold text-white">
              {checkedListings}/{totalListings || '—'}
            </span>
          </div>
          <div className="rounded-xl bg-black/25 border border-white/8 p-3">
            <span className="text-[11px] text-white/55 block">Qualified 4.0★+</span>
            <span className="font-mono text-lg font-bold text-emerald-400">
              {qualifiedCount}
            </span>
          </div>
          <div className="rounded-xl bg-black/25 border border-white/8 p-3">
            <span className="text-[11px] text-white/55 block">Excluded &lt;4.0★</span>
            <span className="font-mono text-lg font-bold text-white/75">
              {excludedCount}
            </span>
          </div>
        </div>

        {/* Live Checked Product Log */}
        {recentLogs.length > 0 && (
          <div className="rounded-xl bg-black/30 border border-white/10 p-4 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-white/55">
              <span>Live Inspection Feed</span>
              <span>Runs Once When App Starts</span>
            </div>
            <div className="space-y-1.5 max-h-44 overflow-hidden">
              {recentLogs.slice(0, 5).map((log) => (
                <div
                  key={`${log.productId}-${log.label}`}
                  className="flex items-center justify-between gap-3 text-xs py-1 border-b border-white/6 last:border-b-0"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-medium text-white truncate">{log.label}</span>
                    <span className="text-[11px] text-white/45 shrink-0">
                      ({log.platformsCount} stores)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 tabular-nums">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300">
                      <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                      <span>{log.rating}</span>
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      {log.qualified4Plus ? '4.0★+ Pass' : 'Filtered'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {startupError && (
          <div className="rounded-xl bg-amber-500/15 border border-amber-400/30 px-4 py-3 text-xs text-amber-200 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{startupError} — retrying startup status check...</span>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 text-[11px] text-white/50">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Once all products complete verification, this storefront unlocks immediately with cached results.</span>
        </div>
      </div>
    </div>
  );
}
