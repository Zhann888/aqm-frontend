import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ForecastSection.css";

// Шкала по ВОЗ
const getAQIDescription = (value) => {
  if (value === null || value === undefined) return "Нет данных";
  if (value <= 10) return "Отлично";
  if (value <= 25) return "Хорошо";
  if (value <= 50) return "Умеренно";
  if (value <= 75) return "Вредно";
  if (value <= 100) return "Очень вредно";
  return "Опасно";
};

const getColor = (value) => {
  if (value === null || value === undefined || value === 0) return "#ccc";
  if (value <= 10) return "#4caf50";
  if (value <= 25) return "#8bc34a";
  if (value <= 50) return "#ffc107";
  if (value <= 75) return "#ff9800";
  if (value <= 100) return "#f44336";
  return "#7e0023";
};

const districts = [
  "Алатауский",
  "Алмалинский",
  "Ауэзовский",
  "Бостандыкский",
  "Медеуский",
  "Наурызбайский",
  "Турксибский",
  "Жетысуский"
];

const ForecastSection = () => {
  const [forecast, setForecast] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);

  useEffect(() => {
    const fetchForecast = async () => {
      const days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date;
      });

      const results = await Promise.all(
        days.map(async (date) => {
          const dateStr = date.toISOString().split("T")[0];
          try {
            const res = await axios.post("http://localhost:5000/api/forecast", {
              date: dateStr,
              district: selectedDistrict,
            });
            return {
              day: date.toLocaleDateString("ru-RU", { weekday: "short" }),
              date: date.toLocaleDateString("ru-RU", { day: "2-digit", month: "short" }),
              value: res.data.pm25 ?? null,
            };
          } catch (err) {
            return {
              day: date.toLocaleDateString("ru-RU", { weekday: "short" }),
              date: date.toLocaleDateString("ru-RU", { day: "2-digit", month: "short" }),
              value: null,
            };
          }
        })
      );

      setForecast(results);
    };

    fetchForecast();
  }, [selectedDistrict]);

  return (
    <section className="forecast-section">
      <div className="district-select">
        <label>Выбрать район: </label>
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <div className="forecast-header">
        <span className="forecast-icon">📅</span>
        <h2>Прогноз PM2.5 на неделю</h2>
      </div>

      <div className="forecast-cards">
        {forecast.map((f, i) => (
          <div key={i} className="forecast-card">
            <div className="day">{f.day}</div>
            <div className="date">{f.date}</div>
            <div className="value">{f.value !== null ? f.value : "-"}</div>
            <div className="desc" style={{ color: getColor(f.value) }}>
              {getAQIDescription(f.value)}
            </div>
            <div
              className="color-bar"
              style={{ backgroundColor: getColor(f.value) }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForecastSection;
