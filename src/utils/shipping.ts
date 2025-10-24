interface ShippingZone {
  name: string;
  states: string[];
  baseRate: number;
  freeThreshold: number;
}

const US_SHIPPING_ZONES: ShippingZone[] = [
  {
    name: 'Continental US',
    states: ['AL', 'AZ', 'AR', /* ... */],
    baseRate: 5.99,
    freeThreshold: 25,
  },
  {
    name: 'Alaska & Hawaii',
    states: ['AK', 'HI'],
    baseRate: 12.99,
    freeThreshold: 49,
  },
];

export function calculateShipping(subtotal: number, stateCode: string): number {
  const zone = US_SHIPPING_ZONES.find(z => z.states.includes(stateCode));
  if (!zone) return 0;

  if (subtotal >= zone.freeThreshold) {
    return 0;
  }

  return zone.baseRate;
}

export function getFreeShippingThreshold(stateCode: string): number {
  const zone = US_SHIPPING_ZONES.find(z => z.states.includes(stateCode));
  return zone?.freeThreshold || 0;
}

export function getEstimatedDelivery(stateCode: string): string {
  const zone = US_SHIPPING_ZONES.find(z => z.states.includes(stateCode));
  if (!zone) return '';

  const today = new Date();
  const deliveryDays = zone.name === 'Continental US' ? 3 : 5;
  const deliveryDate = new Date(today.setDate(today.getDate() + deliveryDays));

  return deliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
} 