export const MOCK_REVIEWS = {
  'B0CHX3QBCH': { // iPhone 15 Pro Max
    summary: {
      averageRating: 4.8,
      totalReviews: 2345,
      ratingDistribution: {
        5: 1800,
        4: 400,
        3: 100,
        2: 30,
        1: 15
      },
      highlightedFeatures: {
        'Camera Quality': 4.9,
        'Battery Life': 4.7,
        'Build Quality': 4.8,
        'Value for Money': 4.2
      }
    },
    reviews: [
      {
        id: 'REV1',
        rating: 5,
        title: 'Best iPhone Ever',
        content: 'Amazing camera and battery life. The titanium design feels premium and the USB-C port is a welcome addition.',
        author: 'John D.',
        date: '2024-02-20',
        verified: true,
        helpful: 156,
        images: [
          'https://m.media-amazon.com/images/I/71user-photo1.jpg'
        ],
        pros: [
          'Camera quality',
          'Battery life',
          'Premium build'
        ],
        cons: [
          'High price',
          'Heavy'
        ]
      }
    ]
  }
}; 