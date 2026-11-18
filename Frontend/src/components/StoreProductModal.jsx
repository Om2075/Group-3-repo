import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Star,
  ShoppingBag,
  Info,
  Link2,
  AlertTriangle
} from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productAssets';
import { SIZE_OPTIONS } from '../data/brandedProducts';
import { useOutfit } from '../context/OutfitContext';
import {
  getSelectedSizeForProduct,
  formatProductModelName,
  formatProductTitle
} from '../api/engine';

function getFallbackImg(type) {
  if (type === 'T-Shirt') return PRODUCT_IMAGES.tshirtWhiteCrew;
  if (type === 'Shirt') return PRODUCT_IMAGES.shirtWhiteLinen;
  if (type === 'Pant') return PRODUCT_IMAGES.pantBeigeChinos;
  return PRODUCT_IMAGES.shoeNikeCourtWhite;
}

export default function StoreProductModal({
  isOpen,
  onClose,
  product,
  activeStore,
  allStores = [],
  onSelectStore,
  onOrderProduct
}) {
  const { userSizes, updateUserSize } = useOutfit();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M (40)');

  useEffect(() => {
    if (product) {
      setSelectedImage(product.imageUrl || product.gallery?.[0] || getFallbackImg(product.type));
      setSelectedSize(getSelectedSizeForProduct(product, userSizes) || 'M (40)');
    }
  }, [product?.id, product?.imageUrl, isOpen, userSizes]);

  if (!isOpen || !product || !activeStore) return null;

  const currentImg = selectedImage || product.imageUrl || getFallbackImg(product.type);
  const isLowest = activeStore.isLowest;
  const lowestInStockStore =
    allStores.find((s) => s.inStockForSize) ||
    allStores.find((s) => s.inStock) ||
    activeStore;
  const priceDiff = Math.max(0, activeStore.price - lowestInStockStore.price);
  const mrp = product.mrp || activeStore.price + 800;
  const discountPercent =
    mrp > activeStore.price ? Math.round(((mrp - activeStore.price) / mrp) * 100) : 0;

  const sizes =
    product.type === 'Shoe'
      ? SIZE_OPTIONS.shoe
      : product.type === 'Pant'
      ? SIZE_OPTIONS.pant
      : SIZE_OPTIONS.top;

  const storeSizes = activeStore.availableSizes || [];
  const storeIsInStock = activeStore.inStock !== false && (storeSizes.length > 0 || activeStore.sizeStatus === 'other_sizes_only');
  const selectedSizeInStock =
    storeIsInStock && (activeStore.sizeStatus === 'available_in_size' || storeSizes.includes(selectedSize));

  const handlePickSize = (sz) => {
    setSelectedSize(sz);
    if (product.type === 'Shoe') updateUserSize('shoe', sz);
    else if (product.type === 'Pant') updateUserSize('pant', sz);
    else updateUserSize('top', sz);
  };

  const getStoreTheme = (storeName) => {
    switch ((storeName || '').toLowerCase()) {
      case 'amazon':
        return { bg: 'bg-[#131921]', storeLabel: 'Amazon.in Direct Product Page', dealTag: 'Amazon Verified' };
      case 'flipkart':
        return { bg: 'bg-[#2874F0]', storeLabel: 'Flipkart Direct Product Page', dealTag: 'Flipkart Assured' };
      case 'myntra':
        return { bg: 'bg-[#EE5F73]', storeLabel: 'Myntra Direct Product Page', dealTag: 'Myntra Genuine' };
      case 'ajio':
        return { bg: 'bg-[#2C4152]', storeLabel: 'Ajio Direct Product Page', dealTag: 'Reliance Verified' };
      case 'tata cliq':
      case 'tatacliq':
        return { bg: 'bg-[#A31D24]', storeLabel: 'Tata CLiQ Direct Product Page', dealTag: 'Tata Certified' };
      default:
        return { bg: 'bg-[#111318]', storeLabel: `${storeName} Product Page`, dealTag: 'Verified Retailer' };
    }
  };

  const theme = getStoreTheme(activeStore.name);

  let cleanDisplayUrl = activeStore.url || '';
  try {
    const parsed = new URL(activeStore.url);
    cleanDisplayUrl = `${parsed.hostname.replace(/^www\./, '')}${parsed.pathname}`;
  } catch {
    cleanDisplayUrl = activeStore.url;
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-[#E2E4E9] relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retailer Header Bar */}
        <div className={`${theme.bg} text-white px-5 py-4`}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap">
                {activeStore.name}
              </span>
              <span className="hidden sm:inline-block text-xs text-white/80 border-l border-white/25 pl-3 truncate">
                {theme.storeLabel}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2.5 bg-black/25 rounded-xl px-3.5 py-2.5">
            <div className="flex items-center gap-2 min-w-0 flex-1 text-xs text-white/90">
              <Link2 className="w-3.5 h-3.5 text-white/70 shrink-0" />
              <span className="font-mono text-[11px] truncate">{cleanDisplayUrl}</span>
            </div>
            <a
              href={activeStore.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-white text-[#111318] hover:bg-neutral-100 transition-colors shrink-0 whitespace-nowrap"
            >
              <span>Open Exact Product on {activeStore.name}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Platform Switcher Tabs */}
        {allStores.length > 0 && (
          <div className="bg-[#F8F9FA] border-b border-[#E2E4E9] px-5 py-2.5 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-semibold text-[#525866] shrink-0 mr-1">
              Platforms:
            </span>
            {allStores.map((store) => {
              const active = store.name === activeStore.name;
              const storeSoldOut = !store.inStock;
              const sizeUnavailable = store.inStock && !store.inStockForSize;
              return (
                <button
                  key={store.name}
                  type="button"
                  onClick={() => onSelectStore && onSelectStore(store)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer tabular-nums ${
                    active
                      ? 'bg-[#111318] text-white'
                      : 'bg-white text-[#111318]/80 hover:text-[#111318] border border-[#E2E4E9]'
                  }`}
                >
                  <span>{store.name}</span>
                  <span
                    className={
                      active
                        ? 'text-emerald-300'
                        : storeSoldOut
                        ? 'text-[#B45309] line-through'
                        : 'text-[#525866]'
                    }
                  >
                    ₹{store.price.toLocaleString('en-IN')}
                  </span>
                  {storeSoldOut && (
                    <span className="text-[10px] uppercase tracking-wider text-amber-600">
                      (Sold Out)
                    </span>
                  )}
                  {sizeUnavailable && (
                    <span className="text-[10px] text-amber-600">
                      (No {selectedSize})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5 space-y-3">
            <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#F3F4F6] border border-[#E2E4E9]">
              <img
                src={currentImg}
                alt={formatProductTitle(product)}
                referrerPolicy="no-referrer"
                onError={() => setSelectedImage(getFallbackImg(product.type))}
                className="w-full h-full object-cover"
              />
            </div>

            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center gap-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      currentImg === img ? 'border-[#1D4ED8]' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="bg-[#F8F9FA] rounded-xl p-3.5 text-xs space-y-1.5 border border-[#E2E4E9]">
              <div className="flex justify-between text-[#525866]">
                <span>Model Reference</span>
                <span className="font-mono font-semibold text-[#111318]">{product.sku}</span>
              </div>
              <div className="flex justify-between text-[#525866]">
                <span>Color Variant</span>
                <span className="font-semibold text-[#111318]">{product.color}</span>
              </div>
              <div className="flex justify-between text-[#525866]">
                <span>Category</span>
                <span className="font-semibold text-[#111318]">{product.type} · {product.style}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#525866] mb-1">
                <span className="text-[#1D4ED8] uppercase tracking-wider">{product.brand}</span>
                <span aria-hidden="true">·</span>
                <span>{theme.dealTag}</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111318]">
                {formatProductModelName(product)}
              </h2>
              <p className="text-xs text-[#525866] mt-1.5 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-2 mt-2.5 text-xs tabular-nums">
                <span className="inline-flex items-center gap-1 font-semibold text-[#111318]">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  {activeStore.rating || product.rating}
                </span>
                <span className="text-[#E2E4E9]">·</span>
                <span className="text-[#525866]">
                  {product.reviewCount ? `${Number(product.reviewCount).toLocaleString('en-IN')} ratings` : 'Verified Rating'}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E2E4E9] space-y-2">
              <div className="flex items-baseline gap-3 tabular-nums">
                <span className="text-3xl font-bold text-[#111318]">
                  ₹{activeStore.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-[#525866]/60 line-through">
                  ₹{mrp.toLocaleString('en-IN')}
                </span>
                {discountPercent > 0 && (
                  <span className="text-xs font-semibold text-[#059669]">
                    {discountPercent}% off
                  </span>
                )}
              </div>

              {!storeIsInStock ? (
                <div className="flex items-start gap-2 text-xs font-semibold text-[#B45309]">
                  <AlertTriangle className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <span>
                    {activeStore.stockNote || `Currently out of stock / Notify Me on ${activeStore.name}.`}
                    {lowestInStockStore.name !== activeStore.name &&
                      ` In stock on ${lowestInStockStore.name} at ₹${lowestInStockStore.price.toLocaleString('en-IN')}.`}
                  </span>
                </div>
              ) : !selectedSizeInStock ? (
                <div className="flex items-start gap-2 text-xs font-semibold text-[#B45309]">
                  <AlertTriangle className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                  <span>
                    {activeStore.sizeMismatchNote ||
                      `Size ${selectedSize} is unavailable on ${activeStore.name} (available sizes: ${storeSizes.join(', ')}).`}
                  </span>
                </div>
              ) : isLowest ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-[#059669]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Lowest verified in-stock price for size {selectedSize}.</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-xs text-[#525866]">
                  <Info className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                  <span>
                    {lowestInStockStore.name} is ₹{priceDiff.toLocaleString('en-IN')} cheaper (₹{lowestInStockStore.price.toLocaleString('en-IN')}) in your size.
                  </span>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#111318]">
                  Select Size (synced to profile):
                </span>
                <span
                  className={`text-[11px] font-semibold ${
                    selectedSizeInStock ? 'text-[#059669]' : 'text-[#B45309]'
                  }`}
                >
                  {selectedSizeInStock
                    ? `In Stock on ${activeStore.name}`
                    : `Size ${selectedSize} Unavailable Here`}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((sz) => {
                  const isAvailable = storeIsInStock && storeSizes.includes(sz);
                  const isChosen = selectedSize === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => handlePickSize(sz)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer tabular-nums ${
                        isChosen
                          ? 'bg-[#111318] text-white'
                          : isAvailable
                          ? 'bg-white border border-[#E2E4E9] text-[#111318] hover:border-[#111318]/40'
                          : 'bg-neutral-100 border border-dashed border-[#E2E4E9] text-[#525866]/50 line-through'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
              {activeStore.stockNote && (
                <p className="text-[11px] text-[#525866] mt-2">{activeStore.stockNote}</p>
              )}
            </div>

            <div className="space-y-2 text-xs text-[#111318]/80 border-t border-[#E2E4E9] pt-3">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#059669] shrink-0" />
                <span>
                  <strong>Delivery:</strong> {activeStore.delivery}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <span>
                  <strong>Returns:</strong> {activeStore.returnPolicy}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#111318] shrink-0" />
                <span>
                  <strong>Seller:</strong> {activeStore.seller}
                </span>
              </div>
              {activeStore.bankOffer && (
                <p className="text-xs text-[#525866] pt-1">
                  <strong>Bank Offer:</strong> {activeStore.bankOffer}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#F8F9FA] border-t border-[#E2E4E9] px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#525866]">
            Selected Store: <strong className="text-[#111318]">{activeStore.name}</strong> · Size <strong className="text-[#111318]">{selectedSize}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={activeStore.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial whitespace-nowrap inline-flex items-center justify-center gap-2 bg-[#111318] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors"
            >
              <span>Open Product on {activeStore.name}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => onOrderProduct && onOrderProduct(product, activeStore)}
              className="flex-1 sm:flex-initial whitespace-nowrap inline-flex items-center justify-center gap-2 bg-white border border-[#E2E4E9] hover:border-[#111318]/40 text-[#111318] px-5 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>Save Order Summary</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
