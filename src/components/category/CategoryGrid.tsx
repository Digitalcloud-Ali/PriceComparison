import React from 'react';
import Link from 'next/link';

const CATEGORIES = [
  {
    name: 'Electronics',
    slug: 'electronics',
    icon: '📱',
  },
  {
    name: 'Fashion',
    slug: 'fashion',
    icon: '👕',
  },
  {
    name: 'Home & Kitchen',
    slug: 'home',
    icon: '🏠',
  },
  {
    name: 'Sports & Outdoors',
    slug: 'sports',
    icon: '⚽',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={`/category/${category.slug}`}
          className="group"
        >
          <div className="aspect-square bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center text-center group-hover:bg-gray-100 transition-colors">
            <span className="text-4xl mb-4">{category.icon}</span>
            <h3 className="font-semibold">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
} 