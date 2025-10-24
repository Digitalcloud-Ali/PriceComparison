import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/price';

interface USPrimeDealsProps {
  products: Product[];
  title?: string;
}

export default function USPrimeDeals({ products, title = "Today's Best Deals" }: USPrimeDealsProps) {
  const primeDeals = products.filter(p => p.isPrime);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {primeDeals.map((product) => {
          const discount = product.originalPrice 
            ? ((product.originalPrice - product.price) / product.originalPrice) * 100
            : 0;
          
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {discount > 0 && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                    {discount.toFixed(0)}% OFF
                  </div>
                )}
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Prime
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
} 