import React from 'react';
import Link from 'next/link';
import { Brand } from '@/utils/brands';
import Image from 'next/image';

interface BrandGridProps {
  brands: Brand[];
  category: string;
}

export default function BrandGrid({ brands, category }: BrandGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {brands.map((brand) => (
        <Link
          key={brand.slug}
          href={`/category/${category}/brand/${brand.slug}`}
          className="group"
        >
          <div className="aspect-square bg-white border rounded-lg p-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={100}
                className="object-contain"
              />
            ) : (
              <span className="text-xl font-bold text-gray-800">{brand.name}</span>
            )}
          </div>
          <p className="mt-2 text-center text-sm font-medium text-gray-600 group-hover:text-blue-600">
            {brand.name}
          </p>
        </Link>
      ))}
    </div>
  );
} 