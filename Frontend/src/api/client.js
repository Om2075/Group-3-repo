// Try & Buy Store API Client
// Consumes the once-per-startup server verification snapshot + local graph/heap outfit engine.

import * as localEngine from './engine.js';
import { BRANDED_PRODUCTS } from '../data/brandedProducts.js';

export async function fetchStartupScanStatus() {
  const res = await fetch('/api/startup-scan/status');
  if (!res.ok) {
    throw new Error(`Startup verification status failed (${res.status})`);
  }
  return res.json();
}

export async function fetchItems(type, discovered = []) {
  const pool = localEngine.getCatalogWithDiscovered(discovered);
  const raw = (type || 'Shoe').toLowerCase().trim();

  if (raw === 'top' || raw === 'topwear' || raw === 'shirts & t-shirts') {
    return pool.filter((item) => item.type === 'Shirt' || item.type === 'T-Shirt');
  }

  let normalizedType = 'shoe';
  if (raw.includes('t-shirt') || raw.includes('tshirt')) normalizedType = 't-shirt';
  else if (raw.startsWith('shirt')) normalizedType = 'shirt';
  else if (raw.startsWith('pant')) normalizedType = 'pant';

  const filtered = pool.filter((item) => item.type.toLowerCase() === normalizedType);
  return filtered.length > 0 ? filtered : BRANDED_PRODUCTS.filter((p) => (p.crossPlatformRating ?? p.rating ?? 0) >= 4.0);
}

export async function getRecommendation(
  mainItemId,
  presetId = null,
  userSizes = localEngine.DEFAULT_USER_SIZES,
  preferredTopType = null,
  stylePreference = 'All',
  discovered = []
) {
  return localEngine.recommendOutfit(
    mainItemId,
    presetId,
    userSizes,
    preferredTopType,
    stylePreference,
    discovered
  );
}

export async function getNextOutfit(
  userSizes = localEngine.DEFAULT_USER_SIZES,
  preferredTopType = 'Shirt',
  stylePreference = 'All',
  discovered = []
) {
  return localEngine.recommendNextOutfit(userSizes, preferredTopType, stylePreference, discovered);
}

export async function getLowestPrices(
  ids,
  userSizes = null,
  verifiedReportsMap = {},
  discovered = []
) {
  return localEngine.findLowestPrices(ids || [], userSizes, verifiedReportsMap, discovered);
}

export function getSingleProductPrice(
  productId,
  userSizes = null,
  verifiedReport = null,
  discovered = []
) {
  return localEngine.getSingleProductPrice(productId, userSizes, verifiedReport, discovered);
}

export async function checkBackendHealth() {
  const res = await fetch('/api/health');
  if (!res.ok) {
    throw new Error(`Health check failed with status ${res.status}`);
  }
  return res.json();
}
