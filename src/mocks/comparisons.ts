export const MOCK_COMPARISONS = {
  smartphones: {
    'B0CHX3QBCH': { // iPhone 15 Pro Max
      mainCompetitors: ['B0CGKZ4Y2P', 'B0CGKY14JK'], // Samsung S24 Ultra, Pixel 8 Pro
      advantages: [
        'Better camera system',
        'Faster processor',
        'Premium build quality'
      ],
      disadvantages: [
        'Higher price',
        'Limited customization',
        'No expandable storage'
      ],
      priceCompetitiveness: 0.85, // 1 is most competitive
      valueScore: 8.5,
      marketPosition: 'premium'
    }
  },
  gaming_consoles: {
    'B09DGH6CLV': { // PS5
      mainCompetitors: ['XBOX_X', 'SWITCH_OLED'],
      advantages: [
        'Better exclusive games',
        'Faster loading times',
        'Better graphics'
      ],
      disadvantages: [
        'Larger size',
        'Higher power consumption',
        'Limited backward compatibility'
      ],
      priceCompetitiveness: 0.9,
      valueScore: 9.0,
      marketPosition: 'high-end'
    }
  }
}; 