import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

const LastSection = () => {
  const [youMayAlsoLike, setYouMayAlsoLike] = useState([]);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        );
        const data = await response.json();

        // Transform data for "You May Also Like" and "Trending Coins"
        const transformedData = data.map((coin) => ({
          name: coin.name,
          symbol: coin.symbol,
          price: coin.current_price.toLocaleString(), // Format the price
          change24h: coin.price_change_percentage_24h.toFixed(2), // Format to 2 decimal places
          chartData: coin.sparkline_in_7d.price.map((value) => ({ value })), // Sparkline chart data
          icon: coin.image, // Coin logo
        }));

        // Split data into two sections
        setYouMayAlsoLike(transformedData.slice(0, 5));
        setTrendingCoins(transformedData.slice(5, 10));
      } catch (error) {
        console.error("Error fetching coin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, []);

  if (loading) {
    return <p>Loading coins...</p>;
  }

  return (
    <section className="container my-5">
      {/* You May Also Like */}
      <div>
        <h3>You May Also Like</h3>
        <div className="d-flex flex-wrap gap-3">
          {youMayAlsoLike.map((coin, index) => (
            <CoinCard
              key={index}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.price}
              change24h={coin.change24h}
              chartData={coin.chartData}
              icon={coin.icon}
            />
          ))}
        </div>
      </div>

      {/* Trending Coins */}
      <div className="mt-5">
        <h3>Trending Coins</h3>
        <div className="d-flex flex-wrap gap-3">
          {trendingCoins.map((coin, index) => (
            <CoinCard
              key={index}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.price}
              change24h={coin.change24h}
              chartData={coin.chartData}
              icon={coin.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastSection;
