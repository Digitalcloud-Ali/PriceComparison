import { Product } from '@/types/product';
import { Brand } from '@/utils/brands';
import { BrandMetrics, calculateBrandMetrics } from '@/utils/brandMetrics';

export interface BrandComparisonMetrics {
  brand1: BrandMetrics;
  brand2: BrandMetrics;
  priceDifference: number;
  discountDifference: number;
  competitiveness: {
    price: 'lower' | 'higher' | 'similar';
    discount: 'better' | 'worse' | 'similar';
    overall: number;
  };
}

export function calculateBrandComparison(
  products1: Product[],
  products2: Product[],
  brand1: Brand,
  brand2: Brand
): BrandComparisonMetrics {
  const metrics1 = calculateBrandMetrics(products1, brand1);
  const metrics2 = calculateBrandMetrics(products2, brand2);

  const priceDifference = metrics1.averagePrice - metrics2.averagePrice;
  const discountDifference = metrics1.averageDiscount - metrics2.averageDiscount;

  const competitiveness = {
    price: Math.abs(priceDifference) < 10 
      ? 'similar' 
      : priceDifference < 0 ? 'lower' : 'higher',
    discount: Math.abs(discountDifference) < 5 
      ? 'similar' 
      : discountDifference > 0 ? 'better' : 'worse',
    overall: calculateCompetitivenessScore(metrics1, metrics2),
  };

  return {
    brand1: metrics1,
    brand2: metrics2,
    priceDifference,
    discountDifference,
    competitiveness,
  };
}

function calculateCompetitivenessScore(metrics1: BrandMetrics, metrics2: BrandMetrics): number {
  // Higher score means brand1 is more competitive
  const priceScore = (metrics2.averagePrice - metrics1.averagePrice) / metrics2.averagePrice * 50;
  const discountScore = (metrics1.averageDiscount - metrics2.averageDiscount) * 2;
  const salesScore = (metrics1.totalSales - metrics2.totalSales) / (metrics1.totalSales + metrics2.totalSales) * 30;

  return Math.round(priceScore + discountScore + salesScore);
} 