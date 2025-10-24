import React from 'react';
import { Product } from '@/types/product';
import { Brand } from '@/utils/brands';
import { formatPrice } from '@/utils/price';

interface BrandComparisonAnalyticsProps {
  brand1: Brand;
  brand2: Brand;
  products1: Product[];
  products2: Product[];
}

interface DetailedMetrics {
  priceRange: {
    min: number;
    max: number;
    median: number;
  };
  discountStats: {
    averageDiscount: number;
    maxDiscount: number;
    discountFrequency: number;
  };
  productStats: {
    totalProducts: number;
    newArrivals: number;
    bestSellers: number;
  };
  priceDistribution: {
    budget: number;
    midRange: number;
    premium: number;
  };
}

export default function BrandComparisonAnalytics({
  brand1,
  brand2,
  products1,
  products2,
}: BrandComparisonAnalyticsProps) {
  const calculateDetailedMetrics = (products: Product[]): DetailedMetrics => {
    const prices = products.map(p => p.price).sort((a, b) => a - b);
    const midIndex = Math.floor(prices.length / 2);
    
    // Price Range Metrics
    const priceRange = {
      min: prices[0] || 0,
      max: prices[prices.length - 1] || 0,
      median: prices.length % 2 === 0
        ? (prices[midIndex - 1] + prices[midIndex]) / 2
        : prices[midIndex] || 0,
    };

    // Discount Statistics
    const productsWithDiscount = products.filter(p => p.originalPrice);
    const discounts = productsWithDiscount.map(p => 
      ((p.originalPrice! - p.price) / p.originalPrice!) * 100
    );
    const discountStats = {
      averageDiscount: discounts.length > 0 
        ? discounts.reduce((a, b) => a + b, 0) / discounts.length 
        : 0,
      maxDiscount: Math.max(...discounts, 0),
      discountFrequency: (productsWithDiscount.length / products.length) * 100,
    };

    // Product Statistics
    const now = new Date();
    const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
    const productStats = {
      totalProducts: products.length,
      newArrivals: products.filter(p => new Date(p.createdAt || '') > thirtyDaysAgo).length,
      bestSellers: products.filter(p => (p.soldCount || 0) > 100).length,
    };

    // Price Distribution
    const maxPrice = Math.max(...prices);
    const priceThresholds = {
      budget: maxPrice * 0.33,
      premium: maxPrice * 0.66,
    };
    
    const priceDistribution = {
      budget: products.filter(p => p.price <= priceThresholds.budget).length,
      midRange: products.filter(p => p.price > priceThresholds.budget && p.price <= priceThresholds.premium).length,
      premium: products.filter(p => p.price > priceThresholds.premium).length,
    };

    return {
      priceRange,
      discountStats,
      productStats,
      priceDistribution,
    };
  };

  const metrics1 = calculateDetailedMetrics(products1);
  const metrics2 = calculateDetailedMetrics(products2);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6">Detailed Brand Comparison</h2>

      {/* Price Range Analysis */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Price Range Analysis</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { brand: brand1, metrics: metrics1 },
            { brand: brand2, metrics: metrics2 },
          ].map(({ brand, metrics }) => (
            <div key={brand.slug} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">{brand.name}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lowest Price:</span>
                  <span className="font-medium">{formatPrice(metrics.priceRange.min)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Price:</span>
                  <span className="font-medium">{formatPrice(metrics.priceRange.median)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Highest Price:</span>
                  <span className="font-medium">{formatPrice(metrics.priceRange.max)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Discount Analysis */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Discount Analysis</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { brand: brand1, metrics: metrics1 },
            { brand: brand2, metrics: metrics2 },
          ].map(({ brand, metrics }) => (
            <div key={brand.slug} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">{brand.name}</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Discount:</span>
                  <span className="font-medium text-green-600">
                    {metrics.discountStats.averageDiscount.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Maximum Discount:</span>
                  <span className="font-medium text-green-600">
                    {metrics.discountStats.maxDiscount.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Products on Sale:</span>
                  <span className="font-medium">
                    {metrics.discountStats.discountFrequency.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Distribution */}
      <div>
        <h3 className="font-semibold mb-4">Price Distribution</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { brand: brand1, metrics: metrics1 },
            { brand: brand2, metrics: metrics2 },
          ].map(({ brand, metrics }) => (
            <div key={brand.slug} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">{brand.name}</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Budget Range</span>
                    <span>{metrics.priceDistribution.budget} products</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{
                        width: `${(metrics.priceDistribution.budget / metrics.productStats.totalProducts) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Mid Range</span>
                    <span>{metrics.priceDistribution.midRange} products</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{
                        width: `${(metrics.priceDistribution.midRange / metrics.productStats.totalProducts) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Premium Range</span>
                    <span>{metrics.priceDistribution.premium} products</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{
                        width: `${(metrics.priceDistribution.premium / metrics.productStats.totalProducts) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 