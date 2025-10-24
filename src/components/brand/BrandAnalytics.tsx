import React from 'react';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/price';

interface BrandAnalyticsProps {
  products: Product[];
  brandName: string;
}

export default function BrandAnalytics({ products, brandName }: BrandAnalyticsProps) {
  const calculateMetrics = () => {
    if (products.length === 0) return null;

    const totalProducts = products.length;
    const totalValue = products.reduce((sum, p) => sum + p.price, 0);
    const avgPrice = totalValue / totalProducts;
    
    const productsWithDiscount = products.filter(p => p.originalPrice);
    const avgDiscount = productsWithDiscount.length > 0
      ? productsWithDiscount.reduce((sum, p) => sum + ((p.originalPrice! - p.price) / p.originalPrice! * 100), 0) / productsWithDiscount.length
      : 0;

    const priceRanges = {
      under50: products.filter(p => p.price < 50).length,
      under100: products.filter(p => p.price >= 50 && p.price < 100).length,
      under200: products.filter(p => p.price >= 100 && p.price < 200).length,
      over200: products.filter(p => p.price >= 200).length,
    };

    return {
      totalProducts,
      totalValue,
      avgPrice,
      avgDiscount,
      priceRanges,
    };
  };

  const metrics = calculateMetrics();
  if (!metrics) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">{brandName} Analytics</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Products</p>
          <p className="text-2xl font-bold text-blue-600">{metrics.totalProducts}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Average Price</p>
          <p className="text-2xl font-bold text-green-600">{formatPrice(metrics.avgPrice)}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Average Discount</p>
          <p className="text-2xl font-bold text-yellow-600">{metrics.avgDiscount.toFixed(1)}%</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Value</p>
          <p className="text-2xl font-bold text-purple-600">{formatPrice(metrics.totalValue)}</p>
        </div>
      </div>

      <h3 className="font-semibold mb-4">Price Distribution</h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <span className="w-24 text-sm">Under £50</span>
          <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500"
              style={{ width: `${(metrics.priceRanges.under50 / metrics.totalProducts) * 100}%` }}
            />
          </div>
          <span className="w-16 text-right text-sm">{metrics.priceRanges.under50}</span>
        </div>
        <div className="flex items-center">
          <span className="w-24 text-sm">£50 - £100</span>
          <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500"
              style={{ width: `${(metrics.priceRanges.under100 / metrics.totalProducts) * 100}%` }}
            />
          </div>
          <span className="w-16 text-right text-sm">{metrics.priceRanges.under100}</span>
        </div>
        <div className="flex items-center">
          <span className="w-24 text-sm">£100 - £200</span>
          <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-500"
              style={{ width: `${(metrics.priceRanges.under200 / metrics.totalProducts) * 100}%` }}
            />
          </div>
          <span className="w-16 text-right text-sm">{metrics.priceRanges.under200}</span>
        </div>
        <div className="flex items-center">
          <span className="w-24 text-sm">Over £200</span>
          <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500"
              style={{ width: `${(metrics.priceRanges.over200 / metrics.totalProducts) * 100}%` }}
            />
          </div>
          <span className="w-16 text-right text-sm">{metrics.priceRanges.over200}</span>
        </div>
      </div>
    </div>
  );
} 