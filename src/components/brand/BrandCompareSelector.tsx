import React, { useState } from 'react';
import { Brand, getBrandsForCategory } from '@/utils/brands';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface BrandCompareSelectorProps {
  currentBrand: Brand;
  category: string;
}

export default function BrandCompareSelector({ currentBrand, category }: BrandCompareSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const brands = getBrandsForCategory(category).filter(brand => brand.slug !== currentBrand.slug);

  const handleCompare = (selectedBrand: Brand) => {
    router.push(`/compare-brands?category=${category}&brand1=${currentBrand.slug}&brand2=${selectedBrand.slug}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        Compare with other brands
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="font-semibold mb-2">Select a brand to compare</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <button
                  key={brand.slug}
                  onClick={() => handleCompare(brand)}
                  className="w-full flex items-center p-2 rounded hover:bg-gray-100"
                >
                  {brand.logo ? (
                    <div className="w-8 h-8 mr-2">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 mr-2 flex items-center justify-center bg-gray-100 rounded">
                      {brand.name[0]}
                    </div>
                  )}
                  <span className="text-gray-700">{brand.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
} 