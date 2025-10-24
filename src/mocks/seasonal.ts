export const MOCK_SEASONAL = {
  current_season: 'Spring 2024',
  seasonal_events: [
    {
      id: 'SPRING_SALE_2024',
      name: 'Spring Sale',
      startDate: '2024-03-20T00:00:00Z',
      endDate: '2024-04-20T00:00:00Z',
      discountPercentage: 25,
      categories: ['fashion', 'home', 'sports'],
      featuredProducts: ['B07NPRV2WX', 'B08RCNWTQ1'],
      bannerImage: 'https://example.com/spring-sale.jpg'
    },
    {
      id: 'MOTHERS_DAY_2024',
      name: "Mother's Day Specials",
      startDate: '2024-05-01T00:00:00Z',
      endDate: '2024-05-12T00:00:00Z',
      discountPercentage: 30,
      categories: ['beauty', 'fashion', 'home'],
      featuredProducts: ['B084DXYN2H', 'B08XMZM5BL']
    }
  ],
  upcoming_events: [
    {
      id: 'SUMMER_SALE_2024',
      name: 'Summer Kickoff',
      startDate: '2024-06-21T00:00:00Z',
      endDate: '2024-07-21T00:00:00Z',
      previewProducts: ['B092HQR26D']
    }
  ]
}; 