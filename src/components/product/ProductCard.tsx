import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/price';
import { getAmazonAffiliateUrl } from '@/services/amazon-api';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const rating = product.rating || 0;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            {discount}% OFF
          </div>
        )}
        {product.isPrime && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Prime
          </div>
        )}
      </div>

      <div className="p-3">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-sm mb-2 line-clamp-2 hover:text-blue-600">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-blue-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-gray-400 line-through text-xs">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-current' : 'stroke-current'}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-600">({product.reviewCount})</span>
          </div>
        )}

        <a
          href={getAmazonAffiliateUrl(product.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-yellow-400 text-center py-1.5 rounded text-xs font-medium hover:bg-yellow-500 transition-colors"
        >
          View on Amazon
        </a>
      </div>
    </div>
  );
} 