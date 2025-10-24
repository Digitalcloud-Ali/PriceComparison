export const MOCK_PRICE_ANALYTICS = {
  'B0CHX3QBCH': { // iPhone 15 Pro Max
    historical_trends: {
      lowest_ever: {
        price: 1099.99,
        date: '2024-01-15',
        event: 'New Year Sale'
      },
      highest_ever: {
        price: 1299.99,
        date: '2023-09-22',
        event: 'Launch Price'
      },
      average_price: 1199.99,
      price_stability: 0.85, // 1 is most stable
      seasonal_patterns: [
        {
          season: 'Black Friday',
          averageDiscount: 15,
          predictedPrice: 1099.99
        },
        {
          season: 'Prime Day',
          averageDiscount: 12,
          predictedPrice: 1149.99
        }
      ]
    },
    price_predictions: {
      next_30_days: {
        likely_lowest: 1149.99,
        likely_highest: 1249.99,
        best_time_to_buy: '2024-03-15',
        confidence: 0.85
      },
      price_trend: 'falling',
      factors: [
        'New model release approaching',
        'Competitive pressure',
        'Seasonal trends'
      ]
    }
  }
}; 