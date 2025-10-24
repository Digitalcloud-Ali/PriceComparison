import React, { useState } from 'react';
import Link from 'next/link';
import { US_CATEGORIES, CategoryKey } from '@/constants/categories';

export default function CategoryMenu() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);

  return (
    <div className="relative group">
      <div className="flex space-x-6">
        {Object.entries(US_CATEGORIES).map(([key, category]) => (
          <div
            key={key}
            className="relative"
            onMouseEnter={() => setActiveCategory(key as CategoryKey)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <Link
              href={`/category/${key}`}
              className="hover:text-blue-600 py-2 block"
            >
              {category.name}
            </Link>
            {activeCategory === key && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/category/${key}/${sub.slug}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 