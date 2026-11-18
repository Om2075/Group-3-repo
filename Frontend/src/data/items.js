// Unified catalog export backed by BRANDED_PRODUCTS (zero external/broken image links)
import { BRANDED_PRODUCTS } from './brandedProducts.js';

export const DATABASE_ITEMS = BRANDED_PRODUCTS.map((product) => ({
  id: product.id,
  name: product.name,
  brand: product.brand,
  type: product.type,
  style: product.style,
  color: product.color,
  colorHex: product.colorHex,
  platform: product.lowestPlatform,
  price: product.lowestPrice,
  lowestPrice: product.lowestPrice,
  lowestPlatform: product.lowestPlatform,
  mrp: product.mrp,
  rating: product.rating,
  imageUrl: product.imageUrl,
  directUrl: product.directUrl
}));
