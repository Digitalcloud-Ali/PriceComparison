import React from 'react';
import { Review, ProductRating } from '@/types/review';
import { formatPrice } from '@/utils/price';

interface ReviewSectionProps {
  productId: string;
  reviews: Review[];
  rating: ProductRating;
}

export default function ReviewSection({ productId, reviews, rating }: ReviewSectionProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
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
                      style={{ width: `${((rating.distribution[stars as keyof typeof rating.distribution] || 0) / rating.total * 100)}%` }}
                    />
                  </div>
                  <div className="text-sm w-12 text-right">
                    {((rating.distribution[stars as keyof typeof rating.distribution] || 0) / rating.total * 100).toFixed(0)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="font-semibold">{review.title}</h3>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-sm text-gray-500">By {review.userName}</span>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      Verified Purchase
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 