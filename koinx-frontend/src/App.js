import "./App.css";
//import react,{useState} from "react"
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import RightPanel from "./components/RightPanel/RightPanel";
import TabsNavigation from "./components/Tabs/TabsNavigation";
import LastSection from "./components/LastSection/LastSection";
const App = () => {
  
  const coinData = {
    name: "Bitcoin",
    symbol: "btc",
    rank: 1,
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    priceUsd: 46953.04,
    priceInr: 3942343,
    change24h: 2.51,
  };

  const trendingCoins = [
    { name: "Ethereum", symbol: "eth", change: 8.21 },
    { name: "Bitcoin", symbol: "btc", change: 5.62 },
    { name: "Polygon", symbol: "matic", change: 4.32 },
  ];

  return (
    <div className="container-fluid">
      <Header />
      <div className="container-fluid">
        <div
          className="container mt-4"
          style={{ display: "flex", gap: "20px" }}
        >
          <HeroSection coinData={coinData} />
          <RightPanel trendingCoins={trendingCoins} />
        </div>
      </div>
      <TabsNavigation/>
      <LastSection/>
    </div>
  );
};

export default App;
