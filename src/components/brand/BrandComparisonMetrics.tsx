import React from 'react';
import { BrandComparisonMetrics } from '@/utils/brandComparisonMetrics';
import { formatPrice } from '@/utils/price';
import Image from 'next/image';

interface BrandComparisonMetricsProps {
  metrics: BrandComparisonMetrics;
}

export default function BrandComparisonMetrics({ metrics }: BrandComparisonMetricsProps) {
  const { brand1, brand2, priceDifference, discountDifference, competitiveness } = metrics;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6">Brand Comparison Analysis</h2>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Brand Headers */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            {brand1.brand.logo ? (
              <Image
                src={brand1.brand.logo}
                alt={brand1.brand.name}
                width={48}
                height={48}
                className="object-contain"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">{brand1.brand.name[0]}</span>
              </div>
            )}
          </div>
          <h3 className="font-bold text-lg">{brand1.brand.name}</h3>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            {brand2.brand.logo ? (
              <Image
                src={brand2.brand.logo}
                alt={brand2.brand.name}
                width={48}
                height={48}
                className="object-contain"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">{brand2.brand.name[0]}</span>
              </div>
            )}
          </div>
          <h3 className="font-bold text-lg">{brand2.brand.name}</h3>
        </div>

        {/* Metrics Comparison */}
        <div className="col-span-2 mt-6">
          <div className="space-y-6">
            {/* Price Comparison */}
            <div>
              <h4 className="font-semibold mb-2">Average Price Comparison</h4>
              <div className="flex items-center">
                <div className="w-1/2 text-right pr-4">
                  <span className="font-bold">{formatPrice(brand1.averagePrice)}</span>
                </div>
                <div className="w-8 text-center">vs</div>
                <div className="w-1/2 pl-4">
                  <span className="font-bold">{formatPrice(brand2.averagePrice)}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">
                {brand1.brand.name} is {Math.abs(priceDifference).toFixed(1)}% {competitiveness.price} than {brand2.brand.name}
              </p>
            </div>

            {/* Discount Comparison */}
            <div>
              <h4 className="font-semibold mb-2">Average Discount Comparison</h4>
              <div className="flex items-center">
                <div className="w-1/2 text-right pr-4">
                  <span className="font-bold text-green-600">{brand1.averageDiscount.toFixed(1)}%</span>
                </div>
                <div className="w-8 text-center">vs</div>
                <div className="w-1/2 pl-4">
                  <span className="font-bold text-green-600">{brand2.averageDiscount.toFixed(1)}%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">
                {brand1.brand.name} offers {Math.abs(discountDifference).toFixed(1)}% {competitiveness.discount} discounts
              </p>
            </div>

            {/* Overall Competitiveness */}
            <div>
              <h4 className="font-semibold mb-2">Overall Competitiveness</h4>
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${competitiveness.overall > 0 ? 'bg-blue-500' : 'bg-red-500'}`}
                  style={{ 
                    width: `${Math.abs(competitiveness.overall)}%`,
                    marginLeft: competitiveness.overall < 0 ? 'auto' : 0,
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">
                {competitiveness.overall > 0 
                  ? `${brand1.brand.name} is more competitive`
                  : competitiveness.overall < 0
                    ? `${brand2.brand.name} is more competitive`
                    : 'Both brands are equally competitive'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 