import React from 'react';
import { useCompare } from '@/context/CompareContext';
import Link from 'next/link';

export default function CompareBar() {
  const { state, dispatch } = useCompare();

  if (state.items.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Compare Products ({state.items.length}/4):</span>
            <div className="flex space-x-2">
              {state.items.map((item) => (
                <div key={item.id} className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_FROM_COMPARE', payload: item.id })}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch({ type: 'CLEAR_COMPARE' })}
              className="text-red-600 hover:text-red-800"
            >
              Clear All
            </button>
            <Link
              href="/compare"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Compare Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 