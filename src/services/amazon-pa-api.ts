// This is a mock implementation for development
// TODO: Implement real Amazon PA-API integration

export async function searchAmazonProducts(query: string) {
  // Return mock data for development
  return getMockProducts();
}

function getMockProducts() {
  return [
    {
      ASIN: '1',
      ItemInfo: {
        Title: { DisplayValue: 'Apple iPhone 15 Pro Max (256GB) - Natural Titanium' }
      },
      Offers: {
        Listings: [{
          Price: { Amount: 1199.99 },
          DeliveryInfo: { IsPrimeEligible: true }
        }]
      },
      Images: {
        Primary: {
          Large: { URL: 'https://m.media-amazon.com/images/I/81dT7CUY6GL._AC_UY218_.jpg' }
        }
      }
    },
    // Add more mock products...
  ];
} 