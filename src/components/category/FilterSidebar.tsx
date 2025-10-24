import React from 'react';
import { formatPrice } from '@/utils/price';

interface FilterSidebarProps {
  selectedCategory: string;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  brands?: string[];
  selectedBrands?: string[];
  onBrandSelect?: (brand: string) => void;
}

export default function FilterSidebar({
  selectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  brands = [],
  selectedBrands = [],
  onBrandSelect,
}: FilterSidebarProps) {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        {/* Sort Options */}
        <div>
          <h3 className="font-semibold mb-3">Sort By</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount">Biggest Discount</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Price Range</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>

        {/* Brand Filter */}
        {brands.length > 0 && onBrandSelect && (
          <div>
            <h3 className="font-semibold mb-3">Brands</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => onBrandSelect(brand)}
                    className="form-checkbox text-blue-600 rounded"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Prime Filter */}
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox text-blue-600 rounded"
            />
            <span>Prime Eligible</span>
          </label>
        </div>

        {/* Rating Filter */}
        <div>
          <h3 className="font-semibold mb-3">Customer Rating</h3>
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 rounded"
              />
              <div className="flex text-yellow-400">
                {[...Array(rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-1">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
} 