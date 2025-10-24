import React from 'react';
import { Brand } from '@/utils/brands';
import Image from 'next/image';

interface BrandFilterProps {
  brands: Brand[];
  selectedBrands: string[];
  onBrandSelect: (brandSlug: string) => void;
}

export default function BrandFilter({ brands, selectedBrands, onBrandSelect }: BrandFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Filter by Brand</h3>
      <div className="space-y-3">
        {brands.map((brand) => (
          <label
            key={brand.slug}
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
          >
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand.slug)}
              onChange={() => onBrandSelect(brand.slug)}
              className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-2">
              {brand.logo ? (
                <div className="w-8 h-8">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-lg font-bold">{brand.name[0]}</span>
                </div>
              )}
              <span className="text-gray-700">{brand.name}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
} 