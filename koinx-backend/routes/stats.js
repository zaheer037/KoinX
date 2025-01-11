const express = require("express");
const router = express.Router();
const CryptoData = require("../models/CryptoData");
const fetchCryptoData = require("../jobs/fetchCryptoData");

router.get("/fetch", async (req, res) => {
    try {
        console.log("Manual fetch initiated...");
        await fetchCryptoData();
        res.send("Data fetch complete.");
    } catch (err) {
        console.error("Error during manual fetch:", err);
        res.status(500).send("Error during data fetch.");
    }
});

router.get("/", async (req, res) => {
    const { coin } = req.query;
    console.log("Query parameter:", coin);

    try {
        const latestData = await CryptoData.findOne({ coin }).sort({ timestamp: -1 }).exec();
        console.log("Query result:", latestData);

        if (!latestData) {
            return res.status(404).json({ error: "No data found for the specified coin." });
        }

        return res.json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            "24hChange": latestData.change24h,
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Server error" });
    }
});

router.get("/deviation", async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: "Coin query parameter is required." });
    }

    try {
        // Fetch the last 100 records for the specified coin
        const records = await CryptoData.find({ coin })
            .sort({ timestamp: -1 })
            .limit(100)
            .exec();

        if (records.length === 0) {
            return res.status(404).json({ error: "No data found for the specified coin." });
        }

        // Extract prices
        const prices = records.map(record => record.price);

        // Calculate mean
        const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;

        // Calculate variance
        const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;

        // Calculate standard deviation
        const standardDeviation = Math.sqrt(variance);

        return res.json({ deviation: parseFloat(standardDeviation.toFixed(2)) });
    } catch (error) {
        console.error("Error in /deviation API:", error.message);
        return res.status(500).json({ error: "Server error" });
    }
});


module.exports = router;
