import React from 'react';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/price';
import { getAmazonAffiliateUrl } from '@/services/amazon-api';
import Link from 'next/link';

interface BrandDealsProps {
  products: Product[];
  brandName: string;
}

export default function BrandDeals({ products, brandName }: BrandDealsProps) {
  const deals = products
    .filter(p => p.originalPrice && p.originalPrice > p.price)
    .sort((a, b) => {
      const discountA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
      const discountB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
      return discountB - discountA;
    })
    .slice(0, 4);

  if (deals.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-6">Best {brandName} Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {deals.map((product) => {
          const discount = ((product.originalPrice! - product.price) / product.originalPrice!) * 100;
          
          return (
            <div key={product.id} className="relative border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full">
                {discount.toFixed(0)}% OFF
              </div>
              <Link href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      {formatPrice(product.originalPrice!)}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-4 pt-0">
                <a
                  href={getAmazonAffiliateUrl(product.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-400 text-center py-2 rounded-lg hover:bg-yellow-500 text-sm"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 