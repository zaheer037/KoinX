import React, { useState } from "react";
import Performance from "../Performance/Performance";
import Sentiment from "../Sentiment/Sentiment";
import Tokenomics from "../TakeEconomics/Tokenomics";
import Team from "../Team/Team";
import "./tabs.css"
const TabsNavigation = () => {
  const [activeTab, setActiveTab] = useState("performance");

  const renderTabContent = () => {
    switch (activeTab) {
      case "performance":
        return (
          <div className="tab-content">
            <Performance/>
          </div>
        );
      case "metrics":
        return (
          <div className="tab-content">
            <h3>Metrics</h3>
            <p>Comprehensive data and metrics for the selected cryptocurrency.</p>
          </div>
        );
      case "sentiment":
        return (
          <div className="tab-content">
            <Sentiment/>
          </div>
        );
      case "team":
        return (
          <div className="tab-content">
            <Team/>
          </div>
        );
      case "tokenomics":
        return (
          <div className="tab-content">
            <Tokenomics/>
          </div>
        );
      default:
        return <div>Select a tab to view its content.</div>;
    }
  };

  return (
    <section className="container my-4">
      {/* Tabs Navigation */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "performance" ? "active" : ""}`}
            onClick={() => setActiveTab("performance")}
          >
            Performance
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "metrics" ? "active" : ""}`}
            onClick={() => setActiveTab("metrics")}
          >
            Metrics
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "sentiment" ? "active" : ""}`}
            onClick={() => setActiveTab("sentiment")}
          >
            Sentiment
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "team" ? "active" : ""}`}
            onClick={() => setActiveTab("team")}
          >
            Team
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "tokenomics" ? "active" : ""}`}
            onClick={() => setActiveTab("tokenomics")}
          >
            Tokenomics
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="mt-4">{renderTabContent()}</div>
    </section>
  );
};

export default TabsNavigation;
