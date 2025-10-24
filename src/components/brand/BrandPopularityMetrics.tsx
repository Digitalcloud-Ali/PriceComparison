import React from 'react';
import { Brand } from '@/utils/brands';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/price';
import Link from 'next/link';
import Image from 'next/image';

interface BrandMetrics {
  brand: Brand;
  productCount: number;
  averagePrice: number;
  averageDiscount: number;
  totalSales: number;
}

interface BrandPopularityMetricsProps {
  category: string;
  brands: Brand[];
  products: Product[];
}

export default function BrandPopularityMetrics({ category, brands, products }: BrandPopularityMetricsProps) {
  const calculateBrandMetrics = (brandSlug: string): BrandMetrics | null => {
    const brand = brands.find(b => b.slug === brandSlug);
    if (!brand) return null;

    const brandProducts = products.filter(p => p.brand === brandSlug);
    if (brandProducts.length === 0) return null;

    const productCount = brandProducts.length;
    const totalPrice = brandProducts.reduce((sum, p) => sum + p.price, 0);
    const averagePrice = totalPrice / productCount;

    const productsWithDiscount = brandProducts.filter(p => p.originalPrice);
    const averageDiscount = productsWithDiscount.length > 0
      ? productsWithDiscount.reduce((sum, p) => sum + ((p.originalPrice! - p.price) / p.originalPrice! * 100), 0) / productsWithDiscount.length
      : 0;

    // Simulated total sales - in real app, this would come from actual data
    const totalSales = brandProducts.reduce((sum, p) => sum + (p.soldCount || 0), 0);

    return {
      brand,
      productCount,
      averagePrice,
      averageDiscount,
      totalSales,
    };
  };

  const brandMetrics = brands
    .map(brand => calculateBrandMetrics(brand.slug))
    .filter((metrics): metrics is BrandMetrics => metrics !== null)
    .sort((a, b) => b.totalSales - a.totalSales)
    .slice(0, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {brandMetrics.map((metrics) => (
        <Link
          key={metrics.brand.slug}
          href={`/category/${category}/brand/${metrics.brand.slug}`}
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            {metrics.brand.logo ? (
              <Image
                src={metrics.brand.logo}
                alt={metrics.brand.name}
                width={48}
                height={48}
                className="object-contain"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">{metrics.brand.name[0]}</span>
              </div>
            )}
            <div>
              <h3 className="font-bold text-lg">{metrics.brand.name}</h3>
              <p className="text-sm text-gray-600">{metrics.productCount} products</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Average Price</p>
              <p className="font-semibold text-blue-600">
                {formatPrice(metrics.averagePrice)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Discount</p>
              <p className="font-semibold text-green-600">
                {metrics.averageDiscount.toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500"
                style={{
                  width: `${(metrics.totalSales / Math.max(...brandMetrics.map(m => m.totalSales))) * 100}%`,
                }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Popularity based on sales volume
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
} 