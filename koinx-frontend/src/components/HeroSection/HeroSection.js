import React from "react";
import "./hero.css"; // Import the CSS file for styles

const HeroSection = ({ coinData }) => {
  return (
    <section className="hero-section">
      {/* Left Side: Coin Details */}
      <div className="coin-details">
        <div>
          <h1>
            <img src={coinData.image} alt="coin" width="40" className="me-2" />
            {coinData.name} <span className="text-muted">{coinData.symbol.toUpperCase()}</span>
          </h1>
          <p className="badge bg-primary">Rank #{coinData.rank}</p>
        </div>

        {/* Price Details */}
        <div className="price-details mt-4">
          <h2 className="me-3">${coinData.priceUsd}</h2>
          <h2 className="text-muted">₹{coinData.priceInr}</h2>
          <span className={`ms-3 badge ${coinData.change24h > 0 ? "bg-success" : "bg-danger"}`}>
            {coinData.change24h > 0 ? "+" : ""}
            {coinData.change24h}%
          </span>
        </div>

        {/* TradingView Chart */}
        <div className="chart-container mt-4">
          <iframe
            src={`https://s.tradingview.com/embed-widget/advanced-chart/?symbol=${coinData.symbol.toUpperCase()}USD`}
            width="100%"
            height="400"
            frameBorder="0"
            title="Chart"
          ></iframe>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
