interface TaxRate {
  state: string;
  rate: number;
}

const US_TAX_RATES: Record<string, TaxRate> = {
  'AL': { state: 'Alabama', rate: 0.04 },
  'AK': { state: 'Alaska', rate: 0.00 },
  'AZ': { state: 'Arizona', rate: 0.056 },
  'AR': { state: 'Arkansas', rate: 0.065 },
  'CA': { state: 'California', rate: 0.0725 },
  // Add more states...
};

export function calculateTax(price: number, stateCode: string): number {
  const taxRate = US_TAX_RATES[stateCode]?.rate || 0;
  return price * taxRate;
}

export function calculateTotalWithTax(price: number, stateCode: string): number {
  return price + calculateTax(price, stateCode);
}

export function formatTaxRate(stateCode: string): string {
  const rate = US_TAX_RATES[stateCode]?.rate || 0;
  return `${(rate * 100).toFixed(2)}%`;
} 