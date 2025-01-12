import React, { useEffect, useState } from "react";
import axios from "axios";

const RightPanel = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  // Fetch trending coins data
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const coins = response.data.coins.slice(0, 3).map((coin) => ({
          name: coin.item.name,
          symbol: coin.item.symbol,
          logo: coin.item.large,
          change24h: coin.item.price_btc.toFixed(4), // Adjusted to show rounded BTC changes
        }));
        setTrendingCoins(coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };
    fetchTrendingCoins();
  }, []);
  return (
    <aside className="mt-4">
      {/* Get Started */}
      <div className="bg-primary text-white p-4 rounded mb-4">
        <h3>Get Started with KoinX for FREE</h3>
        <p>
          With our range of features, you can equip yourself to manage your
          crypto taxes easily.
        </p>
        <button className="btn btn-light">Get Started for FREE</button>
      </div>

      {/* Trending Coins */}
      <div className="trending-coins-section">
        <h3 className="text-md font-bold mb-3">Trending Coins (24h)</h3>
        <ul className="list-group">
          {trendingCoins.map((coin, index) => (
            <li
              key={index}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <img
                  src={coin.logo}
                  alt={coin.name}
                  className="coin-logo me-2"
                  style={{ width: "24px", height: "24px" }}
                />
                <span className="coin-name">
                  {coin.name} ({coin.symbol.toUpperCase()})
                </span>
              </div>
              <span
                className={`change24h ${
                  coin.change24h >= 0 ? "text-success" : "text-danger"
                }`}
              >
                {coin.change24h >= 0 ? "▲" : "▼"} {Math.abs(coin.change24h)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightPanel;
