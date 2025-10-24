import React from 'react';
import { formatPrice } from '@/utils/price';

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
  showDiscount?: boolean;
}

export default function ProductPrice({ price, originalPrice, showDiscount = true }: ProductPriceProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold text-blue-600">
        {formatPrice(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <>
          <span className="text-gray-500 line-through">
            {formatPrice(originalPrice)}
          </span>
          {showDiscount && (
            <span className="text-red-600 text-sm font-semibold">
              ({discount}% OFF)
            </span>
          )}
        </>
      )}
    </div>
  );
} 