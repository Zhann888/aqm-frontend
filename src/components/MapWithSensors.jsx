import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

import "./MapWithSensors.css";
import MapLegend from "./MapLegend";


const getColorByPM25 = (value) => {
  if (value <= 12) return "green";
  if (value <= 35) return "orange";
  return "red";
};

const createCustomIcon = (color) =>
    L.divIcon({
      className: "",
      html: `<div class="pulsing-marker" style="--color: ${color}"></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  

export default function MapWithSensors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/air-quality/latest")

      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Ошибка загрузки данных:", err));
  }, []);

  return (
    <MapContainer
      center={[43.238949, 76.889709]}
      zoom={12}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((point) => (
        <Marker
          key={point.device_id}
          position={[point.latitude, point.longitude]}
          icon={createCustomIcon(getColorByPM25(point.value))}
        >
          <Popup>
            <strong>{point.station_name}</strong><br />
            PM2.5: {point.value} µg/m³<br />
            Обновлено: {new Date(point.updated_at).toLocaleString()}
          </Popup>
        </Marker>
      ))}

      <MapLegend />

    </MapContainer>
  );
}
