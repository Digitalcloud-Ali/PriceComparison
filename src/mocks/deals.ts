export const MOCK_DEALS = {
  flash_deals: [
    {
      id: 'FLASH_1',
      productId: 'B0CHX3QBCH', // iPhone 15 Pro
      discount: 20,
      endsAt: '2024-03-01T00:00:00Z',
      type: 'FLASH_SALE'
    },
    {
      id: 'FLASH_2',
      productId: 'B09DGH6CLV', // PS5
      discount: 15,
      endsAt: '2024-03-02T00:00:00Z',
      type: 'FLASH_SALE'
    }
  ],
  promotions: [
    {
      id: 'PROMO_1',
      title: 'Tech Week',
      description: 'Save up to 30% on Electronics',
      category: 'electronics',
      discount: 30,
      validUntil: '2024-03-15T00:00:00Z'
    },
    {
      id: 'PROMO_2',
      title: 'Fashion Sale',
      description: 'Extra 25% off on Fashion items',
      category: 'fashion',
      discount: 25,
      validUntil: '2024-03-10T00:00:00Z'
    }
  ],
  bundles: [
    {
      id: 'BUNDLE_1',
      title: 'Gaming Bundle',
      products: ['B09DGH6CLV', 'GAME1', 'GAME2'],
      bundlePrice: 599.99,
      originalPrice: 749.97,
      description: 'PS5 + 2 Games Bundle'
    }
  ]
}; 