import { Product } from '@/types/product';
import { Brand } from '@/utils/brands';

export interface BrandMetrics {
  brand: Brand;
  productCount: number;
  averagePrice: number;
  averageDiscount: number;
  totalSales: number;
}

export function calculateBrandMetrics(products: Product[], brand: Brand): BrandMetrics {
  const brandProducts = products.filter(p => p.brand === brand.slug);
  const productCount = brandProducts.length;

  if (productCount === 0) {
    return {
      brand,
      productCount: 0,
      averagePrice: 0,
      averageDiscount: 0,
      totalSales: 0,
    };
  }

  const totalPrice = brandProducts.reduce((sum, p) => sum + p.price, 0);
  const averagePrice = totalPrice / productCount;

  const productsWithDiscount = brandProducts.filter(p => p.originalPrice);
  const averageDiscount = productsWithDiscount.length > 0
    ? productsWithDiscount.reduce((sum, p) => sum + ((p.originalPrice! - p.price) / p.originalPrice! * 100), 0) / productsWithDiscount.length
    : 0;

  const totalSales = brandProducts.reduce((sum, p) => sum + (p.soldCount || 0), 0);

  return {
    brand,
    productCount,
    averagePrice,
    averageDiscount,
    totalSales,
  };
} 