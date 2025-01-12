import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const CoinCard = ({ name, symbol, price, chartData, change24h, icon }) => {
  return (
    <div className="coin-card p-3 border rounded">
      <div className="d-flex align-items-center mb-1">
        {/* Coin Icon */}
        {icon && (
          <img
            src={icon}
            alt={`${name} icon`}
            width="24"
            height="24"
            className="me-2"
          />
        )}

        {/* Coin Name and Symbol */}
        <h5 className="mb-0">
          {name} ({symbol.toUpperCase()})
        </h5>
      </div>

      {/* Price */}
      <p className="mb-1 text-primary fw-bold">${price}</p>

      {/* Percentage Change */}
      <p
        className={`mb-1 fw-bold ${
          change24h > 0 ? "text-success" : "text-danger"
        }`}
      >
        {change24h > 0 ? "+" : ""}
        {change24h}%
      </p>

      {/* Small Sparkline Chart */}
      <div className="chart-placeholder">
        <ResponsiveContainer width="100%" height={80}>
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={change24h > 0 ? "#28a745" : "#dc3545"} // Green for positive, red for negative
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CoinCard;
