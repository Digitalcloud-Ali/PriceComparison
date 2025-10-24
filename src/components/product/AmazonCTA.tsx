import React from 'react';
import { getAmazonUrl } from '@/utils/market';

interface AmazonCTAProps {
  productId: string;
}

export default function AmazonCTA({ productId }: AmazonCTAProps) {
  return (
    <div className="mt-6 space-y-3">
      <a
        href={getAmazonUrl(productId)}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-yellow-400 text-center py-3 rounded-lg hover:bg-yellow-500 transition-colors font-semibold"
      >
        View on Amazon
      </a>
      <p className="text-xs text-gray-500 text-center">
        *Prices and availability are accurate as of the time of publication and are subject to change.
      </p>
    </div>
  );
} 