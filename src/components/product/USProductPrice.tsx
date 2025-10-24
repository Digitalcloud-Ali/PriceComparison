import React from 'react';
import { formatPrice } from '@/utils/price';
import { calculateTax, formatTaxRate } from '@/utils/tax';

interface USProductPriceProps {
  price: number;
  originalPrice?: number;
  stateCode: string;
  showTax?: boolean;
}

export default function USProductPrice({ 
  price, 
  originalPrice, 
  stateCode, 
  showTax = true 
}: USProductPriceProps) {
  const tax = calculateTax(price, stateCode);
  const totalPrice = price + tax;
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-600">
          {formatPrice(price)}
        </span>
        {originalPrice && originalPrice > price && (
          <>
            <span className="text-gray-500 line-through">
              {formatPrice(originalPrice)}
            </span>
            <span className="text-red-600 text-sm font-semibold">
              ({discount}% OFF)
            </span>
          </>
        )}
      </div>
      {showTax && stateCode && (
        <div className="text-sm text-gray-600">
          <div>+ {formatPrice(tax)} estimated tax ({formatTaxRate(stateCode)})</div>
          <div className="font-semibold mt-1">
            Total: {formatPrice(totalPrice)}
          </div>
        </div>
      )}
    </div>
  );
} 