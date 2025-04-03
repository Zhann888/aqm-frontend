import React from "react";
import "./MapLegend.css";

const MapLegend = () => {
  return (
    <div className="map-legend">
      <h4>Уровень PM2.5</h4>
      <ul>
        <li><span className="dot good"></span> Хорошо (0–12)</li>
        <li><span className="dot moderate"></span> Умеренно (13–35)</li>
        <li><span className="dot unhealthy"></span> Вредно (36+)</li>
      </ul>
    </div>
  );
};

export default MapLegend;
