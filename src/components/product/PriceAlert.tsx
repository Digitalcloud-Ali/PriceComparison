import React, { useState, FormEvent } from 'react';
import { Product } from '@/types/product';

interface PriceAlertProps {
  product: Product;
}

export default function PriceAlert({ product }: PriceAlertProps) {
  const [email, setEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState(product.price);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add price alert logic
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="font-semibold mb-4">Set Price Alert</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 rounded"
        />
        <input
          type="number"
          value={targetPrice}
          onChange={(e) => setTargetPrice(Number(e.target.value))}
          className="w-full mb-3 p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Alert me when price drops
        </button>
      </form>
    </div>
  );
} 