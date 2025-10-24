import React from 'react';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/price';
import { getAmazonUrl } from '@/utils/market';
import Link from 'next/link';

interface USPrimeDealsProps {
  products: Product[];
  title?: string;
}

export default function USPrimeDeals({ products, title = "Prime Deals" }: USPrimeDealsProps) {
  const primeDeals = products
    .filter(p => p.originalPrice && p.originalPrice > p.price)
    .sort((a, b) => {
      const discountA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
      const discountB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
      return discountB - discountA;
    })
    .slice(0, 6);

  if (primeDeals.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
      <div className="flex items-center gap-3 mb-6">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {primeDeals.map((product) => {
          const discount = ((product.originalPrice! - product.price) / product.originalPrice!) * 100;
          
          return (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden text-gray-800">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full">
                  {discount.toFixed(0)}% OFF
                </div>
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prime
                </div>
              </div>

              <div className="p-4">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-blue-600">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-gray-400 line-through">
                      {formatPrice(product.originalPrice!)}
                    </span>
                  </div>
                </Link>

                <div className="space-y-2">
                  <div className="text-sm text-gray-600">
                    ✓ FREE Prime Delivery
                  </div>
                  <a
                    href={getAmazonUrl(product.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-yellow-400 text-center py-2 rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    Buy Now on Amazon
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 