import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/constants/categories';

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(CATEGORIES).map(([slug, category]) => (
        <Link
          key={slug}
          href={`/category/${slug}`}
          className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow"
        >
          <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
          <p className="text-sm text-gray-600">View Products</p>
        </Link>
      ))}
    </div>
  );
} 