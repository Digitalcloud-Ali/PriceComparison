import React from 'react';
import { Product } from '@/types/product';

interface BrandPopularityProps {
  products: Product[];
  brandName: string;
}

export default function BrandPopularity({ products, brandName }: BrandPopularityProps) {
  const calculatePopularityMetrics = () => {
    if (products.length === 0) return null;

    // Calculate percentage of products with discounts
    const productsWithDiscount = products.filter(p => p.originalPrice);
    const discountPercentage = (productsWithDiscount.length / products.length) * 100;

    // Calculate average discount percentage
    const avgDiscount = productsWithDiscount.length > 0
      ? productsWithDiscount.reduce((sum, p) => sum + ((p.originalPrice! - p.price) / p.originalPrice! * 100), 0) / productsWithDiscount.length
      : 0;

    // Calculate price competitiveness (percentage of products below average price)
    const avgPrice = products.reduce((sum, p) => sum + p.price, 0) / products.length;
    const competitiveProducts = products.filter(p => p.price < avgPrice);
    const priceCompetitiveness = (competitiveProducts.length / products.length) * 100;

    return {
      discountPercentage,
      avgDiscount,
      priceCompetitiveness,
    };
  };

  const metrics = calculatePopularityMetrics();
  if (!metrics) return null;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-6">{brandName} Popularity Metrics</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Products on Sale</p>
          <p className="text-2xl font-bold text-blue-600">
            {metrics.discountPercentage.toFixed(1)}%
          </p>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Average Discount</p>
          <p className="text-2xl font-bold text-green-600">
            {metrics.avgDiscount.toFixed(1)}%
          </p>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Price Competitiveness</p>
          <p className="text-2xl font-bold text-purple-600">
            {metrics.priceCompetitiveness.toFixed(1)}%
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Popularity Score</h3>
        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500"
            style={{ 
              width: `${(metrics.priceCompetitiveness + metrics.discountPercentage) / 2}%` 
            }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Based on price competitiveness and discount frequency
        </p>
      </div>
    </div>
  );
} 