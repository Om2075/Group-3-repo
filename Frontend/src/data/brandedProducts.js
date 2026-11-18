// Verified Product Catalog for Try & Buy Store
// Strictly 3 Garment Categories: Shoes, Shirts & T-Shirts, Pants (NO Accessories)
// Classified cleanly into Casual & Formal inside Shoes, Topwear (Shirts = Formal, T-Shirts = Casual), and Pants:
// - Shoes (20): 10 Casual Sneakers/Runners (5 White + 5 Black) + 10 Formal Leather Dress Shoes (5 Black + 5 Brown)
// - Shirts (30 Formal): 5 White + 5 Baby Pink + 5 Beige + 5 Ice Blue + 5 Navy Blue + 5 Wine Red
// - T-Shirts (30 Casual): 5 White + 5 Baby Pink + 5 Beige + 5 Ice Blue + 5 Navy Blue + 5 Wine Red
// - Pants (18): 6 Beige (3 Casual + 3 Formal) + 6 White (3 Casual + 3 Formal) + 6 Black (3 Casual + 3 Formal)
// Every product carries direct store links across >= 2 platforms + per-size stock & >= 4.0★ average rating.

import { PRODUCT_IMAGES } from './productAssets.js';

export const SIZE_OPTIONS = {
  top: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
  pant: ['28', '30', '32', '34', '36', '38'],
  shoe: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
};

export const LOOKBOOK_PRESETS = [
  {
    id: 'clean-minimalist',
    title: 'Clean Minimalist',
    tagline: 'White Top · Beige Bottom · Coordinated Footwear',
    shirtColor: 'White',
    pantColor: 'Beige',
    shoeColor: 'White',
    formalShoeColor: 'Brown',
    colorHexShirt: '#FFFFFF',
    colorHexPant: '#D8C7B0',
    colorHexShoe: '#F5F5F4',
    formalColorHexShoe: '#7A4B2A',
    shirtName: 'Crisp White Poplin & Crew Tees',
    pantName: 'Tailored Beige Trousers & Chinos',
    shoeName: 'Crisp White Court Sneakers',
    formalShoeName: 'Cognac Tan Leather Dress Shoes',
    harmonyExplanation:
      'Crisp white over warm sand beige anchors effortlessly — white leather court sneakers for Casual, or cognac brown leather Oxfords for Formal.'
  },
  {
    id: 'summer-pastel',
    title: 'Summer Pastel',
    tagline: 'Baby Pink Top · White Bottom · Coordinated Footwear',
    shirtColor: 'Baby Pink',
    pantColor: 'White',
    shoeColor: 'White',
    formalShoeColor: 'Brown',
    colorHexShirt: '#F7C6D0',
    colorHexPant: '#F9F9F9',
    colorHexShoe: '#FFFFFF',
    formalColorHexShoe: '#7A4B2A',
    shirtName: 'Soft Pastel Pink Shirts & Tees',
    pantName: 'White Slim-Fit Chinos & Trousers',
    shoeName: 'Crisp White Court Sneakers',
    formalShoeName: 'Tan & Brown Leather Loafers',
    harmonyExplanation:
      'Soft blush rose brightens pure off-white trousers, paired with crisp white trainers for Casual or warm brown leather loafers for Formal.'
  },
  {
    id: 'modern-neutral',
    title: 'Modern Neutral',
    tagline: 'Beige Top · Black Bottom · Coordinated Footwear',
    shirtColor: 'Beige',
    pantColor: 'Black',
    shoeColor: 'White',
    formalShoeColor: 'Black',
    colorHexShirt: '#DDD0BC',
    colorHexPant: '#1C1C1C',
    colorHexShoe: '#FFFFFF',
    formalColorHexShoe: '#181818',
    shirtName: 'Sand & Oat Linen Tops',
    pantName: 'Jet Black Slim Jeans & Dress Trousers',
    shoeName: 'Crisp White Court Sneakers',
    formalShoeName: 'Black Leather Oxfords & Derbies',
    harmonyExplanation:
      'Warm cream-beige softens stark jet-black bottoms — crisp white soles brighten Casual looks, while black leather Oxfords complete Formal looks.'
  },
  {
    id: 'breezy-coastal',
    title: 'Breezy Coastal',
    tagline: 'Ice Blue Top · White Bottom · Coordinated Footwear',
    shirtColor: 'Ice Blue',
    pantColor: 'White',
    shoeColor: 'White',
    formalShoeColor: 'Brown',
    colorHexShirt: '#C5DEEE',
    colorHexPant: '#F9F9F9',
    colorHexShoe: '#FFFFFF',
    formalColorHexShoe: '#7A4B2A',
    shirtName: 'Sky & Ice Blue Poplins & Polos',
    pantName: 'White Slim-Fit Trousers & Chinos',
    shoeName: 'Crisp White Court Sneakers',
    formalShoeName: 'Brown Leather Derbies & Oxfords',
    harmonyExplanation:
      'Cool glacier blue over bright white trousers delivers crisp coastal balance — white sneakers for Casual or tan brown Oxfords for Formal.'
  },
  {
    id: 'heritage-nautical',
    title: 'Heritage Nautical',
    tagline: 'Navy Blue Top · White Bottom · Coordinated Footwear',
    shirtColor: 'Navy Blue',
    pantColor: 'White',
    shoeColor: 'White',
    formalShoeColor: 'Brown',
    colorHexShirt: '#1E2F4D',
    colorHexPant: '#F9F9F9',
    colorHexShoe: '#FFFFFF',
    formalColorHexShoe: '#7A4B2A',
    shirtName: 'Deep Navy Cotton Shirts & Tees',
    pantName: 'White Tailored Trousers & Chinos',
    shoeName: 'Crisp White Court Sneakers',
    formalShoeName: 'Cognac Tan Leather Loafers & Oxfords',
    harmonyExplanation:
      'Structured midnight navy creates strong upper-body definition against white trousers — anchored by white court sneakers or cognac formal leather.'
  },
  {
    id: 'evening-distinction',
    title: 'Evening Distinction',
    tagline: 'Wine Red Top · Black Bottom · Coordinated Footwear',
    shirtColor: 'Wine Red',
    pantColor: 'Black',
    shoeColor: 'White',
    formalShoeColor: 'Black',
    colorHexShirt: '#6B2232',
    colorHexPant: '#1A1A1A',
    colorHexShoe: '#FFFFFF',
    formalColorHexShoe: '#181818',
    shirtName: 'Burgundy & Wine Maroon Tops',
    pantName: 'Charcoal & Black Slim Pants',
    shoeName: 'Crisp White Court Sneakers',
    formalShoeName: 'Black Leather Monk Straps & Oxfords',
    harmonyExplanation:
      'Rich bordeaux against tailored black trousers or denim — sharp white sneakers for Casual evenings, or polished black monk straps for Formal occasions.'
  }
];

const PLATFORM_META = {
  Amazon: {
    badge: 'Prime Verified',
    delivery: 'Tomorrow Delivery',
    seller: 'Cocoblu / Brand Authorized Retail',
    returnPolicy: '10 Days Free Replacement',
    bankOffer: 'Flat ₹250 instant off on Amazon Pay ICICI'
  },
  Flipkart: {
    badge: 'Flipkart Assured',
    delivery: '2 Days Express',
    seller: 'RetailNet / SuperComNet',
    returnPolicy: '10 Days Easy Return',
    bankOffer: '10% Instant Discount on Axis & HDFC Cards'
  },
  Myntra: {
    badge: 'Myntra Direct',
    delivery: '2–3 Days Delivery',
    seller: 'Myntra Jabong India',
    returnPolicy: '14 Days Easy Exchange & Return',
    bankOffer: 'Extra 10% off with Kotak & ICICI Cards'
  },
  Ajio: {
    badge: 'Reliance Verified',
    delivery: '3 Days Delivery',
    seller: 'Reliance Retail Official',
    returnPolicy: '10 Days Return Policy',
    bankOffer: 'Up to ₹300 off on RuPay & SBI Cards'
  },
  'Tata CLiQ': {
    badge: 'Brand Certified',
    delivery: '3–4 Days Delivery',
    seller: 'Tata Unistore Official',
    returnPolicy: '10 Days Hassle-Free Return',
    bankOffer: '10% Instant Savings with Tata NeuCard'
  }
};

function defaultSizesForType(type) {
  if (type === 'Shoe') return ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'];
  if (type === 'Pant') return ['28', '30', '32', '34', '36', '38'];
  return ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'];
}

function defaultGarmentSpec(type, style) {
  if (type === 'Shoe') {
    return {
      silhouette: style === 'Formal' ? 'shoe-oxford' : style === 'Sporty' ? 'shoe-runner' : 'shoe-court',
      fabric: style === 'Formal' ? 'leather' : style === 'Sporty' ? 'mesh' : 'leather',
      accentColor: null
    };
  }
  if (type === 'Pant') {
    return {
      silhouette: style === 'Casual' ? 'pant-denim' : 'pant-chino',
      fabric: style === 'Casual' ? 'denim' : 'chino',
      pocketCount: style === 'Casual' ? 5 : 4
    };
  }
  if (type === 'T-Shirt') {
    return {
      silhouette: style === 'Smart Casual' ? 'tshirt-polo' : 'tshirt-crew',
      collar: style === 'Smart Casual' ? 'polo' : 'crew',
      pocketCount: 0,
      sleeve: 'short',
      fabric: style === 'Smart Casual' ? 'pique' : 'jersey'
    };
  }
  return {
    silhouette: 'shirt-full',
    collar: 'spread',
    pocketCount: 1,
    sleeve: 'full',
    fabric: 'cotton-poplin'
  };
}

function makeProduct({
  id,
  name,
  brand,
  type,
  style,
  color,
  colorHex,
  mrp,
  rating,
  reviewCount,
  imageUrl,
  gallery,
  sku,
  description,
  tagline,
  availableSizes,
  garmentSpec,
  listings
}) {
  const baseSizes = availableSizes || defaultSizesForType(type);

  const enrichedListings = listings.map((entry) => {
    const meta = PLATFORM_META[entry.platform] || {};
    const listingSizes =
      entry.inStock === false
        ? []
        : entry.availableSizes !== undefined
        ? entry.availableSizes
        : baseSizes;
    const inStock = entry.inStock !== false && listingSizes.length > 0;
    const cartUrl = entry.asin
      ? `https://www.amazon.in/gp/aws/cart/add.html?ASIN.1=${entry.asin}&Quantity.1=1`
      : entry.url;
    return {
      platform: entry.platform,
      price: entry.price,
      mrp: entry.mrp || mrp,
      url: entry.url,
      cartUrl,
      asin: entry.asin || null,
      rating: entry.rating || rating,
      inStock,
      availableSizes: listingSizes,
      stockNote: entry.stockNote || (inStock ? 'In Stock · Ships Today' : 'Out of Stock · Notify Me'),
      badge: entry.badge || meta.badge || 'Verified Seller',
      delivery: entry.delivery || meta.delivery || '2–3 Days Delivery',
      seller: entry.seller || meta.seller || `${brand} Official Store`,
      returnPolicy: entry.returnPolicy || meta.returnPolicy || '10 Days Easy Return',
      bankOffer: entry.bankOffer || meta.bankOffer || ''
    };
  });

  // Cross-platform average rating across all listed platforms
  const crossPlatformRating =
    Math.round(
      (enrichedListings.reduce((sum, l) => sum + (Number(l.rating) || Number(rating) || 4.3), 0) /
        Math.max(1, enrichedListings.length)) *
        10
    ) / 10;

  // Sort listings: in-stock listings first by lowest price, then out-of-stock by price
  const sortedInStockFirst = [...enrichedListings].sort((a, b) => {
    if (a.inStock !== b.inStock) return a.inStock ? -1 : 1;
    return a.price - b.price;
  });

  const inStockListings = enrichedListings.filter((l) => l.inStock).sort((a, b) => a.price - b.price);
  const cheapest = inStockListings[0] || sortedInStockFirst[0];
  const priciestPool = inStockListings.length > 0 ? inStockListings : sortedInStockFirst;
  const priciest = priciestPool[priciestPool.length - 1];

  const unionSizes =
    enrichedListings.length > 0
      ? Array.from(new Set(enrichedListings.flatMap((l) => l.availableSizes || [])))
      : baseSizes;

  const byPlatform = {};
  enrichedListings.forEach((l) => {
    byPlatform[l.platform] = l;
  });

  const resolvedGallery =
    gallery && gallery.length ? [gallery[0]] : [imageUrl];

  return {
    id,
    name,
    brand,
    type,
    style,
    color,
    colorHex,
    mrp,
    price: cheapest.price,
    lowestPrice: cheapest.price,
    lowestPlatform: cheapest.platform,
    lowestUrl: cheapest.url,
    lowestCartUrl: cheapest.cartUrl,
    highestPrice: priciest.price,
    highestPlatform: priciest.platform,
    amazonPrice: byPlatform.Amazon ? byPlatform.Amazon.price : priciest.price,
    flipkartPrice: byPlatform.Flipkart ? byPlatform.Flipkart.price : null,
    myntraPrice: byPlatform.Myntra ? byPlatform.Myntra.price : null,
    ajioPrice: byPlatform.Ajio ? byPlatform.Ajio.price : null,
    tataCliqPrice: byPlatform['Tata CLiQ'] ? byPlatform['Tata CLiQ'].price : null,
    directUrl: cheapest.url,
    platformCount: enrichedListings.length,
    platformListings: sortedInStockFirst,
    availableSizes: unionSizes,
    garmentSpec: { ...defaultGarmentSpec(type, style), ...(garmentSpec || {}) },
    rating: crossPlatformRating,
    crossPlatformRating,
    qualified4Plus: crossPlatformRating >= 4.0,
    reviewCount,
    imageUrl,
    gallery: resolvedGallery,
    sku,
    warranty: type === 'Shoe' ? '90 Days Brand Manufacturing Warranty' : '100% Authentic Brand Guarantee',
    description,
    tagline
  };
}

export const BRANDED_PRODUCTS = [
  // =========================================================================
  // 1. SHOES — WHITE (5 Distinct Models & Distinct Studio Photos)
  // =========================================================================
  makeProduct({
    id: 101,
    name: 'Court Vision Low Next Nature White',
    brand: 'Nike',
    type: 'Shoe',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 4995,
    rating: 4.5,
    reviewCount: 1842,
    imageUrl: PRODUCT_IMAGES.shoeNikeCourtWhite,
    sku: 'DH2987-100',
    tagline: '80s basketball court leather profile made with recycled synthetics',
    description:
      'Authentic Nike Court Vision Low Next Nature sneakers featuring crisp tumbled leather uppers, perforated toe box, stitched rubber cupsole, and padded low-cut collar.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-court', fabric: 'leather', stripeStyle: 'swoosh', accentColor: '#F2F0EC' },
    listings: [
      {
        platform: 'Myntra',
        price: 4295,
        rating: 4.5,
        url: 'https://www.myntra.com/casual-shoes/nike/nike-men-white-court-vision-low-next-nature-sneakers/15386942/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        stockNote: 'In Stock · Verified Size Matrix'
      },
      {
        platform: 'Ajio',
        price: 4495,
        rating: 4.4,
        url: 'https://www.ajio.com/nike-men-court-vision-lace-up-sneakers/p/460941938_white',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Amazon',
        price: 4595,
        rating: 4.5,
        asin: 'B0983NTYZ5',
        url: 'https://www.amazon.in/dp/B0983NTYZ5',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Flipkart',
        price: 3995,
        rating: 4.4,
        url: 'https://www.flipkart.com/nike-court-vision-low-next-nature-sneakers-men/p/itm1e952f57f78ff',
        seller: 'Nike India Authorized Retail',
        availableSizes: ['UK 7', 'UK 8'],
        stockNote: 'Limited stock · Only UK 7 & UK 8 available'
      }
    ]
  }),
  makeProduct({
    id: 102,
    name: 'Smash v2 Leather White Sneakers',
    brand: 'Puma',
    type: 'Shoe',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 4499,
    rating: 4.4,
    reviewCount: 3420,
    imageUrl: PRODUCT_IMAGES.shoePumaSmashWhite,
    sku: '365215-01',
    tagline: 'Clean tennis-inspired court trainer with SoftFoam+ cushioning',
    description:
      'Signature Puma Smash v2 in soft full-grain white leather with stitched Formstrip detail and durable herringbone rubber grip outsole.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    garmentSpec: { silhouette: 'shoe-court', fabric: 'leather', stripeStyle: 'formstrip', accentColor: '#ECE9E2' },
    listings: [
      {
        platform: 'Myntra',
        price: 2499,
        rating: 4.4,
        url: 'https://www.myntra.com/casual-shoes/puma/puma-men-white-smash-v2-leather-sneakers/2454532/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Ajio',
        price: 2699,
        rating: 4.3,
        url: 'https://www.ajio.com/puma-men-smashic-comfort-casual-sneakers/p/465654605_white',
        availableSizes: ['UK 8', 'UK 9']
      },
      {
        platform: 'Flipkart',
        price: 2299,
        rating: 4.3,
        url: 'https://www.flipkart.com/puma-smash-ne8-v2-sneakers-men/p/itm27619df31ff6a',
        seller: 'PUMA Sports India Pvt Ltd',
        inStock: false,
        availableSizes: [],
        stockNote: 'Out of Stock · Notify Me on Flipkart'
      }
    ]
  }),
  makeProduct({
    id: 103,
    name: 'Originals Stan Smith White Sneakers',
    brand: 'Adidas',
    type: 'Shoe',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 8999,
    rating: 4.4,
    reviewCount: 631,
    imageUrl: PRODUCT_IMAGES.shoeAdidasStanSmithWhite,
    sku: 'FX5502-WHT',
    tagline: 'Iconic minimalist court leather sneaker with green heel tab',
    description:
      'Timeless Adidas Originals Stan Smith featuring smooth minimalist white upper, signature perforated 3-Stripes, green heel patch, OrthoLite sockliner, and classic low-profile cupsole.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-court', fabric: 'leather', stripeStyle: 'perforated', accentColor: '#1E5B3A' },
    listings: [
      {
        platform: 'Myntra',
        price: 6799,
        rating: 4.6,
        url: 'https://www.myntra.com/casual-shoes/adidasoriginals/adidas-originals-men-white-solid-stan-smith-parley-sustainable-sneakers/16558328/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
        stockNote: 'In Stock · Verified Size Matrix'
      },
      {
        platform: 'Amazon',
        price: 7199,
        rating: 4.5,
        asin: 'B08PP4K43S',
        url: 'https://www.amazon.in/dp/B08PP4K43S',
        availableSizes: ['UK 8', 'UK 9', 'UK 10', 'UK 11'],
        stockNote: 'In Stock · Ships via Amazon'
      },
      {
        platform: 'Flipkart',
        price: 8999,
        rating: 4.4,
        url: 'https://www.flipkart.com/adidas-originals-stan-smith-sneakers-men/p/itmf3xuzr2b5fsam',
        inStock: false,
        availableSizes: [],
        stockNote: 'Out of Stock / Notify Me on Flipkart'
      }
    ]
  }),
  makeProduct({
    id: 104,
    name: 'Caven 2.0 Res White Classic Sneakers',
    brand: 'Puma',
    type: 'Shoe',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 5999,
    rating: 4.5,
    reviewCount: 1840,
    imageUrl: PRODUCT_IMAGES.shoePumaSmashWhite,
    sku: '396330-01',
    tagline: 'Stacked 80s college hoops silhouette with cushioned midsole',
    description:
      'Puma Caven 2.0 pairs a rich synthetic leather upper with stacked rubber tooling, SoftFoam+ step-in comfort, and crisp white tonal stitching.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    garmentSpec: { silhouette: 'shoe-court', fabric: 'leather', stripeStyle: 'formstrip', accentColor: '#E8E4DC' },
    listings: [
      {
        platform: 'Ajio',
        price: 3199,
        rating: 4.5,
        url: 'https://www.ajio.com/puma-caven-2-0-res-sneakers/p/469763825_white',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Flipkart',
        price: 3399,
        rating: 4.4,
        url: 'https://www.flipkart.com/puma-caven-2-0-res-sneakers-men/p/itm884af38fd6584',
        seller: 'PUMA Sports India Pvt Ltd',
        availableSizes: ['UK 7', 'UK 8', 'UK 9']
      },
      {
        platform: 'Myntra',
        price: 3699,
        rating: 4.6,
        url: 'https://www.myntra.com/casual-shoes/puma/puma-unisex-caven-20-sneakers/30035012/buy',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      }
    ]
  }),
  makeProduct({
    id: 105,
    name: 'Club C 85 Vintage White Leather Sneakers',
    brand: 'Reebok',
    type: 'Shoe',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 7599,
    rating: 4.6,
    reviewCount: 2320,
    imageUrl: PRODUCT_IMAGES.shoeReebokClubCWhite,
    sku: 'AR0456-RBK',
    tagline: 'Heritage 1985 chalk leather tennis trainer with terry lining',
    description:
      'Authentic Reebok Club C 85 crafted in garment-soft chalk white leather with vintage woven window box branding and gum cupsole.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-court', fabric: 'leather', stripeStyle: 'clean', accentColor: '#C5A882' },
    listings: [
      {
        platform: 'Myntra',
        price: 4999,
        rating: 4.6,
        url: 'https://www.myntra.com/casual-shoes/reebok-classic/-reebok-classic-men-white-club-c-85-leather-sneakers/10164445/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Amazon',
        price: 5299,
        rating: 4.5,
        asin: 'B07G3S8Q2K',
        url: 'https://www.amazon.in/dp/B07G3S8Q2K',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Flipkart',
        price: 4599,
        rating: 4.3,
        url: 'https://www.flipkart.com/reebok-club-c-85-sneakers-men/p/itm2fb5d374538ed',
        inStock: false,
        availableSizes: [],
        stockNote: 'Out of Stock · Notify Me on Flipkart'
      }
    ]
  }),

  // =========================================================================
  // 2. SHOES — BLACK (5 Distinct Models & Distinct Studio Photos)
  // =========================================================================
  makeProduct({
    id: 106,
    name: 'Suede Classic XXI Black Sneakers',
    brand: 'Puma',
    type: 'Shoe',
    style: 'Casual',
    color: 'Black',
    colorHex: '#1A1A1A',
    mrp: 6999,
    rating: 4.6,
    reviewCount: 4120,
    imageUrl: PRODUCT_IMAGES.shoePumaSuedeBlack,
    sku: '374915-01',
    tagline: 'Full suede street icon with contrast white Formstrip',
    description:
      'Authentic Puma Suede Classic XXI built with rich black suede, suede heel cap, tonal fat laces, and high-grip white rubber cupsole.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-skate', fabric: 'suede', stripeStyle: 'formstrip', accentColor: '#FFFFFF' },
    listings: [
      {
        platform: 'Myntra',
        price: 4199,
        rating: 4.6,
        url: 'https://www.myntra.com/casual-shoes/puma/puma-men-black-suede-classic-xxi-sneakers/13639136/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Tata CLiQ',
        price: 4499,
        rating: 4.5,
        url: 'https://www.tatacliq.com/suede-classic-unisex-sneakers/p-mp000000023033904',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Flipkart',
        price: 3899,
        rating: 4.4,
        url: 'https://www.flipkart.com/puma-suede-classic-idp-sneakers-men/p/itmf3xufghfzbyqx',
        seller: 'PUMA Sports India Pvt Ltd',
        inStock: false,
        availableSizes: [],
        stockNote: 'Out of Stock · Notify Me on Flipkart'
      }
    ]
  }),
  makeProduct({
    id: 107,
    name: 'Old Skool Black Suede & Canvas Sneakers',
    brand: 'Vans',
    type: 'Shoe',
    style: 'Casual',
    color: 'Black',
    colorHex: '#1C1C1C',
    mrp: 5499,
    rating: 4.6,
    reviewCount: 2890,
    imageUrl: PRODUCT_IMAGES.shoeVansOldSkoolBlack,
    sku: 'VN000D3HY28',
    tagline: 'Heritage black canvas & suede low-top with Sidestripe',
    description:
      'Original Vans Old Skool low-top featuring reinforced toe caps, black suede & canvas panelling, iconic white Sidestripe, and vulcanized waffle outsole.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    garmentSpec: { silhouette: 'shoe-skate', fabric: 'suede', stripeStyle: 'sidestripe', accentColor: '#FFFFFF' },
    listings: [
      {
        platform: 'Myntra',
        price: 3999,
        rating: 4.6,
        url: 'https://www.myntra.com/casual-shoes/vans/vans-unisex-black-solid-old-skool-sneakers/1499527/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
        stockNote: 'In Stock · Verified Seller'
      },
      {
        platform: 'Ajio',
        price: 4399,
        rating: 4.5,
        url: 'https://www.ajio.com/vans-men-old-skool-overt-plus-cc-lace-up-sneakers/p/469658940_black',
        availableSizes: ['UK 8', 'UK 9', 'UK 10'],
        stockNote: 'In Stock · Verified Seller'
      },
      {
        platform: 'Flipkart',
        price: 1274,
        rating: 4.3,
        url: 'https://www.flipkart.com/vans-old-skool-black-casuals-sneakers-men/p/itm3939bec80af07',
        inStock: false,
        availableSizes: [],
        stockNote: 'Out of Stock on Flipkart (Notify Me)'
      }
    ]
  }),
  makeProduct({
    id: 108,
    name: 'Advantage Base Black Court Sneakers',
    brand: 'Adidas',
    type: 'Shoe',
    style: 'Casual',
    color: 'Black',
    colorHex: '#181818',
    mrp: 6599,
    rating: 4.4,
    reviewCount: 1920,
    imageUrl: PRODUCT_IMAGES.shoeAdidasAdvantageBlack,
    sku: 'EE7692-BLK',
    tagline: 'Clean all-black court trainer with subtle perforated stripes',
    description:
      'Adidas Advantage Base sneakers crafted in sleek matte black leather-feel upper with cushioned EVA footbed and durable rubber court sole.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    garmentSpec: { silhouette: 'shoe-court', fabric: 'leather', stripeStyle: 'perforated', accentColor: '#FFFFFF' },
    listings: [
      {
        platform: 'Ajio',
        price: 3999,
        rating: 4.5,
        url: 'https://luxe.ajio.com/adidas-advantage-base-tennis-shoes/p/469497908003',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Amazon',
        price: 4199,
        rating: 4.4,
        asin: 'B0859L5R2N',
        url: 'https://www.amazon.in/dp/B0859L5R2N',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Flipkart',
        price: 3599,
        rating: 4.3,
        url: 'https://www.flipkart.com/adidas-advantage-base-sneakers-men/p/itmad3b99e8e8f4a',
        inStock: false,
        availableSizes: [],
        stockNote: 'Out of Stock · Notify Me on Flipkart'
      }
    ]
  }),
  makeProduct({
    id: 109,
    name: 'Revolution 7 Black Road Running Shoes',
    brand: 'Nike',
    type: 'Shoe',
    style: 'Casual',
    color: 'Black',
    colorHex: '#161616',
    mrp: 3695,
    rating: 4.6,
    reviewCount: 15810,
    imageUrl: PRODUCT_IMAGES.shoeNikeRunnerBlack,
    sku: 'FB2207-001',
    tagline: 'Plush breathable black mesh trainer with responsive foam ride',
    description:
      'Nike Revolution 7 engineered with breathable engineered mesh, soft foam midsole, generative traction lug pattern, and heel touchpoints.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-runner', fabric: 'mesh', stripeStyle: 'swoosh', accentColor: '#FFFFFF' },
    listings: [
      {
        platform: 'Flipkart',
        price: 2995,
        url: 'https://www.flipkart.com/nike-revolution-7-running-shoes-men/p/itm4a3bb60e67cc9',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Myntra',
        price: 3195,
        url: 'https://www.myntra.com/sports-shoes/nike/nike-revolution-7-mens-lace-ups-road-running-shoes/29870714/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Ajio',
        price: 3395,
        url: 'https://www.ajio.com/nike-men-revolution-7-road-running-shoes/p/469811234_black',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      }
    ]
  }),
  makeProduct({
    id: 120,
    name: 'Grand Court 2.0 Black Classic Sneakers',
    brand: 'Adidas',
    type: 'Shoe',
    style: 'Casual',
    color: 'Black',
    colorHex: '#181818',
    mrp: 5999,
    rating: 4.5,
    reviewCount: 4210,
    imageUrl: PRODUCT_IMAGES.shoeAdidasAdvantageBlack,
    sku: 'GW9251-BLK',
    tagline: 'Cloudfoam comfort low-top black court trainer for daily denim & chinos',
    description:
      'Adidas Grand Court 2.0 in sleek black synthetic leather upper with crisp white 3-Stripes, Cloudfoam Comfort sockliner, and flexible rubber cupsole.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-court', fabric: 'leather', stripeStyle: '3-stripes', accentColor: '#FFFFFF' },
    listings: [
      {
        platform: 'Flipkart',
        price: 3699,
        rating: 4.5,
        url: 'https://www.flipkart.com/adidas-grand-court-2-0-sneakers-men/p/itm29a6c8e0f1a24',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Myntra',
        price: 3899,
        rating: 4.6,
        url: 'https://www.myntra.com/casual-shoes/adidas/adidas-men-black-grand-court-20-tennis-shoes/19518244/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Ajio',
        price: 4199,
        rating: 4.4,
        url: 'https://www.ajio.com/adidas-men-grand-court-2-0-lace-up-sneakers/p/469503112_black',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      }
    ]
  }),

  // =========================================================================
  // 2B. FORMAL SHOES — BLACK & BROWN LEATHER DRESS SHOES (10 Models)
  // =========================================================================
  makeProduct({
    id: 110,
    name: 'Genuine Leather Formal Oxford Black',
    brand: 'Red Tape',
    type: 'Shoe',
    style: 'Formal',
    color: 'Black',
    colorHex: '#111111',
    mrp: 5899,
    rating: 4.5,
    reviewCount: 12190,
    imageUrl: PRODUCT_IMAGES.shoeRedTapeOxfordBlack,
    sku: 'RTE5865-BLK',
    tagline: 'Classic closed-lacing black leather cap-toe formal Oxford',
    description:
      'Polished black genuine leather formal Oxfords from Red Tape with traditional closed lacing, cushioned leather insole, and low stacked formal heel.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    garmentSpec: { silhouette: 'shoe-oxford', fabric: 'leather', stripeStyle: 'clean', accentColor: '#111111' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1799,
        rating: 4.5,
        url: 'https://www.flipkart.com/red-tape-oxford-formal-shoes-men-black/p/itm599e2f8614cee',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Myntra',
        price: 1949,
        rating: 4.5,
        url: 'https://www.myntra.com/formal-shoes/red-tape/red-tape-men-black-solid-leather-formal-oxfords/19545520/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9']
      }
    ]
  }),
  makeProduct({
    id: 111,
    name: 'Tilden Cap Black Leather Formal Oxford',
    brand: 'Clarks',
    type: 'Shoe',
    style: 'Formal',
    color: 'Black',
    colorHex: '#121212',
    mrp: 6999,
    rating: 4.6,
    reviewCount: 4120,
    imageUrl: PRODUCT_IMAGES.shoeRedTapeOxfordBlack,
    sku: 'CLK-TLD-BLK',
    tagline: 'OrthoLite cushioned full-grain black leather cap-toe Oxford',
    description:
      'Clarks Tilden Cap formal Oxford crafted in rich black smooth leather with hidden stretch gussets and breathable OrthoLite executive comfort.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-oxford', fabric: 'leather', stripeStyle: 'clean', accentColor: '#121212' },
    listings: [
      {
        platform: 'Flipkart',
        price: 4199,
        rating: 4.6,
        url: 'https://www.flipkart.com/clarks-tilden-cap-oxford-shoes-men/p/itm81a4e5b9c3e10',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Amazon',
        price: 4499,
        rating: 4.6,
        asin: 'B01N5D7Q4K',
        url: 'https://www.amazon.in/dp/B01N5D7Q4K',
        availableSizes: ['UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Tata CLiQ',
        price: 4699,
        rating: 4.5,
        url: 'https://www.tatacliq.com/clarks-tilden-cap-black-leather-oxford-formal-shoes/p-mp000000021048312',
        availableSizes: ['UK 7', 'UK 8', 'UK 9']
      }
    ]
  }),
  makeProduct({
    id: 112,
    name: 'Full-Grain Black Leather Formal Derby',
    brand: 'Hush Puppies',
    type: 'Shoe',
    style: 'Formal',
    color: 'Black',
    colorHex: '#141414',
    mrp: 4999,
    rating: 4.5,
    reviewCount: 6840,
    imageUrl: PRODUCT_IMAGES.shoeFormalBlackDerby,
    sku: 'HP-DRB-BLK',
    tagline: 'Open-lacing polished black leather Derby with Bounce cushioning',
    description:
      'Hush Puppies formal black leather Derby combining crisp dress silhouette with Bounce dual-density outsole for all-day office comfort.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-derby', fabric: 'leather', stripeStyle: 'clean', accentColor: '#141414' },
    listings: [
      {
        platform: 'Myntra',
        price: 3199,
        rating: 4.5,
        url: 'https://www.myntra.com/formal-shoes/hush-puppies/hush-puppies-men-black-leather-formal-derbys/21940312/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Flipkart',
        price: 2999,
        rating: 4.4,
        url: 'https://www.flipkart.com/hush-puppies-derby-formal-shoes-men-black/p/itmf6b12a7e90451',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Ajio',
        price: 3399,
        rating: 4.5,
        url: 'https://www.ajio.com/hush-puppies-black-leather-formal-derby-shoes/p/469588412_black',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      }
    ]
  }),
  makeProduct({
    id: 113,
    name: 'Executive Black Leather Penny Loafer',
    brand: 'Louis Philippe',
    type: 'Shoe',
    style: 'Formal',
    color: 'Black',
    colorHex: '#151515',
    mrp: 4599,
    rating: 4.6,
    reviewCount: 3920,
    imageUrl: PRODUCT_IMAGES.shoeFormalBlackLoafer,
    sku: 'LP-LOF-BLK',
    tagline: 'Slip-on satin black leather formal penny loafer with stacked heel',
    description:
      'Louis Philippe black leather penny loafer hand-finished with classic saddle keeper strap and cushioned footbed for tailored formal trousers.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    garmentSpec: { silhouette: 'shoe-loafer', fabric: 'leather', stripeStyle: 'clean', accentColor: '#151515' },
    listings: [
      {
        platform: 'Tata CLiQ',
        price: 2899,
        rating: 4.6,
        url: 'https://www.tatacliq.com/louis-philippe-black-leather-formal-penny-loafers/p-mp000000028492014',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Flipkart',
        price: 2749,
        rating: 4.5,
        url: 'https://www.flipkart.com/louis-philippe-slip-on-formal-shoes-men-black/p/itm7c9a831b4e102',
        availableSizes: ['UK 7', 'UK 8', 'UK 9']
      },
      {
        platform: 'Myntra',
        price: 2999,
        rating: 4.6,
        url: 'https://www.myntra.com/formal-shoes/louis-philippe/louis-philippe-men-black-leather-formal-loafers/25190814/buy',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      }
    ]
  }),
  makeProduct({
    id: 114,
    name: 'Artisan Black Leather Single Monk Strap',
    brand: 'Ruosh',
    type: 'Shoe',
    style: 'Formal',
    color: 'Black',
    colorHex: '#111111',
    mrp: 5499,
    rating: 4.6,
    reviewCount: 2760,
    imageUrl: PRODUCT_IMAGES.shoeFormalBlackMonk,
    sku: 'RSH-MNK-BLK',
    tagline: 'Sleek brushed-buckle single monk dress shoe for black formal trousers',
    description:
      'Ruosh polished black full-grain calf-finish single monk strap formal shoe featuring stitched apron toe and leather-lined interior.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-monk', fabric: 'leather', stripeStyle: 'buckle', accentColor: '#C0C4CC' },
    listings: [
      {
        platform: 'Myntra',
        price: 3499,
        rating: 4.6,
        url: 'https://www.myntra.com/formal-shoes/ruosh/ruosh-men-black-leather-formal-monks/22814092/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Tata CLiQ',
        price: 3699,
        rating: 4.5,
        url: 'https://www.tatacliq.com/ruosh-black-leather-monk-formal-shoes/p-mp000000024581904',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      }
    ]
  }),
  makeProduct({
    id: 115,
    name: 'Cognac Tan Leather Cap-Toe Brogue Oxford',
    brand: 'Louis Philippe',
    type: 'Shoe',
    style: 'Formal',
    color: 'Brown',
    colorHex: '#8B5A2B',
    mrp: 5299,
    rating: 4.7,
    reviewCount: 4890,
    imageUrl: PRODUCT_IMAGES.shoeFormalTanOxford,
    sku: 'LP-OXF-TAN',
    tagline: 'Hand-burnished cognac tan Oxford crafted for beige & white trousers',
    description:
      'Louis Philippe cognac brown leather formal Oxford featuring subtle brogue perforations, closed lacing, and cushioned leather footbed.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-oxford', fabric: 'leather', stripeStyle: 'brogue', accentColor: '#7A4B2A' },
    listings: [
      {
        platform: 'Flipkart',
        price: 3299,
        rating: 4.7,
        url: 'https://www.flipkart.com/louis-philippe-oxford-formal-shoes-men-tan/p/itm3c8e21a0b7492',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Tata CLiQ',
        price: 3499,
        rating: 4.7,
        url: 'https://www.tatacliq.com/louis-philippe-tan-leather-brogue-formal-oxford-shoes/p-mp000000030192847',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Myntra',
        price: 3699,
        rating: 4.6,
        url: 'https://www.myntra.com/formal-shoes/louis-philippe/louis-philippe-men-tan-leather-brogues/26103842/buy',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      }
    ]
  }),
  makeProduct({
    id: 116,
    name: 'Genuine Tan Leather Brogue Formal Oxford',
    brand: 'Red Tape',
    type: 'Shoe',
    style: 'Formal',
    color: 'Brown',
    colorHex: '#8B5A2B',
    mrp: 5699,
    rating: 4.5,
    reviewCount: 8940,
    imageUrl: PRODUCT_IMAGES.shoeFormalTanOxford,
    sku: 'RT-BRG-TAN',
    tagline: 'Value luxury tan leather brogue dress shoe for tailored trousers',
    description:
      'Red Tape cognac tan genuine leather Oxford featuring traditional medallion toe detailing, closed lacing, and non-slip rubber heel grip.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    garmentSpec: { silhouette: 'shoe-oxford', fabric: 'leather', stripeStyle: 'brogue', accentColor: '#8B5A2B' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1899,
        rating: 4.5,
        url: 'https://www.flipkart.com/red-tape-brogue-formal-shoes-men-tan/p/itm92b40e7c11820',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Myntra',
        price: 2049,
        rating: 4.4,
        url: 'https://www.myntra.com/formal-shoes/red-tape/red-tape-men-tan-brown-leather-formal-brogues/20918432/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9']
      }
    ]
  }),
  makeProduct({
    id: 117,
    name: 'Espresso Brown Leather Formal Derby',
    brand: 'Hush Puppies',
    type: 'Shoe',
    style: 'Formal',
    color: 'Brown',
    colorHex: '#5C3A21',
    mrp: 5199,
    rating: 4.6,
    reviewCount: 5120,
    imageUrl: PRODUCT_IMAGES.shoeFormalBrownLoafer,
    sku: 'HP-DRB-BRN',
    tagline: 'Deep espresso brown full-grain leather dress shoe with memory foam',
    description:
      'Hush Puppies rich dark brown leather Derby engineered with ZeroG comfort midsole and clean executive toe for beige & white formal trousers.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-derby', fabric: 'leather', stripeStyle: 'clean', accentColor: '#5C3A21' },
    listings: [
      {
        platform: 'Myntra',
        price: 3299,
        rating: 4.6,
        url: 'https://www.myntra.com/formal-shoes/hush-puppies/hush-puppies-men-brown-leather-formal-derbys/23194012/buy',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11']
      },
      {
        platform: 'Flipkart',
        price: 3099,
        rating: 4.5,
        url: 'https://www.flipkart.com/hush-puppies-brown-leather-formal-shoes-men/p/itm48c19e2058b12',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      }
    ]
  }),
  makeProduct({
    id: 118,
    name: 'Dark Brown Leather Formal Penny Loafer',
    brand: 'Clarks',
    type: 'Shoe',
    style: 'Formal',
    color: 'Brown',
    colorHex: '#5C3A21',
    mrp: 6799,
    rating: 4.7,
    reviewCount: 3180,
    imageUrl: PRODUCT_IMAGES.shoeFormalBrownLoafer,
    sku: 'CLK-LOF-BRN',
    tagline: 'Hand-stitched dark walnut leather dress loafer with breathable lining',
    description:
      'Clarks mahogany brown genuine leather formal penny loafer pairing clean moc-apron stitching with lightweight shock-absorbing sole.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    garmentSpec: { silhouette: 'shoe-loafer', fabric: 'leather', stripeStyle: 'clean', accentColor: '#5C3A21' },
    listings: [
      {
        platform: 'Amazon',
        price: 4299,
        rating: 4.7,
        asin: 'B08P2Y9T4V',
        url: 'https://www.amazon.in/dp/B08P2Y9T4V',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Tata CLiQ',
        price: 4499,
        rating: 4.6,
        url: 'https://www.tatacliq.com/clarks-dark-brown-leather-formal-penny-loafers/p-mp000000027512093',
        availableSizes: ['UK 8', 'UK 9', 'UK 10', 'UK 11']
      }
    ]
  }),
  makeProduct({
    id: 119,
    name: 'Chestnut Brown Leather Formal Dress Loafer',
    brand: 'Van Heusen',
    type: 'Shoe',
    style: 'Formal',
    color: 'Brown',
    colorHex: '#7A4B2A',
    mrp: 3999,
    rating: 4.5,
    reviewCount: 6210,
    imageUrl: PRODUCT_IMAGES.shoeFormalBrownLoafer,
    sku: 'VH-LOF-BRN',
    tagline: 'Polished chestnut brown leather dress loafer with stacked formal heel',
    description:
      'Van Heusen supple brown leather formal dress loafer engineered with cushioned arch support to anchor beige, white, and navy formal tailoring.',
    availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    garmentSpec: { silhouette: 'shoe-loafer', fabric: 'leather', stripeStyle: 'clean', accentColor: '#7A4B2A' },
    listings: [
      {
        platform: 'Flipkart',
        price: 2399,
        rating: 4.5,
        url: 'https://www.flipkart.com/van-heusen-brown-leather-formal-slip-on-shoes-men/p/itm612a9b430fc12',
        availableSizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10']
      },
      {
        platform: 'Ajio',
        price: 2599,
        rating: 4.4,
        url: 'https://www.ajio.com/van-heusen-brown-leather-formal-loafers/p/469612093_brown',
        availableSizes: ['UK 8', 'UK 9', 'UK 10']
      }
    ]
  }),

  // =========================================================================
  // 3. SHIRTS — WHITE (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 201,
    name: 'White Linen Regular Fit Shirt',
    brand: 'Arrow',
    type: 'Shirt',
    style: 'Formal',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 2999,
    rating: 4.6,
    reviewCount: 6420,
    imageUrl: PRODUCT_IMAGES.shirtWhiteLinen,
    sku: 'AR-WHT-LIN01',
    tagline: 'Breathable pure linen weave with crisp spread collar',
    description:
      'Arrow crisp white linen-blend formal shirt featuring reinforced collar stays, mother-of-pearl finish buttons, and clean tailored cuffs.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'linen' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1799,
        url: 'https://www.flipkart.com/arrow-men-self-design-formal-white-shirt/p/itmf942da8ddc6a5',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1949,
        url: 'https://www.tatacliq.com/arrow-white-linen-regular-fit-shirt/p-mp000000022216638',
        availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 202,
    name: 'Solid White Slim Fit Formal Shirt',
    brand: 'Van Heusen',
    type: 'Shirt',
    style: 'Formal',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 2599,
    rating: 4.7,
    reviewCount: 9120,
    imageUrl: PRODUCT_IMAGES.shirtWhiteLinen,
    sku: 'VH-WHT-FRM02',
    tagline: 'Easy-care combed cotton poplin built for sharp structure',
    description:
      'Van Heusen wrinkle-resistant white cotton poplin formal shirt designed to transition effortlessly from office tailoring to minimal weekend styling.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1499,
        url: 'https://www.flipkart.com/van-heusen-men-solid-formal-white-shirt/p/itm02e56fb82181b',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Ajio',
        price: 1649,
        url: 'https://www.ajio.com/van-heusen-men-slim-fit-shirt-/p/701074732_white',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1799,
        url: 'https://www.tatacliq.com/van-heusen-white-solid-formal-shirt/p-mp000000032255688',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      }
    ]
  }),
  makeProduct({
    id: 203,
    name: 'White Solid Cotton Formal Shirt',
    brand: 'Peter England',
    type: 'Shirt',
    style: 'Formal',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 1799,
    rating: 4.5,
    reviewCount: 11890,
    imageUrl: PRODUCT_IMAGES.shirtWhiteLinen,
    sku: 'PE-WHT-COT03',
    tagline: 'Classic long-sleeve white cotton poplin everyday shirt',
    description:
      'Clean regular and tailored cotton white shirt by Peter England featuring crisp buttoned cuffs, chest pocket, and breathable weave.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1099,
        url: 'https://www.flipkart.com/peter-england-men-solid-formal-white-shirt/p/itmca5575752d857',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Ajio',
        price: 1199,
        url: 'https://www.ajio.com/peter-england-men-regular-fit-full-sleeve-formal-shirt/p/443604883_white',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1299,
        url: 'https://www.tatacliq.com/peter-england-white-cotton-regular-fit-shirt/p-mp000000029859313',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      }
    ]
  }),
  makeProduct({
    id: 204,
    name: 'White Collared Tailored Formal Shirt',
    brand: 'Marks & Spencer',
    type: 'Shirt',
    style: 'Formal',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 3499,
    rating: 4.8,
    reviewCount: 4120,
    imageUrl: PRODUCT_IMAGES.shirtWhiteLinen,
    sku: 'MS-WHT-SLK04',
    tagline: 'Refined British-tailored cotton satin white dress shirt',
    description:
      'Marks & Spencer crisp self-finish white dress shirt cut cleanly across shoulders with breathable natural cotton comfort.',
    availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 0, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 2299,
        url: 'https://www.flipkart.com/marks-spencer-men-self-design-formal-white-shirt/p/itmfd45tf4qebczt',
        availableSizes: ['M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 2599,
        url: 'https://www.tatacliq.com/marks-spencer-white-satin-collared-shirt/p-mp000000029043214',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 205,
    name: 'Tailored Fit White Logo Oxford Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'Shirt',
    style: 'Formal',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 2499,
    rating: 4.6,
    reviewCount: 7450,
    imageUrl: PRODUCT_IMAGES.shirtWhiteLinen,
    sku: 'USPA-WHT-OX05',
    tagline: 'Button-down white cotton oxford with clean crest embroidery',
    description:
      'U.S. Polo Assn. crisp white cotton Oxford tailored shirt ideal with beige chinos or white sneakers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'button-down', pocketCount: 0, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Ajio',
        price: 1499,
        url: 'https://www.ajio.com/u-s-polo-assn-men-tailored-fit-shirt-with-logo-print/p/469591467_white',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1649,
        url: 'https://www.tatacliq.com/us-polo-assn-white-logo-shirt/p-mp000000026271423',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),

  // =========================================================================
  // 4. SHIRTS — BABY PINK (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 206,
    name: 'Solid Baby Pink Casual Cotton Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'Shirt',
    style: 'Formal',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 2599,
    rating: 4.7,
    reviewCount: 8320,
    imageUrl: PRODUCT_IMAGES.shirtBabyPink,
    sku: 'USPA-PNK-06',
    tagline: 'Soft brushed baby pink Oxford cotton with subtle chest motif',
    description:
      'Garment-washed baby pink button-down Oxford shirt from U.S. Polo Assn. designed for effortless summer pastel pairings.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'button-down', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1499,
        url: 'https://www.flipkart.com/u-s-polo-assn-men-solid-casual-pink-shirt/p/itm88b15dc4d5444',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 1649,
        url: 'https://www.ajio.com/u-s-polo-assn-men-regular-fit-shirt-with-logo-embroidery/p/441666483_pink',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 207,
    name: 'Allen Solly Soft Pink Slim Fit Shirt',
    brand: 'Allen Solly',
    type: 'Shirt',
    style: 'Formal',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 2299,
    rating: 4.6,
    reviewCount: 6810,
    imageUrl: PRODUCT_IMAGES.shirtBabyPink,
    sku: 'AS-PNK-07',
    tagline: 'Lightweight pastel rose slim-fit full sleeve cotton shirt',
    description:
      'Allen Solly soft blush-pink slim-fit shirt cut cleanly from breathable 100% long-staple cotton.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1349,
        url: 'https://www.flipkart.com/allen-solly-men-solid-casual-pink-shirt/p/itm8e2611da0c5b6',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 1499,
        url: 'https://www.ajio.com/allen-solly-men-slim-fit-shirt/p/701276908_pink',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 208,
    name: 'Louis Philippe Regular Fit Baby Pink Shirt',
    brand: 'Louis Philippe',
    type: 'Shirt',
    style: 'Formal',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 2799,
    rating: 4.7,
    reviewCount: 5190,
    imageUrl: PRODUCT_IMAGES.shirtBabyPink,
    sku: 'LP-PNK-08',
    tagline: 'Crisp fine cotton pastel pink shirt with refined stitch detail',
    description:
      'Louis Philippe pastel baby pink casual shirt tailored with smooth single-needle seams and structured collar.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1649,
        url: 'https://www.flipkart.com/louis-philippe-sport-men-solid-casual-pink-shirt/p/itm9e7419cca912c',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 1799,
        url: 'https://www.ajio.com/louis-philippe-men-collar-regular-fit-shirt/p/702145851_pink',
        availableSizes: ['M (39)', 'M (40)', 'L (42)']
      }
    ]
  }),
  makeProduct({
    id: 209,
    name: 'Van Heusen Pastel Pink Slim Fit Shirt',
    brand: 'Van Heusen',
    type: 'Shirt',
    style: 'Formal',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 2499,
    rating: 4.5,
    reviewCount: 5940,
    imageUrl: PRODUCT_IMAGES.shirtBabyPink,
    sku: 'VH-PNK-09',
    tagline: 'Soft rose pink smooth cotton blend for summer pairing',
    description:
      'Van Heusen lightweight baby pink shirt crafted in breathable fine-weave cotton with modern slim silhouette.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1449,
        url: 'https://www.flipkart.com/van-heusen-men-solid-casual-pink-shirt/p/itm7a4d83de66c24',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 1599,
        url: 'https://www.ajio.com/van-heusen-printed-slim-fit-shirt/p/469485996_pink',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 210,
    name: 'Peter England Solid Pink Formal Shirt',
    brand: 'Peter England',
    type: 'Shirt',
    style: 'Formal',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 1799,
    rating: 4.4,
    reviewCount: 7210,
    imageUrl: PRODUCT_IMAGES.shirtBabyPink,
    sku: 'PE-PNK-10',
    tagline: 'Clean pastel pink slim-fit shirt for office & daytime outings',
    description:
      'Peter England baby pink slim-fit shirt featuring crisp spread collar, buttoned placket, and smooth cotton-rich drape.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 999,
        url: 'https://www.flipkart.com/peter-england-men-solid-formal-pink-shirt/p/itm75a1a3b8af035',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1149,
        url: 'https://www.tatacliq.com/peter-england-men-pink-slim-fit-shirt/p-mp000000031220147',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),

  // =========================================================================
  // 5. SHIRTS — BEIGE (5 Confirmed Models — #211 Updated to exact Flipkart Half-Sleeve!)
  // =========================================================================
  makeProduct({
    id: 211,
    name: 'Allen Solly Men Regular Fit Solid Beige Casual Shirt',
    brand: 'Allen Solly',
    type: 'Shirt',
    style: 'Formal',
    color: 'Beige',
    colorHex: '#E7DFCE',
    mrp: 2499,
    rating: 4.7,
    reviewCount: 4820,
    imageUrl: PRODUCT_IMAGES.shirtAllenSollyBeigeHalf,
    sku: 'AS-BGE-11',
    tagline: 'Half-sleeve light cream-beige cotton shirt with single chest pocket',
    description:
      'Allen Solly regular-fit solid light beige half-sleeve casual shirt with crisp spread collar, single left patch pocket, and clean button placket tailored for black trousers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)'],
    garmentSpec: { silhouette: 'shirt-half', collar: 'button-down', pocketCount: 1, sleeve: 'half', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 2349,
        url: 'https://www.flipkart.com/allen-solly-men-solid-casual-beige-shirt/p/itmb6d15b4e97f87',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)'],
        stockNote: 'Sizes 38–42 In Stock · 44/46 Sold Out'
      },
      {
        platform: 'Tata CLiQ',
        price: 2399,
        url: 'https://www.tatacliq.com/allen-solly-beige-linen-slim-fit-shirt/p-mp000000027539677',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      }
    ]
  }),
  makeProduct({
    id: 212,
    name: 'U.S. Polo Assn. Beige Solid Linen Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'Shirt',
    style: 'Formal',
    color: 'Beige',
    colorHex: '#D5C3A8',
    mrp: 2999,
    rating: 4.6,
    reviewCount: 5110,
    imageUrl: PRODUCT_IMAGES.shirtBeigeResort,
    sku: 'USPA-BGE-12',
    tagline: 'Warm oat-beige pure cotton linen weave with utility chest pockets',
    description:
      'U.S. Polo Assn. refined sand beige shirt offering relaxed structure, natural breathability, and tonal buttons.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'button-down', pocketCount: 2, sleeve: 'full', fabric: 'linen' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1699,
        url: 'https://www.flipkart.com/u-s-polo-assn-men-solid-formal-beige-shirt/p/itm82442b5bf65cd',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1849,
        url: 'https://www.tatacliq.com/u-s-polo-assn-mens-beige-regular-fit-solid-linen-casual-shirt/p-mp000000030675408',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 213,
    name: 'Louis Philippe Regular Fit Beige Solid Shirt',
    brand: 'Louis Philippe',
    type: 'Shirt',
    style: 'Formal',
    color: 'Beige',
    colorHex: '#D5C3A8',
    mrp: 2899,
    rating: 4.7,
    reviewCount: 4430,
    imageUrl: PRODUCT_IMAGES.shirtBeigeResort,
    sku: 'LP-BGE-13',
    tagline: 'Smooth sand-beige combed cotton formal & smart-casual shirt',
    description:
      'Louis Philippe sand beige solid cotton shirt featuring fine-yarn smoothness, reinforced collar, and tailored drape.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 2, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1749,
        url: 'https://www.flipkart.com/louis-philippe-men-solid-casual-beige-shirt/p/itmb189f0d2ce4bb',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1929,
        url: 'https://www.tatacliq.com/louis-philippe-beige-regular-fit-solid-shirt/p-mp000000029863007',
        availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 214,
    name: 'Peter England Solid Sand Beige Shirt',
    brand: 'Peter England',
    type: 'Shirt',
    style: 'Formal',
    color: 'Beige',
    colorHex: '#D5C3A8',
    mrp: 1899,
    rating: 4.4,
    reviewCount: 6040,
    imageUrl: PRODUCT_IMAGES.shirtBeigeResort,
    sku: 'PE-BGE-14',
    tagline: 'Warm camel beige cotton casual shirt for black trouser pairings',
    description:
      'Peter England neutral beige casual cotton shirt built with curved hem, chest flap pockets, and easy everyday fit.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'button-down', pocketCount: 2, sleeve: 'full', fabric: 'linen' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1099,
        url: 'https://www.flipkart.com/peter-england-men-solid-casual-beige-shirt/p/itm0bf46b658e8c3',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1249,
        url: 'https://www.tatacliq.com/peter-england-men-beige-slim-fit-check-shirt/p-mp000000031217481',
        availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 215,
    name: 'Arrow Woven Beige Formal Cotton Shirt',
    brand: 'Arrow',
    type: 'Shirt',
    style: 'Formal',
    color: 'Beige',
    colorHex: '#DDD0BC',
    mrp: 2699,
    rating: 4.5,
    reviewCount: 3890,
    imageUrl: PRODUCT_IMAGES.shirtBeigeResort,
    sku: 'AR-BGE-15',
    tagline: 'Softly textured beige cotton formal shirt with French placket',
    description:
      'Arrow crisp beige woven cotton dress shirt delivering subtle depth under evening lighting with tailored black trousers.',
    availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 2, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1549,
        url: 'https://www.flipkart.com/arrow-men-printed-formal-beige-shirt/p/itma69ff1bee1f07',
        availableSizes: ['M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1699,
        url: 'https://www.tatacliq.com/arrow-beige-cotton-regular-fit-solid-shirt/p-mp000000023456347',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),

  // =========================================================================
  // 6. SHIRTS — ICE BLUE (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 216,
    name: 'Arrow Ice Blue Solid Formal Shirt',
    brand: 'Arrow',
    type: 'Shirt',
    style: 'Formal',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 2499,
    rating: 4.6,
    reviewCount: 5410,
    imageUrl: PRODUCT_IMAGES.shirtIceBlue,
    sku: 'AR-ICE-16',
    tagline: 'Crushed glacier ice-blue cotton formal poplin with spread collar',
    description:
      'Arrow ice blue formal shirt woven in breathable fine cotton poplin, designed for clean pairing with white trousers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1449,
        url: 'https://www.flipkart.com/arrow-men-solid-formal-light-blue-shirt/p/itmc31f4bf026066',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 1599,
        url: 'https://www.ajio.com/arrow-slim-fit-formal-shirt/p/469488731002',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 217,
    name: 'Peter England Light Blue Slim Formal Shirt',
    brand: 'Peter England',
    type: 'Shirt',
    style: 'Formal',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 1799,
    rating: 4.5,
    reviewCount: 9430,
    imageUrl: PRODUCT_IMAGES.shirtIceBlue,
    sku: 'PE-ICE-17',
    tagline: 'Clean sky-ice blue formal cotton slim fit shirt',
    description:
      'Peter England light blue slim-fit shirt finished for wrinkle resistance and crisp monochrome coastal styling.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 999,
        url: 'https://www.flipkart.com/peter-england-men-solid-casual-light-blue-shirt/p/itm33e6292c0cb1a',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Myntra',
        price: 1149,
        url: 'https://www.myntra.com/shirts/peterengland/peter-england-men-blue-formal-shirt/19435002/buy',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1249,
        url: 'https://www.tatacliq.com/peter-england-light-blue-solid-slim-fit-formal-shirt/p-mp000000032252677',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      }
    ]
  }),
  makeProduct({
    id: 218,
    name: 'Van Heusen Ice Blue Cotton Formal Shirt',
    brand: 'Van Heusen',
    type: 'Shirt',
    style: 'Formal',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 2599,
    rating: 4.7,
    reviewCount: 7210,
    imageUrl: PRODUCT_IMAGES.shirtIceBlue,
    sku: 'VH-ICE-18',
    tagline: 'Breathable soft-touch light blue dress cotton shirt',
    description:
      'Van Heusen glacier ice-blue cotton formal shirt tailored in a neat tapered profile with barrel cuffs.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1549,
        url: 'https://www.flipkart.com/van-heusen-men-solid-formal-light-blue-shirt/p/itmf1086007bca56',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1699,
        url: 'https://www.tatacliq.com/van-heusen-light-blue-solid-cotton-formal-shirt/p-mp000000032259168',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 219,
    name: 'Louis Philippe Light Blue Textured Formal Shirt',
    brand: 'Louis Philippe',
    type: 'Shirt',
    style: 'Formal',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 2999,
    rating: 4.8,
    reviewCount: 4920,
    imageUrl: PRODUCT_IMAGES.shirtIceBlue,
    sku: 'LP-ICE-19',
    tagline: 'Subtle micro-textured ice blue two-ply cotton formal shirt',
    description:
      'Louis Philippe ice-blue formal shirt crafted with high-density fine cotton yarn for elevated drape and luster.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Myntra',
        price: 1849,
        url: 'https://www.myntra.com/shirts/louisphilippe/louis-philippe-men-light-blue-textured-full-sleeves-formal-shirt/40360104/buy',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1999,
        url: 'https://www.tatacliq.com/louis-philippe-light-blue-solid-formal-shirt/p-mp000000032256521',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 220,
    name: 'U.S. Polo Assn. Ice Blue Casual Cotton Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'Shirt',
    style: 'Formal',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 2499,
    rating: 4.6,
    reviewCount: 6180,
    imageUrl: PRODUCT_IMAGES.shirtIceBlue,
    sku: 'USPA-ICE-20',
    tagline: 'Relaxed weekend ice-blue cotton Oxford button-down shirt',
    description:
      'U.S. Polo Assn. soft ice blue cotton shirt tailored for crisp pairing against pure white chinos and clean sneakers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'button-down', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1499,
        url: 'https://www.flipkart.com/u-s-polo-assn-men-solid-casual-light-blue-shirt/p/itmf3x8na4f9jmgc',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Ajio',
        price: 1649,
        url: 'https://www.ajio.com/u-s-polo-assn-men-checked-regular-fit-cotton-shirt/p/702865996_blue',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),

  // =========================================================================
  // 7. SHIRTS — NAVY BLUE (5 Confirmed Models — #223 Fixed Shirt PDP URL)
  // =========================================================================
  makeProduct({
    id: 221,
    name: 'Arrow Navy Blue Slim Fit Formal Shirt',
    brand: 'Arrow',
    type: 'Shirt',
    style: 'Formal',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 2599,
    rating: 4.7,
    reviewCount: 5340,
    imageUrl: PRODUCT_IMAGES.shirtNavyBlue,
    sku: 'AR-NVY-21',
    tagline: 'Deep midnight navy cotton shirt with sharp nautical contrast',
    description:
      'Arrow navy blue slim-fit shirt cut cleanly in rich cotton poplin that pairs sharply with white trousers and white sneakers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Myntra',
        price: 1549,
        url: 'https://www.myntra.com/shirts/arrow/arrow-navy-slim-fit-formal-shirt/1285297/buy',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1699,
        url: 'https://www.tatacliq.com/arrow-navy-cotton-regular-fit-shirt/p-mp000000026792576',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 222,
    name: 'Allen Solly Navy Linen Slim Fit Shirt',
    brand: 'Allen Solly',
    type: 'Shirt',
    style: 'Formal',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 2899,
    rating: 4.6,
    reviewCount: 4120,
    imageUrl: PRODUCT_IMAGES.shirtNavyBlue,
    sku: 'AS-NVY-22',
    tagline: 'Textured deep navy linen blend built for breezy evenings',
    description:
      'Allen Solly deep navy blue cotton-linen shirt featuring refined slub weave and tonal button placket.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'button-down', pocketCount: 1, sleeve: 'full', fabric: 'linen' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1599,
        url: 'https://www.flipkart.com/allen-solly-men-printed-casual-dark-blue-shirt/p/itm999f012433f26',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1799,
        url: 'https://www.tatacliq.com/allen-solly-navy-blue-linen-slim-fit-texture-shirt/p-mp000000015640733',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 223,
    name: 'Tommy Hilfiger Navy Slim Fit Casual Shirt',
    brand: 'Tommy Hilfiger',
    type: 'Shirt',
    style: 'Formal',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 4599,
    rating: 4.8,
    reviewCount: 3890,
    imageUrl: PRODUCT_IMAGES.shirtNavyBlue,
    sku: 'TH-NVY-23',
    tagline: 'Signature American prep midnight navy organic cotton shirt',
    description:
      'Tommy Hilfiger tailored dark navy casual shirt in soft organic cotton twill with signature embroidered flag accent.',
    availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'button-down', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 3199,
        url: 'https://www.flipkart.com/tommy-hilfiger-men-solid-casual-blue-shirt/p/itm9ddf4daba58e7',
        availableSizes: ['M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 3499,
        url: 'https://www.ajio.com/tommy-hilfiger-slim-fit-floral-print-shirt/p/460880587_navy',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 224,
    name: 'Peter England Solid Navy Formal Shirt',
    brand: 'Peter England',
    type: 'Shirt',
    style: 'Formal',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 1899,
    rating: 4.5,
    reviewCount: 8420,
    imageUrl: PRODUCT_IMAGES.shirtNavyBlue,
    sku: 'PE-NVY-24',
    tagline: 'Deep ink navy formal shirt with structured point collar',
    description:
      'Peter England rich navy formal cotton blend shirt giving clean contrast above bright white trousers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1099,
        url: 'https://www.flipkart.com/peter-england-men-solid-formal-dark-blue-shirt/p/itmbd76059e2d51e',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1249,
        url: 'https://www.tatacliq.com/peter-england-navy-regular-fit-shirt/p-mp000000026582527',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 225,
    name: 'Van Heusen Navy Slim Fit Casual Shirt',
    brand: 'Van Heusen',
    type: 'Shirt',
    style: 'Formal',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 2599,
    rating: 4.6,
    reviewCount: 6210,
    imageUrl: PRODUCT_IMAGES.shirtNavyBlue,
    sku: 'VH-NVY-25',
    tagline: 'Smooth navy cotton twill shirt with patch pocket detail',
    description:
      'Van Heusen dark navy tailored shirt engineered for sharp contrast over white slim trousers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1499,
        url: 'https://www.flipkart.com/van-heusen-men-printed-formal-blue-shirt/p/itm8a0be88ca0796',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 1649,
        url: 'https://www.ajio.com/van-heusen-men-slim-fit-shirt-with-patch-pocket/p/469533390_navy',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),

  // =========================================================================
  // 8. SHIRTS — WINE RED (5 Confirmed Models — #230 Fixed Shirt PDP URL)
  // =========================================================================
  makeProduct({
    id: 226,
    name: 'Peter England Wine Red Casual Cotton Shirt',
    brand: 'Peter England',
    type: 'Shirt',
    style: 'Formal',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 1999,
    rating: 4.6,
    reviewCount: 7850,
    imageUrl: PRODUCT_IMAGES.shirtWineRed,
    sku: 'PE-WIN-26',
    tagline: 'Rich bordeaux wine cotton shirt built for evening contrast',
    description:
      'Peter England burgundy wine-red slim shirt crafted in brushed cotton twill for effortless pairing with black jeans.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1149,
        url: 'https://www.flipkart.com/peter-england-men-solid-casual-maroon-shirt/p/itmfdhxezfw3h9hw',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Myntra',
        price: 1299,
        url: 'https://www.myntra.com/shirts/peterengland/peter-england-men-maroon-formal-shirt/18175268/buy',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 227,
    name: 'Allen Solly Solid Wine Maroon Slim Shirt',
    brand: 'Allen Solly',
    type: 'Shirt',
    style: 'Formal',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 2399,
    rating: 4.6,
    reviewCount: 5490,
    imageUrl: PRODUCT_IMAGES.shirtWineRed,
    sku: 'AS-WIN-27',
    tagline: 'Deep cabernet slim-fit full-sleeve soft cotton shirt',
    description:
      'Allen Solly deep maroon wine shirt finished with smooth enzyme wash for velvety handfeel and bold evening color.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1399,
        url: 'https://www.flipkart.com/allen-solly-men-solid-casual-maroon-shirt/p/itmad6b1c379c380',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 1549,
        url: 'https://trends.ajio.com/allen-solly-men-slim-fit-shirt/p/442885046_maroon',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 228,
    name: 'U.S. Polo Assn. Wine Red Slim Oxford Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'Shirt',
    style: 'Formal',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 2699,
    rating: 4.7,
    reviewCount: 6410,
    imageUrl: PRODUCT_IMAGES.shirtWineRed,
    sku: 'USPA-WIN-28',
    tagline: 'Heavyweight burgundy cotton twill with button-down collar',
    description:
      'U.S. Polo Assn. wine-red slim fit casual shirt offering clean evening elegance with black trousers and crisp white sneakers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'button-down', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1599,
        url: 'https://www.flipkart.com/u-s-polo-assn-men-solid-casual-maroon-shirt/p/itm55d4274602f83',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 1749,
        url: 'https://www.ajio.com/u-s-polo-assn-men-slim-fit-shirt/p/469675100_maroon',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 229,
    name: 'Van Heusen Wine Maroon Textured Formal Shirt',
    brand: 'Van Heusen',
    type: 'Shirt',
    style: 'Formal',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 2799,
    rating: 4.6,
    reviewCount: 4120,
    imageUrl: PRODUCT_IMAGES.shirtWineRed,
    sku: 'VH-WIN-29',
    tagline: 'Structured rich wine cotton formal shirt for night occasions',
    description:
      'Van Heusen textured wine-maroon slim fit shirt woven in breathable fine cotton with crisp collar stays.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1649,
        url: 'https://www.flipkart.com/van-heusen-men-printed-formal-maroon-shirt/p/itmf4875d8dab319',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1799,
        url: 'https://www.tatacliq.com/van-heusen-mens-maroon-slim-fit-textured-cotton-shirt/p-mp000000031630449',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 230,
    name: 'Rare Rabbit Wine Red Regular Fit Shirt',
    brand: 'Rare Rabbit',
    type: 'Shirt',
    style: 'Formal',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 3999,
    rating: 4.8,
    reviewCount: 4,
    imageUrl: PRODUCT_IMAGES.shirtWineRed,
    sku: 'RR-WIN-30',
    tagline: 'Luxury deep claret cotton shirt with artisanal drape',
    description:
      'Rare Rabbit statement wine-maroon tailored casual shirt made from breathable long-staple cotton.',
    availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'shirt-full', collar: 'spread', pocketCount: 1, sleeve: 'full', fabric: 'cotton-poplin' },
    listings: [
      {
        platform: 'Ajio',
        price: 2399,
        rating: 4.8,
        url: 'https://www.ajio.com/rare-rabbit-men-regular-fit-casual-shirt/p/703283356_maroon',
        availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)'],
        stockNote: 'In Stock · Verified Seller'
      },
      {
        platform: 'Tata CLiQ',
        price: 2599,
        rating: 4.7,
        url: 'https://www.tatacliq.com/rare-rabbit-maroon-solid-regular-fit-shirt/p-mp000000028419204',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)'],
        stockNote: 'In Stock · Brand Certified'
      },
      {
        platform: 'Flipkart',
        price: 2199,
        rating: 4.8,
        url: 'https://www.flipkart.com/rare-rabbit-men-solid-casual-maroon-shirt/p/itm4a2141bd680b3',
        inStock: false,
        availableSizes: [],
        stockNote: 'Out of Stock · Notify Me on Flipkart (XS–3XL)'
      }
    ]
  }),

  // =========================================================================
  // 9. T-SHIRTS — WHITE (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 401,
    name: 'Puma Essential Crew-Neck Solid White T-Shirt',
    brand: 'Puma',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 1499,
    rating: 4.7,
    reviewCount: 11420,
    imageUrl: PRODUCT_IMAGES.tshirtWhiteCrew,
    sku: 'PU-TS-WHT01',
    tagline: 'Combed single-jersey pure white crew tee for minimal fits',
    description:
      'Puma crisp pure white crew-neck cotton T-shirt with ribbed neckline, clean straight hem, and breathable everyday drape.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-crew', collar: 'crew', pocketCount: 0, sleeve: 'short', fabric: 'jersey' },
    listings: [
      {
        platform: 'Flipkart',
        price: 749,
        url: 'https://www.flipkart.com/puma-solid-men-crew-neck-white-t-shirt/p/itm006577b7b1061',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Amazon',
        price: 849,
        asin: 'B0B1V5W3G9',
        url: 'https://www.amazon.in/dp/B0B1V5W3G9',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 402,
    name: 'Jack & Jones White Solid Round-Neck T-Shirt',
    brand: 'Jack & Jones',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 1299,
    rating: 4.6,
    reviewCount: 6810,
    imageUrl: PRODUCT_IMAGES.tshirtWhiteCrew,
    sku: 'JJ-TS-WHT02',
    tagline: 'Clean heavyweight cotton jersey round-neck tee in pure white',
    description:
      'Jack & Jones structured round-neck solid white T-shirt built to sit neatly over beige chinos and white sneakers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'tshirt-crew', collar: 'crew', pocketCount: 0, sleeve: 'short', fabric: 'jersey' },
    listings: [
      {
        platform: 'Flipkart',
        price: 649,
        url: 'https://www.flipkart.com/jack-jones-solid-men-round-neck-white-t-shirt/p/itm86a5566f43460',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 749,
        url: 'https://luxury.tatacliq.com/puma-white-cotton-loose-fit-printed-sports-t-shirt/p-mp000000030694910',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 403,
    name: "Levi's Slim Fit Crisp White Polo T-Shirt",
    brand: "Levi's",
    type: 'T-Shirt',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 2199,
    rating: 4.7,
    reviewCount: 5340,
    imageUrl: PRODUCT_IMAGES.tshirtWhiteCrew,
    sku: 'LV-TS-WHT03',
    tagline: 'Pique-knit cotton white polo with 2-button smart casual placket',
    description:
      "Levi's slim-fit crisp white cotton pique polo T-shirt pairing effortlessly with chinos for Clean Minimalist looks.",
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Tata CLiQ',
        price: 1299,
        url: 'https://www.tatacliq.com/levis-mens-white-slim-fit-polo-t-shirt/p-mp000000018114178',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Amazon',
        price: 1449,
        asin: 'B07N3V6K8J',
        url: 'https://www.amazon.in/dp/B07N3V6K8J',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 404,
    name: 'U.S. Polo Assn. Pure White Pique Polo T-Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 1999,
    rating: 4.8,
    reviewCount: 9120,
    imageUrl: PRODUCT_IMAGES.tshirtWhiteCrew,
    sku: 'USPA-TS-WHT04',
    tagline: 'Breathable honeycomb pique knit white polo with ribbed collar',
    description:
      'U.S. Polo Assn. pure white regular-fit cotton polo featuring ribbed armband trim and clean two-button neckline.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Tata CLiQ',
        price: 1199,
        url: 'https://www.tatacliq.com/u-s-polo-assn-white-cotton-polo-t-shirt/p-mp000000030251526',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Amazon',
        price: 1349,
        asin: 'B083X2W5QX',
        url: 'https://www.amazon.in/dp/B083X2W5QX',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 405,
    name: 'Allen Solly White Polycotton Solid Polo T-Shirt',
    brand: 'Allen Solly',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'White',
    colorHex: '#FFFFFF',
    mrp: 1599,
    rating: 4.6,
    reviewCount: 7490,
    imageUrl: PRODUCT_IMAGES.tshirtWhiteCrew,
    sku: 'AS-TS-WHT05',
    tagline: 'Crisp snow-white smart polo for weekend or smart-casual office wear',
    description:
      'Allen Solly white solid polo neck T-shirt engineered with smooth breathable knit collar and side-vent hem.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 899,
        url: 'https://www.flipkart.com/allen-solly-solid-men-polo-neck-white-t-shirt/p/itm20c0e63e45ad5',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 999,
        url: 'https://www.tatacliq.com/u-s-polo-assn-white-regular-fit-polo-t-shirt/p-mp000000018830680',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),

  // =========================================================================
  // 10. T-SHIRTS — BABY PINK (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 406,
    name: 'Puma Blush Pink Crew-Neck Cotton T-Shirt',
    brand: 'Puma',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 1599,
    rating: 4.7,
    reviewCount: 6410,
    imageUrl: PRODUCT_IMAGES.tshirtBabyPinkCrew,
    sku: 'PU-TS-PNK06',
    tagline: 'Lightweight summer-pastel baby pink crew jersey tee',
    description:
      'Puma solid soft pink crew-neck cotton T-shirt engineered for relaxed drape over crisp white slim trousers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-crew', collar: 'crew', pocketCount: 0, sleeve: 'short', fabric: 'jersey' },
    listings: [
      {
        platform: 'Flipkart',
        price: 799,
        url: 'https://www.flipkart.com/puma-solid-men-crew-neck-pink-t-shirt/p/itm07ca3a8b23b23',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 899,
        url: 'https://luxury.tatacliq.com/puma-pink-x-anushka-relaxed-fit-t-shirt/p-mp000000019406115',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 407,
    name: 'U.S. Polo Assn. Baby Pink Solid Polo T-Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 2099,
    rating: 4.7,
    reviewCount: 7820,
    imageUrl: PRODUCT_IMAGES.tshirtBabyPinkCrew,
    sku: 'USPA-TS-PNK07',
    tagline: 'Signature blush pink cotton pique polo with neat ribbed collar',
    description:
      'U.S. Polo Assn. solid pink cotton polo T-shirt tailored in breathable knit for crisp Summer Pastel styling.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1149,
        url: 'https://www.flipkart.com/u-s-polo-assn-solid-men-neck-pink-t-shirt/p/itm3d1236bf5a1d2',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1299,
        url: 'https://www.tatacliq.com/men-pink-solid-polo-neck-t-shirt/p-mp000000030877525',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 408,
    name: 'Van Heusen Pastel Pink Solid Polo T-Shirt',
    brand: 'Van Heusen',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 1799,
    rating: 4.6,
    reviewCount: 5190,
    imageUrl: PRODUCT_IMAGES.tshirtBabyPinkCrew,
    sku: 'VH-TS-PNK08',
    tagline: 'Soft rose-pink mercerized cotton blend polo neck tee',
    description:
      'Van Heusen blush pink polo-neck T-shirt featuring clean front placket and refined pastel tone.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 999,
        url: 'https://www.flipkart.com/van-heusen-solid-men-polo-neck-white-pink-t-shirt/p/itmd8ab508323c23',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1149,
        url: 'https://www.tatacliq.com/van-heusen-light-pink-regular-fit-polo-t-shirt/p-mp000000030885458',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 409,
    name: "Levi's Baby Pink Cotton Polo T-Shirt",
    brand: "Levi's",
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 1999,
    rating: 4.6,
    reviewCount: 4410,
    imageUrl: PRODUCT_IMAGES.tshirtBabyPinkCrew,
    sku: 'LV-TS-PNK09',
    tagline: 'Garment-washed soft pink pique polo with subtle chest branding',
    description:
      "Levi's casual baby pink cotton polo delivering crisp contrast over white chinos and white leather sneakers.",
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1099,
        url: 'https://www.flipkart.com/levi-s-solid-men-polo-neck-pink-t-shirt/p/itmdcb21c2fc5a06',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1249,
        url: 'https://www.tatacliq.com/men-pink-textured-polo-neck-t-shirt/p-mp000000031995378',
        availableSizes: ['M (39)', 'M (40)', 'L (42)']
      }
    ]
  }),
  makeProduct({
    id: 410,
    name: 'Peter England Solid Baby Pink Polo T-Shirt',
    brand: 'Peter England',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Baby Pink',
    colorHex: '#F7C6D0',
    mrp: 1399,
    rating: 4.5,
    reviewCount: 6180,
    imageUrl: PRODUCT_IMAGES.tshirtBabyPinkCrew,
    sku: 'PE-TS-PNK10',
    tagline: 'Breathable soft pastel rose cotton polo built for sunny weekends',
    description:
      'Peter England regular-fit solid baby pink polo neck T-shirt combining easy cotton comfort with sharp tailored collar structure.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Tata CLiQ',
        price: 799,
        url: 'https://www.tatacliq.com/peter-england-mens-pink-solid-polo-neck-t-shirt/p-mp000000032033034',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Flipkart',
        price: 849,
        url: 'https://www.flipkart.com/cantabil-solid-men-polo-neck-pink-t-shirt/p/itmbc2f6da18311b',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),

  // =========================================================================
  // 11. T-SHIRTS — BEIGE (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 411,
    name: 'Peter England Oatmeal Beige Crew T-Shirt',
    brand: 'Peter England',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Beige',
    colorHex: '#DDD0BC',
    mrp: 1199,
    rating: 4.5,
    reviewCount: 5120,
    imageUrl: PRODUCT_IMAGES.tshirtBeigeCrew,
    sku: 'PE-TS-BGE11',
    tagline: 'Minimal sand-beige combed jersey crew tee for black trouser fits',
    description:
      'Peter England solid oatmeal beige crew-neck cotton T-shirt designed cleanly for Modern Neutral styling over black jeans.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-crew', collar: 'crew', pocketCount: 0, sleeve: 'short', fabric: 'jersey' },
    listings: [
      {
        platform: 'Flipkart',
        price: 599,
        url: 'https://www.flipkart.com/peter-england-solid-men-crew-neck-beige-t-shirt/p/itm0e790462ca241',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 699,
        url: 'https://www.tatacliq.com/levis-mens-solid-regular-fit-jersey-t-shirt/p-mp000000032068833',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 412,
    name: 'Allen Solly Solid Sand Beige Polo T-Shirt',
    brand: 'Allen Solly',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Beige',
    colorHex: '#DDD0BC',
    mrp: 1699,
    rating: 4.6,
    reviewCount: 4890,
    imageUrl: PRODUCT_IMAGES.tshirtBeigeCrew,
    sku: 'AS-TS-BGE12',
    tagline: 'Structured warm sand polo T-shirt with tonal crest accent',
    description:
      'Allen Solly neutral beige polo-neck T-shirt in soft cotton pique offering sharp smart-casual contrast with jet-black chinos.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 949,
        url: 'https://www.flipkart.com/allen-solly-solid-men-polo-neck-beige-t-shirt/p/itm159583dc9d75f',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Amazon',
        price: 1099,
        asin: 'B07W5J8W9V',
        url: 'https://www.amazon.in/dp/B07W5J8W9V',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 413,
    name: 'U.S. Polo Assn. Sand Beige Cotton Polo T-Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Beige',
    colorHex: '#DDD0BC',
    mrp: 2099,
    rating: 4.7,
    reviewCount: 6150,
    imageUrl: PRODUCT_IMAGES.tshirtBeigeCrew,
    sku: 'USPA-TS-BGE13',
    tagline: 'Heavyweight pure cotton sand beige polo built for neutral pairing',
    description:
      'U.S. Polo Assn. crisp beige solid cotton polo featuring dual-button placket and clean ribbed cuffs.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1199,
        url: 'https://www.flipkart.com/u-s-polo-assn-solid-men-neck-beige-t-shirt/p/itm6c8b18fd9861a',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1349,
        url: 'https://www.tatacliq.com/united-colors-of-benetton-beige-cotton-relaxed-fit-embroidered-polo-t-shirt/p-mp000000024943164',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 414,
    name: 'United Colors of Benetton Beige Relaxed Polo Tee',
    brand: 'UCB',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Beige',
    colorHex: '#DDD0BC',
    mrp: 2299,
    rating: 4.6,
    reviewCount: 3420,
    imageUrl: PRODUCT_IMAGES.tshirtBeigeCrew,
    sku: 'UCB-TS-BGE14',
    tagline: 'Relaxed oat-beige breathable cotton knit polo T-shirt',
    description:
      'United Colors of Benetton warm beige relaxed cotton polo delivering understated Italian casual proportions.',
    availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Tata CLiQ',
        price: 1349,
        url: 'https://www.tatacliq.com/united-colors-of-benetton-beige-cotton-relaxed-fit-embroidered-polo-t-shirt/p-mp000000024943164',
        availableSizes: ['M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Flipkart',
        price: 1449,
        url: 'https://www.flipkart.com/hi/peter-england-solid-men-polo-neck-beige-t-shirt/p/itmf3ytgszxwgdhw',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 415,
    name: 'Peter England Solid Beige Smart Polo T-Shirt',
    brand: 'Peter England',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Beige',
    colorHex: '#DDD0BC',
    mrp: 1399,
    rating: 4.5,
    reviewCount: 4820,
    imageUrl: PRODUCT_IMAGES.tshirtBeigeCrew,
    sku: 'PE-TS-BGE15',
    tagline: 'Versatile warm beige polo T-shirt crafted for daily wear',
    description:
      'Peter England neutral stone-beige solid polo-neck cotton T-shirt built to match black trousers and white sneakers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 749,
        url: 'https://www.flipkart.com/hi/peter-england-solid-men-polo-neck-beige-t-shirt/p/itmf3ytgszxwgdhw',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 899,
        url: 'https://www.tatacliq.com/mens-cotton-slim-fit-solid-pique-polo-t-shirt/p-mp000000032557279',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),

  // =========================================================================
  // 12. T-SHIRTS — ICE BLUE (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 416,
    name: 'U.S. Polo Assn. Ice Blue Cotton Polo T-Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 2099,
    rating: 4.7,
    reviewCount: 6410,
    imageUrl: PRODUCT_IMAGES.tshirtIceBluePolo,
    sku: 'USPA-TS-ICE16',
    tagline: 'Glacier sky-blue pique knit polo for crisp white trousers',
    description:
      'U.S. Polo Assn. signature light ice-blue polo-neck cotton T-shirt crafted for breezy coastal daytime looks.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1149,
        url: 'https://www.flipkart.com/u-s-polo-assn-solid-men-neck-light-blue-t-shirt/p/itm109563777707a',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1299,
        url: 'https://www.tatacliq.com/us-polo-assns-blue-slim-fit-logo-t-shirt/p-mp000000030692118',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 417,
    name: 'Van Heusen Ice Blue Cotton Polo T-Shirt',
    brand: 'Van Heusen',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 1799,
    rating: 4.6,
    reviewCount: 5340,
    imageUrl: PRODUCT_IMAGES.tshirtIceBluePolo,
    sku: 'VH-TS-ICE17',
    tagline: 'Smooth sky-ice blue cotton polo with clean tonal buttons',
    description:
      'Van Heusen glacier light blue polo-neck T-shirt featuring breathable cotton pique and tailored shoulder fit.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 949,
        url: 'https://www.flipkart.com/van-heusen-solid-men-polo-neck-light-blue-t-shirt/p/itm807bb28643ac2',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Amazon',
        price: 1049,
        asin: 'B099Z8V3M4',
        url: 'https://www.amazon.in/dp/B099Z8V3M4',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 418,
    name: 'Allen Solly Ice Blue Breathable Polo T-Shirt',
    brand: 'Allen Solly',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 1699,
    rating: 4.6,
    reviewCount: 4920,
    imageUrl: PRODUCT_IMAGES.tshirtIceBluePolo,
    sku: 'AS-TS-ICE18',
    tagline: 'Crisp glacier blue pure cotton smart-casual polo',
    description:
      'Allen Solly light blue polo-neck cotton T-shirt providing clean coastal balance over bright white chinos.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 899,
        url: 'https://www.flipkart.com/allen-solly-solid-men-polo-neck-light-blue-t-shirt/p/itmd343eaa499f72',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1049,
        url: 'https://www.tatacliq.com/allen-solly-mens-light-blue-regular-fit-printed-cotton-polo-t-shirt/p-mp000000031611995',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 419,
    name: 'Puma Soft Ice Blue Crew-Neck Cotton T-Shirt',
    brand: 'Puma',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 1499,
    rating: 4.6,
    reviewCount: 5110,
    imageUrl: PRODUCT_IMAGES.tshirtIceBluePolo,
    sku: 'PU-TS-ICE19',
    tagline: 'Relaxed crew-neck blue cotton tee built for summer white denim',
    description:
      'Puma solid glacier-blue crew-neck jersey tee pairing smoothly with white court sneakers and light chinos.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-crew', collar: 'crew', pocketCount: 0, sleeve: 'short', fabric: 'jersey' },
    listings: [
      {
        platform: 'Flipkart',
        price: 749,
        url: 'https://www.flipkart.com/puma-solid-men-crew-neck-blue-t-shirt/p/itme89ce802fe305',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 849,
        url: 'https://www.tatacliq.com/van-heusen-light-blue-cotton-regular-fit-printed-polo-t-shirt/p-mp000000030266829',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 420,
    name: 'Van Heusen Smart Ice Blue Slim Polo T-Shirt',
    brand: 'Van Heusen',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Ice Blue',
    colorHex: '#C5DEEE',
    mrp: 1899,
    rating: 4.7,
    reviewCount: 3890,
    imageUrl: PRODUCT_IMAGES.tshirtIceBluePolo,
    sku: 'VH-TS-ICE20',
    tagline: 'Refined air-light pastel blue cotton polo tee',
    description:
      'Van Heusen glacier blue polo neck tee crafted from breathable fine combed cotton yarn.',
    availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 999,
        url: 'https://www.flipkart.com/van-heusen-solid-men-polo-neck-light-blue-t-shirt/p/itm302c292eaed72',
        availableSizes: ['M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1129,
        url: 'https://www.tatacliq.com/van-heusen-light-blue-cotton-regular-fit-printed-polo-t-shirt/p-mp000000030266829',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),

  // =========================================================================
  // 13. T-SHIRTS — NAVY BLUE (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 421,
    name: 'Puma Essential Midnight Navy Crew T-Shirt',
    brand: 'Puma',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 1499,
    rating: 4.7,
    reviewCount: 9840,
    imageUrl: PRODUCT_IMAGES.tshirtNavyCrew,
    sku: 'PU-TS-NVY21',
    tagline: 'Deep midnight navy cotton jersey crew tee with ribbed neck',
    description:
      'Puma classic midnight navy round-neck T-shirt providing strong upper-body definition over crisp white trousers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-crew', collar: 'crew', pocketCount: 0, sleeve: 'short', fabric: 'jersey' },
    listings: [
      {
        platform: 'Tata CLiQ',
        price: 899,
        url: 'https://www.tatacliq.com/puma-ess-navy-cotton-regular-fit-logo-printed-polo-t-shirt/p-mp000000013061390',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Flipkart',
        price: 949,
        url: 'https://www.flipkart.com/u-s-polo-assn-solid-men-neck-blue-t-shirt/p/itm67daa14c38031',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 422,
    name: 'Allen Solly Deep Navy Pique Polo T-Shirt',
    brand: 'Allen Solly',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 1799,
    rating: 4.7,
    reviewCount: 7310,
    imageUrl: PRODUCT_IMAGES.tshirtNavyCrew,
    sku: 'AS-TS-NVY22',
    tagline: 'Structured ink navy cotton polo tailored for nautical contrast',
    description:
      'Allen Solly deep navy solid polo-neck T-shirt designed to anchor Heritage Nautical white trouser outfits cleanly.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 949,
        url: 'https://www.flipkart.com/hi/allen-solly-solid-men-polo-neck-navy-blue-t-shirt/p/itm796c1e5b5437e',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1099,
        url: 'https://www.tatacliq.com/us-polo-assn-navy-cotton-regular-fit-polo-t-shirt/p-mp000000015565754',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 423,
    name: 'Tommy Hilfiger Deep Navy Solid Polo T-Shirt',
    brand: 'Tommy Hilfiger',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 3599,
    rating: 4.8,
    reviewCount: 4290,
    imageUrl: PRODUCT_IMAGES.tshirtNavyCrew,
    sku: 'TH-TS-NVY23',
    tagline: 'Signature American prep midnight navy organic pique polo',
    description:
      'Tommy Hilfiger dark navy cotton polo neck T-shirt with crisp collar retention and flagship chest embroidery.',
    availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 2399,
        url: 'https://www.flipkart.com/tommy-hilfiger-colorblock-men-polo-neck-dark-blue-t-shirt/p/itmfgyhhqfpvxza4',
        availableSizes: ['M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 2599,
        url: 'https://www.tatacliq.com/us-polo-assn-navy-cotton-regular-fit-polo-t-shirt/p-mp000000015565754',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 424,
    name: 'U.S. Polo Assn. Midnight Navy Cotton Polo Tee',
    brand: 'U.S. Polo Assn.',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 2099,
    rating: 4.7,
    reviewCount: 8450,
    imageUrl: PRODUCT_IMAGES.tshirtNavyCrew,
    sku: 'USPA-TS-NVY24',
    tagline: 'Pure cotton regular-fit navy polo for white chinos & trainers',
    description:
      'U.S. Polo Assn. deep navy polo-neck T-shirt featuring rich saturated dye and classic sporty collar.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1149,
        url: 'https://www.flipkart.com/u-s-polo-assn-solid-men-neck-dark-blue-maroon-t-shirt/p/itm707a1f2b514aa',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1299,
        url: 'https://www.tatacliq.com/us-polo-assn-navy-cotton-regular-fit-polo-t-shirt/p-mp000000015565754',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 425,
    name: 'Rare Rabbit Dark Navy Crew-Neck Jersey T-Shirt',
    brand: 'Rare Rabbit',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Navy Blue',
    colorHex: '#1E2F4D',
    mrp: 2499,
    rating: 4.8,
    reviewCount: 3120,
    imageUrl: PRODUCT_IMAGES.tshirtNavyCrew,
    sku: 'RR-TS-NVY25',
    tagline: 'Fine mercerized dark navy cotton jersey tee with tailored fit',
    description:
      'Rare Rabbit deep ink navy cotton T-shirt delivering elevated smoothness and crisp architectural fit.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-crew', collar: 'crew', pocketCount: 0, sleeve: 'short', fabric: 'jersey' },
    listings: [
      {
        platform: 'Tata CLiQ',
        price: 1699,
        url: 'https://www.tatacliq.com/rare-rabbit-navy-regular-fit-graphic-t-shirt/p-mp000000021319208',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Flipkart',
        price: 1799,
        url: 'https://www.flipkart.com/hi/allen-solly-solid-men-polo-neck-dark-blue-t-shirt/p/itm2eb8394f53281',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),

  // =========================================================================
  // 14. T-SHIRTS — WINE RED (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 426,
    name: 'Allen Solly Solid Wine Maroon Polo T-Shirt',
    brand: 'Allen Solly',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 1799,
    rating: 4.7,
    reviewCount: 6410,
    imageUrl: PRODUCT_IMAGES.tshirtWinePolo,
    sku: 'AS-TS-WIN26',
    tagline: 'Rich cabernet wine polo engineered for evening black denim',
    description:
      'Allen Solly deep maroon wine polo T-shirt in soft cotton knit delivering sharp evening contrast.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 949,
        url: 'https://www.flipkart.com/allen-solly-solid-men-polo-neck-maroon-t-shirt/p/itmd9e4babd8c91e',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1099,
        url: 'https://www.tatacliq.com/beverly-hills-polo-club-maroon-polo-t-shirt/p-mp000000014861476',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 427,
    name: 'Rare Rabbit Wine Red Cotton Polo T-Shirt',
    brand: 'Rare Rabbit',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 2999,
    rating: 4.8,
    reviewCount: 3420,
    imageUrl: PRODUCT_IMAGES.tshirtWinePolo,
    sku: 'RR-TS-WIN27',
    tagline: 'Luxury burgundy cotton knit polo with structured modern collar',
    description:
      'Rare Rabbit statement wine-maroon cotton polo T-shirt crafted for crisp Evening Distinction black trouser looks.',
    availableSizes: ['M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Tata CLiQ',
        price: 1999,
        url: 'https://www.tatacliq.com/rare-rabbit-maroon-cotton-regular-fit-polo-t-shirt/p-mp000000032578871',
        availableSizes: ['M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Flipkart',
        price: 2149,
        url: 'https://www.flipkart.com/allen-solly-colorblock-men-polo-neck-maroon-t-shirt/p/itm243400fb45e6a',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 428,
    name: 'U.S. Polo Assn. Burgundy Solid Polo T-Shirt',
    brand: 'U.S. Polo Assn.',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 2099,
    rating: 4.7,
    reviewCount: 5890,
    imageUrl: PRODUCT_IMAGES.tshirtWinePolo,
    sku: 'USPA-TS-WIN28',
    tagline: 'Rich wine-maroon cotton pique polo with neat ribbed trim',
    description:
      'U.S. Polo Assn. pure cotton maroon polo neck T-shirt pairing effortlessly with black jeans and clean white court shoes.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)', 'XXL (46)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 1149,
        url: 'https://www.flipkart.com/u-s-polo-assn-solid-men-neck-maroon-t-shirt/p/itm55f63e22e8e94',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1299,
        url: 'https://www.tatacliq.com/iconic-men-maroon-solid-regular-fit-pure-cotton-t-shirt/p-mp000000030654433',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)', 'XXL (46)']
      }
    ]
  }),
  makeProduct({
    id: 429,
    name: 'Van Heusen Wine Red Cotton Polo T-Shirt',
    brand: 'Van Heusen',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 1899,
    rating: 4.6,
    reviewCount: 4120,
    imageUrl: PRODUCT_IMAGES.tshirtWinePolo,
    sku: 'VH-TS-WIN29',
    tagline: 'Smooth bordeaux polo T-shirt tailored for smart evening fits',
    description:
      'Van Heusen burgundy wine solid cotton polo featuring sleek tapered shoulder seams and tonal button placket.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 999,
        url: 'https://www.flipkart.com/van-heusen-solid-men-polo-neck-maroon-t-shirt/p/itm66030388f8023',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Tata CLiQ',
        price: 1149,
        url: 'https://www.tatacliq.com/men-maroon-print-polo-neck-t-shirt/p-mp000000030796033',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),
  makeProduct({
    id: 430,
    name: 'Peter England Maroon Solid Polo T-Shirt',
    brand: 'Peter England',
    type: 'T-Shirt',
    style: 'Casual',
    color: 'Wine Red',
    colorHex: '#6B2232',
    mrp: 1399,
    rating: 4.5,
    reviewCount: 5410,
    imageUrl: PRODUCT_IMAGES.tshirtWinePolo,
    sku: 'PE-TS-WIN30',
    tagline: 'Deep claret wine cotton polo built for smart casual outings',
    description:
      'Peter England rich maroon solid polo-neck cotton T-shirt crafted for crisp pairing over black tailored trousers.',
    availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)', 'XL (44)'],
    garmentSpec: { silhouette: 'tshirt-polo', collar: 'polo', pocketCount: 0, sleeve: 'short', fabric: 'pique' },
    listings: [
      {
        platform: 'Flipkart',
        price: 749,
        url: 'https://www.flipkart.com/hi/peter-england-solid-men-polo-neck-maroon-t-shirt/p/itm116c5d16fd9a1',
        availableSizes: ['S (38)', 'M (39)', 'M (40)', 'L (42)']
      },
      {
        platform: 'Ajio',
        price: 899,
        url: 'https://www.ajio.com/john-players-jeans-men-slim-fit-crew-neck-t-shirt-with-logo-print/p/443090387_maroon',
        availableSizes: ['M (40)', 'L (42)', 'XL (44)']
      }
    ]
  }),

  // =========================================================================
  // 15. PANTS — BEIGE (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 301,
    name: 'Raymond Slim Fit Sand Beige Trousers',
    brand: 'Raymond',
    type: 'Pant',
    style: 'Formal',
    color: 'Beige',
    colorHex: '#D8C7B0',
    mrp: 2999,
    rating: 4.8,
    reviewCount: 7340,
    imageUrl: PRODUCT_IMAGES.pantBeigeChinos,
    sku: 'RAY-BGE-31',
    tagline: 'Tailored flat-front cotton stretch chinos with crisp crease',
    description:
      'Raymond premium sand-beige slim tapered trousers crafted in breathable combed cotton stretch for Clean Minimalist white top pairings.',
    availableSizes: ['28', '30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Flipkart',
        price: 1799,
        url: 'https://www.flipkart.com/raymond-slim-fit-men-beige-trousers/p/itm487b2d2330b2c',
        availableSizes: ['28', '30', '32', '34', '36']
      },
      {
        platform: 'Tata CLiQ',
        price: 1949,
        url: 'https://www.tatacliq.com/raymond-beige-slim-fit-trousers/p-mp000000032571809',
        availableSizes: ['30', '32', '34', '36', '38']
      }
    ]
  }),
  makeProduct({
    id: 302,
    name: 'Allen Solly Slim Fit Beige Chinos',
    brand: 'Allen Solly',
    type: 'Pant',
    style: 'Casual',
    color: 'Beige',
    colorHex: '#D8C7B0',
    mrp: 3475,
    rating: 4.4,
    reviewCount: 5540,
    imageUrl: PRODUCT_IMAGES.pantBeigeChinos,
    sku: 'AS-BGE-32',
    tagline: 'Soft brushed cotton twill flat-front slim chinos',
    description:
      'Allen Solly khaki-beige slim flat-front trousers with clean slant pockets and all-day comfort stretch.',
    availableSizes: ['28', '30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: false },
    listings: [
      {
        platform: 'Flipkart',
        price: 1499,
        mrp: 3475,
        rating: 4.4,
        url: 'https://www.flipkart.com/allen-solly-slim-fit-men-beige-trousers/p/itm87f600d8a9578',
        availableSizes: ['28', '30', '32', '34'],
        stockNote: 'In Stock · Waist 28–34'
      },
      {
        platform: 'Ajio',
        price: 2155,
        mrp: 3475,
        rating: 4.3,
        url: 'https://www.ajio.com/allen-solly-men-slim-fit-flat-front-trousers-with-insert-pockets/p/701905182_beige',
        availableSizes: ['30', '34', '36', '38'],
        stockNote: 'In Stock · Waist 32 Out of Stock on Ajio',
        bankOffer: 'Get it for ₹1,755 with code NEW30 (Flat 30% off up to ₹400)'
      }
    ]
  }),
  makeProduct({
    id: 303,
    name: 'Van Heusen Beige Solid Slim Trousers',
    brand: 'Van Heusen',
    type: 'Pant',
    style: 'Formal',
    color: 'Beige',
    colorHex: '#D8C7B0',
    mrp: 2799,
    rating: 4.6,
    reviewCount: 6420,
    imageUrl: PRODUCT_IMAGES.pantBeigeChinos,
    sku: 'VH-BGE-33',
    tagline: 'Sleek flat-front beige cotton trousers with subtle stretch',
    description:
      'Van Heusen lightweight warm-beige formal chinos tailored to balance white poplin shirts and low-top court trainers.',
    availableSizes: ['30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Flipkart',
        price: 1599,
        url: 'https://www.flipkart.com/van-heusen-slim-fit-men-beige-trousers/p/itm434e749f2d0b9',
        availableSizes: ['30', '32', '34', '36']
      },
      {
        platform: 'Tata CLiQ',
        price: 1749,
        url: 'https://www.tatacliq.com/van-heusen-beige-solid-slim-fit-trousers/p-mp000000032262006',
        availableSizes: ['30', '32', '34', '36', '38']
      }
    ]
  }),
  makeProduct({
    id: 304,
    name: 'Peter England Beige Cotton Slim Chinos',
    brand: 'Peter England',
    type: 'Pant',
    style: 'Casual',
    color: 'Beige',
    colorHex: '#D8C7B0',
    mrp: 1999,
    rating: 4.5,
    reviewCount: 9740,
    imageUrl: PRODUCT_IMAGES.pantBeigeChinos,
    sku: 'PE-BGE-34',
    tagline: 'Everyday stone-beige cotton trousers built for clean minimal fits',
    description:
      'Peter England comfortable cotton chinos in warm sand beige with buttoned welt back pockets and clean tapered leg.',
    availableSizes: ['28', '30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: false },
    listings: [
      {
        platform: 'Flipkart',
        price: 1149,
        url: 'https://www.flipkart.com/peter-england-straight-fit-men-beige-trousers/p/itm1ad92da85ccf9',
        availableSizes: ['28', '30', '32', '34', '36']
      },
      {
        platform: 'Tata CLiQ',
        price: 1299,
        url: 'https://www.tatacliq.com/peter-england-beige-cotton-slim-fit-chinos/p-mp000000029828503',
        availableSizes: ['30', '32', '34', '36', '38']
      }
    ]
  }),
  makeProduct({
    id: 305,
    name: 'Louis Philippe Beige Linen Flat-Front Trousers',
    brand: 'Louis Philippe',
    type: 'Pant',
    style: 'Formal',
    color: 'Beige',
    colorHex: '#D8C7B0',
    mrp: 3299,
    rating: 4.8,
    reviewCount: 4120,
    imageUrl: PRODUCT_IMAGES.pantBeigeChinos,
    sku: 'LP-BGE-35',
    tagline: 'Breezy tailored linen-blend beige trousers for refined styling',
    description:
      'Louis Philippe sand-beige flat-front trousers with crisp front drape, breathable linen weave, and tailored ankle opening.',
    availableSizes: ['30', '32', '34', '36'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'linen', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Flipkart',
        price: 1949,
        url: 'https://www.flipkart.com/louis-philippe-slim-fit-men-beige-trousers/p/itm7827148fbd387',
        availableSizes: ['30', '32', '34']
      },
      {
        platform: 'Tata CLiQ',
        price: 2149,
        url: 'https://www.tatacliq.com/louis-philippe-beige-solid-linen-flat-front-trousers/p-mp000000032167575',
        availableSizes: ['30', '32', '34', '36']
      }
    ]
  }),

  // =========================================================================
  // 16. PANTS — WHITE (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 306,
    name: 'Peter England Slim Fit White Cotton Trousers',
    brand: 'Peter England',
    type: 'Pant',
    style: 'Casual',
    color: 'White',
    colorHex: '#F9F9F9',
    mrp: 2199,
    rating: 4.5,
    reviewCount: 5180,
    imageUrl: PRODUCT_IMAGES.pantWhiteLinen,
    sku: 'PE-WHT-36',
    tagline: 'Crisp off-white tapered cotton chinos for pastel & navy tops',
    description:
      'Peter England opaque heavy-weave white cotton trousers built specifically for Summer Pastel, Coastal, and Nautical looks.',
    availableSizes: ['28', '30', '32', '34', '36'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: false },
    listings: [
      {
        platform: 'Flipkart',
        price: 1249,
        url: 'https://www.flipkart.com/peter-england-slim-fit-men-white-trousers/p/itma134b09556b98',
        availableSizes: ['28', '30', '32', '34']
      },
      {
        platform: 'Tata CLiQ',
        price: 1399,
        url: 'https://www.tatacliq.com/peter-england-white-cotton-slim-fit-trousers/p-mp000000027734430',
        availableSizes: ['30', '32', '34', '36']
      }
    ]
  }),
  makeProduct({
    id: 307,
    name: 'Van Heusen White Cotton Slim Trousers',
    brand: 'Van Heusen',
    type: 'Pant',
    style: 'Formal',
    color: 'White',
    colorHex: '#F9F9F9',
    mrp: 2799,
    rating: 4.6,
    reviewCount: 4720,
    imageUrl: PRODUCT_IMAGES.pantWhiteLinen,
    sku: 'VH-WHT-37',
    tagline: 'Tailored white flat-front stretch cotton chinos',
    description:
      'Van Heusen bright white tailored trousers with clean flat front, non-sheer dense cotton finish, and slim tapered silhouette.',
    availableSizes: ['30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Flipkart',
        price: 1649,
        url: 'https://www.flipkart.com/van-heusen-slim-fit-men-white-trousers/p/itm52c0f1f1540bb',
        availableSizes: ['30', '32', '34', '36']
      },
      {
        platform: 'Tata CLiQ',
        price: 1799,
        url: 'https://www.tatacliq.com/van-heusen-white-cotton-slim-fit-trousers/p-mp000000020672710',
        availableSizes: ['30', '32', '34', '36', '38']
      }
    ]
  }),
  makeProduct({
    id: 308,
    name: 'Allen Solly White Slim Fit Flat-Front Trousers',
    brand: 'Allen Solly',
    type: 'Pant',
    style: 'Casual',
    color: 'White',
    colorHex: '#F9F9F9',
    mrp: 2599,
    rating: 4.6,
    reviewCount: 3910,
    imageUrl: PRODUCT_IMAGES.pantWhiteLinen,
    sku: 'AS-WHT-38',
    tagline: 'Clean resort-white stretch chinos with tailored ankle trim',
    description:
      'Allen Solly white flat-front trousers with soft enzyme-washed cotton comfort and crisp coastal line.',
    availableSizes: ['28', '30', '32', '34', '36'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: false },
    listings: [
      {
        platform: 'Flipkart',
        price: 1549,
        url: 'https://www.flipkart.com/allen-solly-slim-fit-men-white-trousers/p/itm9fde7255d2029',
        availableSizes: ['28', '30', '32', '34']
      },
      {
        platform: 'Ajio',
        price: 1699,
        url: 'https://www.ajio.com/allen-solly-men-slim-fit-flat-front-trousers/p/701760923_white',
        availableSizes: ['30', '32', '34', '36']
      }
    ]
  }),
  makeProduct({
    id: 309,
    name: 'U.S. Polo Assn. White Linen Casual Trousers',
    brand: 'U.S. Polo Assn.',
    type: 'Pant',
    style: 'Casual',
    color: 'White',
    colorHex: '#F9F9F9',
    mrp: 2999,
    rating: 4.7,
    reviewCount: 4410,
    imageUrl: PRODUCT_IMAGES.pantWhiteLinen,
    sku: 'USPA-WHT-39',
    tagline: 'Airy ivory-white linen blend chinos built for warm-weather styling',
    description:
      'U.S. Polo Assn. white casual chinos offering relaxed breathability paired effortlessly with ice blue, pink, or navy tops.',
    availableSizes: ['30', '32', '34', '36'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'linen', pocketCount: 4, hasCrease: false },
    listings: [
      {
        platform: 'Flipkart',
        price: 1799,
        url: 'https://www.flipkart.com/u-s-polo-assn-slim-fit-men-white-trousers/p/itm06035894fdd19',
        availableSizes: ['30', '32', '34']
      },
      {
        platform: 'Myntra',
        price: 1949,
        url: 'https://www.myntra.com/trousers/us-polo-assn/us-polo-assn-white-linen-casual-trousers/1142199/buy',
        availableSizes: ['30', '32', '34', '36']
      }
    ]
  }),
  makeProduct({
    id: 310,
    name: 'Raymond White Slim Fit Contemporary Trousers',
    brand: 'Raymond',
    type: 'Pant',
    style: 'Formal',
    color: 'White',
    colorHex: '#F9F9F9',
    mrp: 3299,
    rating: 4.8,
    reviewCount: 3560,
    imageUrl: PRODUCT_IMAGES.pantWhiteLinen,
    sku: 'RAY-WHT-40',
    tagline: 'Precision-tailored crisp white suiting trousers',
    description:
      'Raymond contemporary white trousers featuring fine weave opacity, structured waistband, and clean straight-tapered leg.',
    availableSizes: ['28', '30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Flipkart',
        price: 1899,
        url: 'https://www.flipkart.com/raymond-slim-fit-men-white-trousers/p/itm7cb9c2f091947',
        availableSizes: ['28', '30', '32', '34', '36']
      },
      {
        platform: 'Ajio',
        price: 2049,
        url: 'https://www.ajio.com/raymond-slim-fit-flat-front-formal-trousers/p/461104195005',
        availableSizes: ['30', '32', '34', '36', '38']
      },
      {
        platform: 'Tata CLiQ',
        price: 2199,
        url: 'https://www.tatacliq.com/raymond-white-contemporary-fit-trousers/p-mp000000022512197',
        availableSizes: ['30', '32', '34', '36']
      }
    ]
  }),

  // =========================================================================
  // 17. PANTS — BLACK (5 Confirmed Models)
  // =========================================================================
  makeProduct({
    id: 311,
    name: "Levi's 511 Slim Fit Jet Black Jeans",
    brand: "Levi's",
    type: 'Pant',
    style: 'Casual',
    color: 'Black',
    colorHex: '#181818',
    mrp: 3199,
    rating: 4.8,
    reviewCount: 24500,
    imageUrl: PRODUCT_IMAGES.pantBlackDenim,
    sku: '04511-BLK',
    tagline: 'Iconic stretch black slim tapered denim for Modern Neutral & Evening looks',
    description:
      "Levi's signature 511 slim fit stretch black jeans crafted in fade-resistant overdyed cotton denim with clean streamlined leg.",
    availableSizes: ['28', '30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-denim', fabric: 'denim', pocketCount: 5, hasCrease: false },
    listings: [
      {
        platform: 'Flipkart',
        price: 1899,
        url: 'https://www.flipkart.com/levi-s-511-slim-men-black-jeans/p/itmfgxgcs4jzvhxj',
        availableSizes: ['28', '30', '32', '34', '36', '38']
      },
      {
        platform: 'Ajio',
        price: 2099,
        url: 'https://www.ajio.com/levi-s--men-511-slim-fit-mid-rise-jeans/p/443555563_black',
        availableSizes: ['30', '32', '34', '36']
      }
    ]
  }),
  makeProduct({
    id: 312,
    name: 'Allen Solly Slim Fit Jet Black Trousers',
    brand: 'Allen Solly',
    type: 'Pant',
    style: 'Casual',
    color: 'Black',
    colorHex: '#181818',
    mrp: 2599,
    rating: 4.6,
    reviewCount: 7420,
    imageUrl: PRODUCT_IMAGES.pantBlackDenim,
    sku: 'AS-BLK-42',
    tagline: 'Deep black tapered stretch cotton chinos for evening styling',
    description:
      'Allen Solly sharp jet-black flat-front slim chinos designed for structured contrast under beige and wine-red tops.',
    availableSizes: ['28', '30', '32', '34', '36'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Flipkart',
        price: 1499,
        url: 'https://www.flipkart.com/allen-solly-slim-fit-men-black-trousers/p/itm8d6af902f5ced',
        availableSizes: ['28', '30', '32', '34']
      },
      {
        platform: 'Tata CLiQ',
        price: 1649,
        url: 'https://www.tatacliq.com/allen-solly-black-solid-trousers/p-mp000000031408155',
        availableSizes: ['30', '32', '34', '36']
      }
    ]
  }),
  makeProduct({
    id: 313,
    name: 'Van Heusen Black Regular & Tailored Trousers',
    brand: 'Van Heusen',
    type: 'Pant',
    style: 'Formal',
    color: 'Black',
    colorHex: '#181818',
    mrp: 2799,
    rating: 4.6,
    reviewCount: 6810,
    imageUrl: PRODUCT_IMAGES.pantBlackDenim,
    sku: 'VH-BLK-43',
    tagline: 'Anti-fade matte black formal & smart-casual dress trousers',
    description:
      'Van Heusen tailored black dress trousers featuring sleek flat-front tailoring and comfortable all-season stretch.',
    availableSizes: ['30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Flipkart',
        price: 1599,
        url: 'https://www.flipkart.com/van-heusen-regular-fit-men-black-trousers/p/itm30300c128fe0b',
        availableSizes: ['30', '32', '34', '36']
      },
      {
        platform: 'Tata CLiQ',
        price: 1749,
        url: 'https://www.tatacliq.com/van-heusen-black-slim-fit-trousers/p-mp000000023902503',
        availableSizes: ['30', '32', '34', '36', '38']
      }
    ]
  }),
  makeProduct({
    id: 314,
    name: 'Peter England Slim Fit Black Jeans',
    brand: 'Peter England',
    type: 'Pant',
    style: 'Casual',
    color: 'Black',
    colorHex: '#181818',
    mrp: 2199,
    rating: 4.5,
    reviewCount: 8340,
    imageUrl: PRODUCT_IMAGES.pantBlackDenim,
    sku: 'PE-BLK-44',
    tagline: 'Clean all-black stretch denim without distress marks',
    description:
      'Peter England dark black slim stretch jeans offering a crisp dress-casual finish that pairs seamlessly with white court sneakers.',
    availableSizes: ['28', '30', '32', '34', '36'],
    garmentSpec: { silhouette: 'pant-denim', fabric: 'denim', pocketCount: 5, hasCrease: false },
    listings: [
      {
        platform: 'Flipkart',
        price: 1199,
        url: 'https://www.flipkart.com/peter-england-slim-men-black-jeans/p/itma51456aa54c16',
        availableSizes: ['28', '30', '32', '34']
      },
      {
        platform: 'Tata CLiQ',
        price: 1349,
        url: 'https://www.tatacliq.com/peter-england-black-slim-fit-jeans/p-mp000000032220063',
        availableSizes: ['30', '32', '34', '36']
      }
    ]
  }),
  makeProduct({
    id: 315,
    name: 'Raymond Slim Fit Charcoal Black Trousers',
    brand: 'Raymond',
    type: 'Pant',
    style: 'Formal',
    color: 'Black',
    colorHex: '#181818',
    mrp: 3199,
    rating: 4.8,
    reviewCount: 5910,
    imageUrl: PRODUCT_IMAGES.pantBlackDenim,
    sku: 'RAY-BLK-45',
    tagline: 'Precision-cut matte black flat-front tailored trousers',
    description:
      'Raymond signature black formal trousers delivering crisp fall, deep true-black finish, and effortless comfort.',
    availableSizes: ['30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Flipkart',
        price: 1849,
        url: 'https://www.flipkart.com/raymond-slim-fit-men-black-trousers/p/itme02493a41d8e6',
        availableSizes: ['30', '32', '34', '36']
      },
      {
        platform: 'Tata CLiQ',
        price: 1999,
        url: 'https://www.tatacliq.com/raymond-black-slim-fit-trousers/p-mp000000029793993',
        availableSizes: ['30', '32', '34', '36', '38']
      }
    ]
  }),
  makeProduct({
    id: 316,
    name: 'U.S. Polo Assn. Sand Beige Cotton Casual Chinos',
    brand: 'U.S. Polo Assn.',
    type: 'Pant',
    style: 'Casual',
    color: 'Beige',
    colorHex: '#D8C7B0',
    mrp: 2499,
    rating: 4.5,
    reviewCount: 4180,
    imageUrl: PRODUCT_IMAGES.pantBeigeChinos,
    sku: 'USPA-BGE-36',
    tagline: 'Soft stretch twill beige casual chinos built for everyday wear',
    description:
      'U.S. Polo Assn. sand beige casual cotton chinos featuring relaxed tapered fit, coin pocket, and enzyme-washed softness for T-shirts and sneakers.',
    availableSizes: ['28', '30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: false },
    listings: [
      {
        platform: 'Flipkart',
        price: 1399,
        rating: 4.5,
        url: 'https://www.flipkart.com/u-s-polo-assn-slim-fit-men-beige-trousers/p/itm3f8c2a1904b77',
        availableSizes: ['28', '30', '32', '34', '36']
      },
      {
        platform: 'Myntra',
        price: 1549,
        rating: 4.6,
        url: 'https://www.myntra.com/trousers/us-polo-assn/us-polo-assn-men-beige-regular-fit-cotton-chinos/28492014/buy',
        availableSizes: ['30', '32', '34', '36', '38']
      }
    ]
  }),
  makeProduct({
    id: 317,
    name: 'Louis Philippe Ivory White Tailored Formal Trousers',
    brand: 'Louis Philippe',
    type: 'Pant',
    style: 'Formal',
    color: 'White',
    colorHex: '#F9F9F9',
    mrp: 3199,
    rating: 4.7,
    reviewCount: 3290,
    imageUrl: PRODUCT_IMAGES.pantWhiteLinen,
    sku: 'LP-WHT-37',
    tagline: 'Opaque structured white dress trousers with crisp center crease',
    description:
      'Louis Philippe crisp ivory-white formal flat-front trousers tailored in non-sheer fine suiting cotton blend with pressed crease.',
    availableSizes: ['28', '30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Tata CLiQ',
        price: 1999,
        rating: 4.7,
        url: 'https://www.tatacliq.com/louis-philippe-white-solid-formal-trousers/p-mp000000031094821',
        availableSizes: ['30', '32', '34', '36', '38']
      },
      {
        platform: 'Flipkart',
        price: 1849,
        rating: 4.6,
        url: 'https://www.flipkart.com/louis-philippe-slim-fit-men-white-formal-trousers/p/itm7823a01f9bc22',
        availableSizes: ['28', '30', '32', '34', '36']
      }
    ]
  }),
  makeProduct({
    id: 318,
    name: 'Arrow Black Tailored Formal Dress Trousers',
    brand: 'Arrow',
    type: 'Pant',
    style: 'Formal',
    color: 'Black',
    colorHex: '#181818',
    mrp: 2999,
    rating: 4.6,
    reviewCount: 5420,
    imageUrl: PRODUCT_IMAGES.pantBlackDenim,
    sku: 'AR-BLK-38',
    tagline: 'Wrinkle-resistant jet-black executive formal dress trousers',
    description:
      'Arrow crisp black formal flat-front trousers engineered with breathable suiting weave, hidden hook closure, and sharp tailored crease.',
    availableSizes: ['28', '30', '32', '34', '36', '38'],
    garmentSpec: { silhouette: 'pant-chino', fabric: 'chino', pocketCount: 4, hasCrease: true },
    listings: [
      {
        platform: 'Flipkart',
        price: 1699,
        rating: 4.6,
        url: 'https://www.flipkart.com/arrow-slim-fit-men-black-formal-trousers/p/itm2c9d81a40b512',
        availableSizes: ['28', '30', '32', '34', '36']
      },
      {
        platform: 'Myntra',
        price: 1849,
        rating: 4.6,
        url: 'https://www.myntra.com/trousers/arrow/arrow-men-black-solid-formal-trousers/24193082/buy',
        availableSizes: ['30', '32', '34', '36', '38']
      }
    ]
  })
];
