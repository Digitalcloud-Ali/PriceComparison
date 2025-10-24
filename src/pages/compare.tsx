import React from 'react';
import { Layout } from '@components/index';
import { useCompare } from '@/context/CompareContext';
import Link from 'next/link';

export default function ComparePage() {
  const { state, dispatch } = useCompare();

  const getAmazonAffiliateUrl = (productId: string) => {
    return `https://amazon.com/dp/${productId}?tag=${process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_ID}`;
  };

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Compare Products</h1>
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No products to compare</p>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Browse Products
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Compare Products</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left border">Features</th>
                {state.items.map(product => (
                  <th key={product.id} className="p-4 text-left border min-w-[250px]">
                    <div className="flex flex-col">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover mb-4 rounded"
                      />
                      <h3 className="font-semibold">{product.title}</h3>
                      <p className="text-blue-600 font-bold mt-2">
                        ${product.price.toFixed(2)}
                      </p>
                      <button
                        onClick={() => dispatch({ type: 'REMOVE_FROM_COMPARE', payload: product.id })}
                        className="text-red-600 text-sm mt-2 hover:text-red-800"
                      >
                        Remove
                      </button>
                      <a
                        href={getAmazonAffiliateUrl(product.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 bg-yellow-400 text-center py-2 rounded hover:bg-yellow-500"
                      >
                        View on Amazon
                      </a>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border font-semibold">Price</td>
                {state.items.map(product => (
                  <td key={product.id} className="p-4 border">
                    ${product.price.toFixed(2)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border font-semibold">Category</td>
                {state.items.map(product => (
                  <td key={product.id} className="p-4 border">
                    {product.category || 'N/A'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 border font-semibold">Description</td>
                {state.items.map(product => (
                  <td key={product.id} className="p-4 border">
                    {product.description || 'N/A'}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
} 