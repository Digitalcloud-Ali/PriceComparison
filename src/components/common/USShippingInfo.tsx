import React from 'react';
import { getFreeShippingThreshold, getEstimatedDelivery } from '@/utils/shipping';
import { formatPrice } from '@/utils/price';

interface USShippingInfoProps {
  stateCode: string;
  subtotal?: number;
}

export default function USShippingInfo() {
  return (
    <div className="bg-blue-50 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">US Shipping Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
          <div>
            <h3 className="font-semibold">Free US Delivery</h3>
            <p className="text-sm text-gray-600">On orders over $25</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-semibold">Prime Delivery</h3>
            <p className="text-sm text-gray-600">Free 2-day shipping</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-semibold">Same-Day Delivery</h3>
            <p className="text-sm text-gray-600">Available in select areas</p>
          </div>
        </div>
      </div>
    </div>
  );
} 