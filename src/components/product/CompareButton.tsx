import React from 'react';
import { useCompare } from '@/context/CompareContext';
import { Product } from '@/types/product';

interface CompareButtonProps {
  product: Product;
}

export default function CompareButton({ product }: CompareButtonProps) {
  const { state, dispatch } = useCompare();
  const isInCompare = state.items.some(item => item.id === product.id);

  const handleCompare = () => {
    if (isInCompare) {
      dispatch({ type: 'REMOVE_FROM_COMPARE', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_COMPARE', payload: product });
    }
  };

  return (
    <button
      onClick={handleCompare}
      className={`px-4 py-2 rounded-lg text-sm ${
        isInCompare
          ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          : 'bg-gray-800 text-white hover:bg-gray-700'
      }`}
    >
      {isInCompare ? 'Remove from Compare' : 'Add to Compare'}
    </button>
  );
} 