import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./Tokenomics.css";

const data = [
  { name: "Crowdsale investors", value: 80, color: "#007bff" },
  { name: "Foundation", value: 20, color: "#ffc107" },
];

const Tokenomics = () => {
  return (
    <div className="tokenomics">
      <h2 className="tokenomics-heading">Tokenomics</h2>
      <h3 className="tokenomics-subheading">Initial Distribution</h3>
      <div className="tokenomics-content">
        <div className="tokenomics-chart">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="tokenomics-legend">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.name}: {item.value}%
            </div>
          ))}
        </div>
      </div>
      <p className="tokenomics-description">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam malesuada bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
        urna felis augue.
      </p>
    </div>
  );
};

export default Tokenomics;
