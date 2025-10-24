import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/price';

interface TrendingProductsProps {
  products: Product[];
}

export default function TrendingProducts({ products }: TrendingProductsProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
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
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-blue-600 font-bold">{formatPrice(product.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 