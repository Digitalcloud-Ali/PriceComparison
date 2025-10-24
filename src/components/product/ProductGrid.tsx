import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/price';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative w-full pt-[75%]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold">{formatPrice(product.price)}</span>
              {product.isPrime && (
                <span className="text-sm text-blue-600">Prime</span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 