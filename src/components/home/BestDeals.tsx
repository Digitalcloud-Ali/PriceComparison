import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/price';

interface BestDealsProps {
  products: Product[];
}

export default function BestDeals({ products }: BestDealsProps) {
  const deals = products
    .filter(p => p.originalPrice && p.originalPrice > p.price)
    .sort((a, b) => {
      const discountA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
      const discountB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
      return discountB - discountA;
    })
    .slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {deals.map((product) => (
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
            {product.originalPrice && (
              <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </div>
            )}
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
      ))}
    </div>
  );
} 