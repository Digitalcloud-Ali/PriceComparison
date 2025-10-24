import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/constants/categories';
import { getCategoryPlaceholder } from '@/utils/placeholder';

export default function TopCategories() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(CATEGORIES).map(([slug, category]) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
            className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full aspect-square mb-3">
              <img
                src={getCategoryPlaceholder(category.name)}
                alt={category.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="font-semibold text-sm">{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
} 