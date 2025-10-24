import React from 'react';

export default function USPrimeFeatures() {
  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Amazon Prime Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <h3 className="font-semibold">FREE Two-Day Shipping</h3>
            <p className="text-sm text-gray-600">On millions of items</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <div>
            <h3 className="font-semibold">Prime Video</h3>
            <p className="text-sm text-gray-600">Stream thousands of movies & TV shows</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <div>
            <h3 className="font-semibold">Prime Music</h3>
            <p className="text-sm text-gray-600">Stream millions of songs</p>
          </div>
        </div>
      </div>
    </div>
  );
} 