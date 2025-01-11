## **KoinX Backend Internship Assignment**

This project is a backend application built with **Node.js** and **MongoDB** for handling cryptocurrency data. The assignment involves fetching cryptocurrency details periodically, exposing APIs to retrieve statistics, and calculating price deviations.

---

## **Features**

1. **Background Job:**
   - Automatically fetches price, market cap, and 24-hour price change for Bitcoin, Matic, and Ethereum every 2 hours using the CoinGecko API.
   - Data is stored in a MongoDB database.

2. **API Endpoints:**
   - **GET `/stats`**: Returns the latest data for the requested cryptocurrency.
   - **GET `/stats/deviation`**: Returns the standard deviation of the last 100 prices for the requested cryptocurrency.

3. **Deployment:**
   - Deployed on **Render** with automated Cron Job for periodic data fetching.

4. **Best Practices:**
   - Clean code with error handling and clear logging.
   - Secure environment variable management using `dotenv`.

---

## **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/zaheer037/KoinX.git
   cd koinx-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_uri>
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Test the APIs using tools like Postman or `curl`.

---

## **APIs**

### **1. `/stats`**
Fetch the latest data for a cryptocurrency.

- **Method**: `GET`
- **Query Params**:  
  `coin` (string) - One of `bitcoin`, `matic-network`, or `ethereum`.

- **Example Request**:
  ```bash
  curl "http://localhost:5000/stats?coin=bitcoin"
  ```

- **Example Response**:
  ```json
  {
    "price": 40000,
    "marketCap": 800000000,
    "24hChange": 3.4
  }
  ```

---

### **2. `/stats/deviation`**
Calculate the standard deviation of the last 100 prices for a cryptocurrency.

- **Method**: `GET`
- **Query Params**:  
  `coin` (string) - One of `bitcoin`, `matic-network`, or `ethereum`.

- **Example Request**:
  ```bash
  curl "http://localhost:5000/stats/deviation?coin=bitcoin"
  ```

- **Example Response**:
  ```json
  {
    "deviation": 4082.48
  }
  ```

---

## **How It Works**

1. **Background Job**:
   - A job scheduled using Render’s Cron Jobs or `node-schedule` runs every 2 hours.
   - Fetches cryptocurrency data via CoinGecko API.
   - Saves the data in MongoDB for later use.

2. **Standard Deviation Calculation**:
   - Uses historical price data from the database.
   - Calculates deviation using the formula:  
     ![Standard Deviation Formula](https://latex.codecogs.com/svg.latex?\sigma=\sqrt{\frac{1}{N}\sum_{i=1}^N(x_i-\mu)^2})

---

## **Deployment**

- **Live URL**: [Render Link](https://koinx-r0ej.onrender.com)

---

## **Technologies Used**

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Scheduler**: node-schedule
- **API Integration**: CoinGecko API
- **Deployment**: Render

---

## **Folder Structure**

```
project/
├── config/
│   └── db.js               # MongoDB connection
├── jobs/
│   └── fetchCryptoData.js  # Background job to fetch data
├── models/
│   └── CryptoData.js       # Mongoose schema for crypto data
├── routes/
│   └── stats.js            # Routes for APIs
├── .env                    # Environment variables
├── server.js               # Main server file
└── package.json            # Project metadata
```

---

## **License**

This project is licensed under the MIT License.

---
