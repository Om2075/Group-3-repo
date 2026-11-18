import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Tag, Star, ShieldCheck } from 'lucide-react';
import { useOutfit } from '../context/OutfitContext';
import { PRODUCT_IMAGES } from '../data/productAssets';
import {
  getSelectedSizeForProduct,
  getSingleProductPrice,
  formatProductModelName,
  formatProductTitle,
  formatReviewCount
} from '../api/engine';

function getFallbackImageForType(type) {
  if (type === 'T-Shirt') return PRODUCT_IMAGES.tshirtWhiteCrew;
  if (type === 'Shirt') return PRODUCT_IMAGES.shirtWhiteLinen;
  if (type === 'Pant') return PRODUCT_IMAGES.pantBeigeChinos;
  return PRODUCT_IMAGES.shoeNikeCourtWhite;
}

export default function ProductCard({
  item,
  onSelect,
  isSelected = false,
  actionLabel = 'Style Look'
}) {
  const navigate = useNavigate();
  const { userSizes, setSingleProductId, setPriceMode } = useOutfit();

  const requestedSize = getSelectedSizeForProduct(item, userSizes);
  const pricing = item ? getSingleProductPrice(item.id, userSizes) : null;

  const preferredImg =
    item?.imageUrl || getFallbackImageForType(item?.type);

  const [imgSrc, setImgSrc] = useState(preferredImg);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(preferredImg);
    setHasError(false);
  }, [preferredImg, item?.id]);

  if (!item || !pricing) return null;

  const inStockForSize = pricing.inStockInSize;
  const anyStoreInStock = pricing.anyStoreInStock;
  const displayPrice = pricing.lowestPrice || item.lowestPrice || item.price || 0;
  const platform = pricing.lowestPlatform || item.lowestPlatform || 'Myntra';
  const mrp = pricing.mrp || item.mrp || displayPrice + 800;
  const discountPercent = mrp > displayPrice ? Math.round(((mrp - displayPrice) / mrp) * 100) : 0;

  const availStores = pricing.availableInSizeStores || [];
  const otherSizeStores = pricing.otherSizesOnlyStores || [];

  const handleCompareLowestPrice = (e) => {
    e.stopPropagation();
    setSingleProductId(item.id);
    setPriceMode('single');
    navigate(`/prices?productId=${encodeURIComponent(item.id)}&mode=single`);
  };

  return (
    <article
      onClick={() => onSelect && onSelect(item)}
      className={`group bg-white rounded-2xl p-4 border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
        isSelected
          ? 'border-[#1D4ED8] ring-2 ring-[#1D4ED8]/15 shadow-md -translate-y-0.5'
          : 'border-[#E2E4E9] hover:border-[#111318]/30 hover:shadow-lg hover:-translate-y-0.5'
      }`}
    >
      <div>
        {/* Product Photo Frame */}
        <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-[#F3F4F6] mb-3.5">
          {!hasError ? (
            <img
              src={imgSrc}
              alt={formatProductTitle(item)}
              referrerPolicy="no-referrer"
              onError={() => {
                const catalogImg = item.imageUrl;
                const fallback = getFallbackImageForType(item.type);
                if (catalogImg && imgSrc !== catalogImg) {
                  setImgSrc(catalogImg);
                } else if (imgSrc !== fallback) {
                  setImgSrc(fallback);
                } else {
                  setHasError(true);
                }
              }}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-neutral-100 text-[#525866] text-xs font-medium">
              <span>{item.brand}</span>
              <span className="mt-1">{formatProductModelName(item)}</span>
            </div>
          )}

          {pricing.isLiveVerified && (
            <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 bg-white/95 text-[#059669] px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide border border-[#059669]/25">
              <ShieldCheck className="w-3 h-3" />
              <span>Startup Verified · 4.0★+</span>
            </span>
          )}
        </div>

        {/* Clean Unboxed Metadata */}
        <div className="flex items-center justify-between gap-2 text-xs text-[#525866] mb-1.5">
          <div className="flex items-center gap-1.5 min-w-0 truncate">
            <span
              className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0"
              style={{ backgroundColor: item.colorHex || '#ddd' }}
            />
            <span className="font-semibold text-[#111318] uppercase tracking-wider text-[11px]">
              {item.brand}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{item.color}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#111318] tabular-nums shrink-0">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>{item.rating}</span>
            {item.reviewCount > 0 && (
              <span className="text-[#525866] font-normal">
                ({formatReviewCount(item.reviewCount)})
              </span>
            )}
          </span>
        </div>

        {/* Product Title */}
        <h3 className="font-serif text-base font-bold text-[#111318] line-clamp-1 group-hover:text-[#1D4ED8] transition-colors">
          {formatProductModelName(item)}
        </h3>

        <p className="text-xs text-[#525866] mt-1 line-clamp-1">
          {item.style} · {pricing.stores.length} store links
        </p>

        {/* Exact Size Availability Summary */}
        <div className="mt-2 text-[11px] font-medium tabular-nums space-y-0.5">
          {inStockForSize ? (
            <p className="text-[#059669] font-semibold truncate">
              {requestedSize} in stock: {availStores.map((s) => s.name).join(', ')}
            </p>
          ) : (
            <p className="text-[#B45309] font-semibold truncate">
              {anyStoreInStock
                ? `Size ${requestedSize} unavailable across listed stores`
                : 'Currently sold out across listed stores'}
            </p>
          )}

          {otherSizeStores.length > 0 && (
            <p className="text-[#525866] truncate">
              {otherSizeStores[0].name}: other sizes only ({otherSizeStores[0].availableSizes.slice(0, 3).join(', ')})
            </p>
          )}
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="mt-3.5 pt-3.5 border-t border-[#E2E4E9] space-y-2.5">
        <div className="flex items-end justify-between gap-2">
          <div>
            <span className={`text-[11px] font-semibold block ${inStockForSize ? 'text-[#059669]' : 'text-[#B45309]'}`}>
              {inStockForSize
                ? `Lowest (${requestedSize}) · ${platform}`
                : anyStoreInStock
                ? `Alt sizes · ${platform}`
                : `Sold out · ${platform}`}
            </span>
            <div className="flex items-baseline gap-2 tabular-nums">
              <span className="font-sans text-lg font-bold text-[#111318]">
                ₹{displayPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#525866]/60 line-through">
                ₹{mrp.toLocaleString('en-IN')}
              </span>
              {discountPercent > 0 && (
                <span className="text-[11px] font-semibold text-[#059669]">
                  {discountPercent}% off
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect && onSelect(item);
            }}
            className="whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 bg-[#111318] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            <span>{actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleCompareLowestPrice}
          className="w-full py-2 px-3 rounded-lg bg-[#F8F9FA] hover:bg-[#E2E4E9]/60 border border-[#E2E4E9] text-[#111318] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <Tag className="w-3.5 h-3.5 text-[#1D4ED8]" />
          <span>Compare Prices</span>
        </button>
      </div>
    </article>
  );
}
