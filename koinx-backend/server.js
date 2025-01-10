require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const schedule = require("node-schedule");
const fetchCryptoData = require("./jobs/fetchCryptoData");
const statsRoute = require("./routes/stats");
const connectDB = require("./config/db");

// Initialize the Express app
const app = express();

// Connect to MongoDB
connectDB();

// Schedule the background job to fetch data every 2 hours
schedule.scheduleJob("0 */2 * * *", async () => {
    console.log("Running scheduled job to fetch cryptocurrency data...");
    await fetchCryptoData();
});

// Root route
app.get("/", (req, res) => {
    res.send("KoinX Backend Assignment is running!");
});

// /stats route
app.use("/stats", statsRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

// Debug logs
console.log("Server initialized. Waiting for requests...");
