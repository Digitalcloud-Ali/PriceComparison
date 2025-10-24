import React, { useState, useEffect } from 'react';
import { Brand } from '@/utils/brands';
import { brandAnalytics } from '@/services/brandAnalytics';
import Image from 'next/image';
import Link from 'next/link';

interface BrandSearchSuggestionsProps {
  searchTerm: string;
  category: string;
  brands: Brand[];
}

export default function BrandSearchSuggestions({
  searchTerm,
  category,
  brands,
}: BrandSearchSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<Brand[]>([]);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setSuggestions([]);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filteredBrands = brands.filter(brand => 
      brand.name.toLowerCase().includes(searchTermLower)
    );

    // Track search analytics
    brandAnalytics.trackSearch(category, searchTerm);

    setSuggestions(filteredBrands);
  }, [searchTerm, category, brands]);

  if (suggestions.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-2 z-50">
      <div className="p-2">
        {suggestions.map((brand) => (
          <Link
            key={brand.slug}
            href={`/category/${category}/brand/${brand.slug}`}
            className="flex items-center p-2 hover:bg-gray-50 rounded"
          >
            {brand.logo ? (
              <div className="w-8 h-8 mr-3">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-8 h-8 mr-3 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-lg font-bold">{brand.name[0]}</span>
              </div>
            )}
            <div>
              <div className="font-medium">{brand.name}</div>
              <div className="text-xs text-gray-500">
                View all {brand.name} products in {category}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 