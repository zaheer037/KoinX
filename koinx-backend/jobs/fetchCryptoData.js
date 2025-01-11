const axios = require("axios");
const moment = require("moment-timezone");
const CryptoData = require("../models/CryptoData");

const fetchCryptoData = async () => {
    const coins = ["bitcoin", "matic-network", "ethereum"];
    try {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price",
            {
                params: {
                    ids: coins.join(","),
                    vs_currencies: "usd",
                    include_market_cap: true,
                    include_24hr_change: true,
                },
            }
        );

        const data = response.data;

        for (const coin of coins) {
            const cryptoRecord = new CryptoData({
                coin,
                price: data[coin].usd,
                marketCap: data[coin].usd_market_cap,
                change24h: data[coin].usd_24h_change,
            });
            await cryptoRecord.save();
            console.log(`Data for ${coin} saved successfully.`);
            console.log(`Fetched data for ${coin}:`, data[coin]);
        }
        console.log("Scheduled job executed at:", moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss"));
    } catch (err) {
        console.error("Error fetching crypto data:", err.message);
    }
};

module.exports = fetchCryptoData;
