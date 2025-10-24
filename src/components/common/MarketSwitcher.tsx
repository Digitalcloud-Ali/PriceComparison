import React from 'react';
import { MARKETS, MarketRegion } from '@/config/markets';
import { getCurrentMarket } from '@/utils/market';

export default function MarketSwitcher() {
  const [currentMarket, setCurrentMarket] = React.useState<MarketRegion>(getCurrentMarket());

  const handleMarketChange = (market: MarketRegion) => {
    localStorage.setItem('selectedMarket', market);
    setCurrentMarket(market);
    window.location.reload(); // Reload to apply market changes
  };

  return (
    <div className="flex items-center space-x-2">
      <select
        value={currentMarket}
        onChange={(e) => handleMarketChange(e.target.value as MarketRegion)}
        className="form-select rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        {Object.entries(MARKETS).map(([key, market]) => (
          <option key={key} value={key}>
            {market.name}
          </option>
        ))}
      </select>
    </div>
  );
} 