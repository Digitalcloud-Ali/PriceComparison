import React from 'react';
import { PricePoint } from '@/types/product';
import { formatPrice } from '@/utils/price';
import { Line } from 'react-chartjs-2';

interface PriceHistoryProps {
  priceHistory: PricePoint[];
  lowestPrice: number;
  highestPrice: number;
  currentPrice: number;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          return `$${context.parsed.y}`;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        callback: function(value: any) {
          return `$${value}`;
        }
      }
    }
  }
};

export default function PriceHistory({ 
  priceHistory, 
  lowestPrice, 
  highestPrice, 
  currentPrice 
}: PriceHistoryProps) {
  const data = {
    labels: priceHistory.map(p => p.date),
    datasets: [{
      label: 'Price History',
      data: priceHistory.map(p => p.price),
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.1
    }]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Price History</h3>
      <Line data={data} options={options} />
    </div>
  );
} 