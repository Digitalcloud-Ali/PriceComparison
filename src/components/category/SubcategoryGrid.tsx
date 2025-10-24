import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SubCategory } from '@/types/category';
import { getCategoryPlaceholder } from '@/utils/placeholder';

interface SubcategoryGridProps {
  subcategories: SubCategory[];
  parentSlug: string;
}

export default function SubcategoryGrid({ subcategories, parentSlug }: SubcategoryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {subcategories.map((subcategory) => (
        <Link
          key={subcategory.slug}
          href={`/category/${parentSlug}/${subcategory.slug}`}
          className="group"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={subcategory.image || getCategoryPlaceholder(subcategory.name)}
              alt={subcategory.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-4">
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {subcategory.name}
            </h3>
            {subcategory.description && (
              <p className="mt-1 text-sm text-gray-500">{subcategory.description}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
} 