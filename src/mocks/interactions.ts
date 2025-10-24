export const MOCK_USER_INTERACTIONS = {
  product_views: {
    'B0CHX3QBCH': { // iPhone 15 Pro
      last24h: 1547,
      last7d: 8934,
      last30d: 34567,
      trend: 'rising',
      peakHours: [14, 15, 19, 20] // Hours with most views
    }
  },
  wishlists: {
    'B0CHX3QBCH': {
      count: 2345,
      addedLast24h: 156,
      conversionRate: 0.15 // 15% of wishlist adds convert to purchase
    }
  },
  search_trends: {
    popular_terms: [
      { term: 'iphone 15', count: 15678, trend: 'rising' },
      { term: 'ps5', count: 12456, trend: 'stable' },
      { term: 'airpods', count: 9876, trend: 'falling' }
    ],
    related_searches: {
      'iphone': ['iphone 15', 'iphone case', 'iphone charger'],
      'ps5': ['ps5 games', 'ps5 controller', 'ps5 bundle']
    }
  },
  cart_analytics: {
    'B0CHX3QBCH': {
      addToCartRate: 0.12,
      abandonmentRate: 0.23,
      averageTimeToConversion: '2.5 days',
      commonlyBoughtWith: ['ACC1', 'ACC2']
    }
  }
}; 