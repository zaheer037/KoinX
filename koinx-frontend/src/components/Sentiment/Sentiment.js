import React from "react";
import "./Sentiment.css";

const Sentiment = () => {
  return (
    <div className="sentiment">
      <h2 className="sentiment-heading">Sentiment</h2>

      <div className="key-events">
        <h3 className="section-title">Key Events</h3>
        <div className="key-event-cards">
          <div className="key-event-card blue-card">
            <div className="icon-container">
              <i className="fas fa-file-alt"></i>
            </div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Dui vel quis dignissim mattis enim tincidunt. Ac phasellus risus
              est faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum.
            </p>
          </div>
          <div className="key-event-card green-card">
            <div className="icon-container">
              <i className="fas fa-leaf"></i>
            </div>
            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
            <p>
              Dui vel quis dignissim mattis enim tincidunt. Ac phasellus risus
              est faucibus metus quis. Amet sapien quam viverra adipiscing
              condimentum.
            </p>
          </div>
        </div>
      </div>

      <div className="analyst-estimates">
        <h3 className="section-title">Analyst Estimates</h3>
        <div className="estimates-content">
          <div className="estimate-percentage">
            <div className="percentage-circle">
              <span>76%</span>
            </div>
            <p>Buy</p>
          </div>
          <div className="estimate-bars">
            <div className="bar buy-bar">
              <span>Buy</span>
              <div className="progress" style={{ width: "76%" }}></div>
              <span>76%</span>
            </div>
            <div className="bar hold-bar">
              <span>Hold</span>
              <div className="progress" style={{ width: "8%" }}></div>
              <span>8%</span>
            </div>
            <div className="bar sell-bar">
              <span>Sell</span>
              <div className="progress" style={{ width: "16%" }}></div>
              <span>16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
