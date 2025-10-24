import React from 'react';
import { ProductRating } from '@/types/review';

interface RatingDistributionProps {
  rating: ProductRating;
}

export default function RatingDistribution({ rating }: RatingDistributionProps) {
  const getPercentage = (count: number) => {
    return ((count / rating.total) * 100).toFixed(0);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="text-center mb-4">
        <div className="text-4xl font-bold text-blue-600">
          {rating.average.toFixed(1)}
        </div>
        <div className="text-sm text-gray-600">
          out of 5 stars
        </div>
        <div className="text-sm text-gray-600 mt-1">
          {rating.total} ratings
        </div>
      </div>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((stars) => (
          <div key={stars} className="flex items-center gap-2">
            <div className="text-sm w-12">{stars} stars</div>
            <div className="flex-1 h-4 bg-gray-200 rounded">
              <div
                className="h-full bg-yellow-400 rounded"
                style={{ width: `${getPercentage(rating.distribution[stars as keyof typeof rating.distribution])}%` }}
              />
            </div>
            <div className="text-sm w-12 text-right">
              {getPercentage(rating.distribution[stars as keyof typeof rating.distribution])}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 