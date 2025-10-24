# Amazon Price Comparison

A modern Next.js application that helps users find the best deals on Amazon products, compare prices across different marketplaces, and track price history with beautiful visualizations.

## 🚀 Features

- 🔍 **Smart Product Search** - Auto-suggestions and advanced filtering
- 📊 **Price History Tracking** - Interactive charts showing price trends over time
- 🏷️ **Deal Alerts** - Get notified when prices drop on your favorite products
- 🛍️ **Category Browsing** - Explore products by categories and subcategories
- ⭐ **Prime Deals Section** - Exclusive deals for Amazon Prime members
- 🌍 **Multi-Market Support** - Compare prices across different Amazon marketplaces
- 🔄 **Product Comparison** - Side-by-side comparison of similar products
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful interface built with Tailwind CSS and React
- ⚡ **Fast Performance** - Server-side rendering and optimized caching

## 🛠️ Tech Stack

- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js + react-chartjs-2
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── common/      # Shared components (SEO, Loading, etc.)
│   ├── home/        # Homepage components
│   ├── product/     # Product-related components
│   ├── category/    # Category browsing components
│   ├── layout/      # Layout components (Navbar, Footer)
│   └── ...
├── pages/           # Next.js pages and API routes
│   ├── api/         # API endpoints
│   ├── category/    # Category pages
│   ├── product/     # Product detail pages
│   └── ...
├── services/        # External API integrations
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
├── mocks/           # Mock data for development
├── context/         # React context providers
├── hooks/           # Custom React hooks
└── styles/          # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Digitalcloud-Ali/PriceComparison.git
cd PriceComparison
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment variables file:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Amazon Product Advertising API (optional)
AMAZON_US_ACCESS_KEY=your_access_key_here
AMAZON_US_SECRET_KEY=your_secret_key_here
AMAZON_ASSOCIATE_TAG=your_associate_tag_here

# Add other API keys as needed
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `AMAZON_US_ACCESS_KEY` | Amazon Product Advertising API Access Key | Optional |
| `AMAZON_US_SECRET_KEY` | Amazon Product Advertising API Secret Key | Optional |
| `AMAZON_ASSOCIATE_TAG` | Amazon Associate Tag for affiliate links | Optional |

**Note**: The app works with mock data by default. API keys are only needed for live Amazon data integration.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Digitalcloud-Ali/PriceComparison)

Or manually:

```bash
vercel
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔒 Security

- Never commit `.env.local` or any files containing sensitive API keys
- All sensitive credentials should be stored in environment variables
- The `.gitignore` file is configured to exclude sensitive files

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and TypeScript