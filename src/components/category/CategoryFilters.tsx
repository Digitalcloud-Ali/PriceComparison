import React from 'react';
import { formatPrice } from '@/utils/price';
import { Brand, FilterOptions } from '@/types/filters';
import StarRating from '@/components/common/StarRating';

interface CategoryFiltersProps {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
  brands: Brand[];
  availableFilters: {
    priceRanges: { min: number; max: number }[];
    colors: string[];
    sizes: string[];
    features: string[];
    conditions: string[];
  };
}

export default function CategoryFilters({ 
  filters, 
  onChange, 
  brands,
  availableFilters 
}: CategoryFiltersProps) {
  const handleChange = (key: keyof FilterOptions, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-6 bg-white rounded-lg shadow p-4">
      {/* Prime & Delivery Filters */}
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-3">Delivery & Shipping</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.isPrime}
              onChange={(e) => handleChange('isPrime', e.target.checked)}
              className="rounded text-blue-600"
            />
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Prime
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.freeShipping}
              onChange={(e) => handleChange('freeShipping', e.target.checked)}
              className="rounded text-blue-600"
            />
            Free Shipping
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.nextDayDelivery}
              onChange={(e) => handleChange('nextDayDelivery', e.target.checked)}
              className="rounded text-blue-600"
            />
            Next Day Delivery
          </label>
        </div>
      </div>

      {/* Price Range */}
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatPrice(filters.priceRange[0])}</span>
            <span>{formatPrice(filters.priceRange[1])}</span>
          </div>
          <input
            type="range"
            min={0}
            max={2000}
            value={filters.priceRange[0]}
            onChange={(e) => handleChange('priceRange', [Number(e.target.value), filters.priceRange[1]])}
            className="w-full"
          />
          <input
            type="range"
            min={0}
            max={2000}
            value={filters.priceRange[1]}
            onChange={(e) => handleChange('priceRange', [filters.priceRange[0], Number(e.target.value)])}
            className="w-full"
          />
          {/* Predefined price ranges */}
          <div className="space-y-1 mt-2">
            {availableFilters.priceRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleChange('priceRange', [range.min, range.max])}
                className="text-sm text-gray-600 hover:text-blue-600 block"
              >
                {formatPrice(range.min)} - {formatPrice(range.max)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-3">Customer Reviews</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.ratings?.includes(rating)}
                onChange={(e) => {
                  const newRatings = e.target.checked
                    ? [...(filters.ratings || []), rating]
                    : (filters.ratings || []).filter((r) => r !== rating);
                  handleChange('ratings', newRatings);
                }}
                className="rounded text-blue-600"
              />
              <StarRating rating={rating} /> & up
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-3">Brands</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <label key={brand.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.brands?.includes(brand.id)}
                onChange={(e) => {
                  const newBrands = e.target.checked
                    ? [...(filters.brands || []), brand.id]
                    : (filters.brands || []).filter((b) => b !== brand.id);
                  handleChange('brands', newBrands);
                }}
                className="rounded text-blue-600"
              />
              {brand.name} ({brand.productCount})
            </label>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-3">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {availableFilters.colors.map((color) => (
            <button
              key={color}
              onClick={() => {
                const newColors = filters.colors?.includes(color)
                  ? filters.colors.filter((c) => c !== color)
                  : [...(filters.colors || []), color];
                handleChange('colors', newColors);
              }}
              className={`w-6 h-6 rounded-full border-2 ${
                filters.colors?.includes(color) ? 'border-blue-600' : 'border-gray-200'
              }`}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {availableFilters.sizes.map((size) => (
            <button
              key={size}
              onClick={() => {
                const newSizes = filters.sizes?.includes(size)
                  ? filters.sizes.filter((s) => s !== size)
                  : [...(filters.sizes || []), size];
                handleChange('sizes', newSizes);
              }}
              className={`px-3 py-1 rounded border ${
                filters.sizes?.includes(size)
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : 'border-gray-200 hover:border-blue-600'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="border-b pb-4">
        <h3 className="font-semibold mb-3">Features</h3>
        <div className="space-y-2">
          {availableFilters.features.map((feature) => (
            <label key={feature} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.features?.includes(feature)}
                onChange={(e) => {
                  const newFeatures = e.target.checked
                    ? [...(filters.features || []), feature]
                    : (filters.features || []).filter((f) => f !== feature);
                  handleChange('features', newFeatures);
                }}
                className="rounded text-blue-600"
              />
              {feature}
            </label>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div>
        <h3 className="font-semibold mb-3">Condition</h3>
        <div className="space-y-2">
          {availableFilters.conditions.map((condition) => (
            <label key={condition} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.conditions?.includes(condition)}
                onChange={(e) => {
                  const newConditions = e.target.checked
                    ? [...(filters.conditions || []), condition]
                    : (filters.conditions || []).filter((c) => c !== condition);
                  handleChange('conditions', newConditions);
                }}
                className="rounded text-blue-600"
              />
              {condition}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
} 