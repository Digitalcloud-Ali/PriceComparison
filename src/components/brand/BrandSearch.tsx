import React, { useState, useEffect } from 'react';
import { Brand, getBrandsForCategory } from '@/utils/brands';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface BrandSearchProps {
  category: string;
}

export default function BrandSearch({ category }: BrandSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  const router = useRouter();

  useEffect(() => {
    const allBrands = getBrandsForCategory(category);
    setBrands(allBrands);
    setFilteredBrands(allBrands);
  }, [category]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = brands.filter(brand => 
      brand.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBrands(filtered);
  };

  return (
    <div className="mb-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search brands..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredBrands.map((brand) => (
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
                  width={80}
                  height={80}
                  className="object-contain"
                />
              ) : (
                <span className="text-2xl font-bold text-gray-800">
                  {brand.name[0]}
                </span>
              )}
            </div>
            <p className="mt-2 text-center text-sm font-medium text-gray-600 group-hover:text-blue-600">
              {brand.name}
            </p>
          </Link>
        ))}
      </div>

      {filteredBrands.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No brands found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
} 