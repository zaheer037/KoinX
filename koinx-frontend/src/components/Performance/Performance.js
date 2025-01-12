import React from 'react';

const Performance = () => {
  return (
    <section className="container my-4">
      <h4>Performance</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <p>Today's Low: <strong>₹16,3032.22</strong></p>
            <p>Today's High: <strong>₹48,3032.22</strong></p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <p>24h Volume: <strong>₹23,492,002</strong></p>
            <p>Market Cap: <strong>₹32,392,002</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
