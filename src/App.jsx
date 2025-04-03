import React, { useEffect, useState } from "react";
import ModalComplaint from "./components/ModalComplaint";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import L from "leaflet";

import AdminPanel from "./components/AdminPanel";
import AdminLogin from "./components/AdminLogin";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ForecastSection from "./components/ForecastSection";

import AiChatWidget from "./components/AiChatWidget";
import PMCharts from "./components/PMcharts";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const mapElement = document.getElementById("map");
    if (!mapElement || mapElement._leaflet_id) return;
  
    const map = L.map("map").setView([43.238949, 76.889709], 12);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);
  
    L.marker([43.238949, 76.889709])
      .addTo(map)
      .bindPopup("Центр Алматы: AQI 145 (Вредно)");
  
    L.circle([43.238949, 76.889709], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 2000
    }).addTo(map).bindPopup("Высокий уровень загрязнения");
  }, []);
  
  

  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route
        path="/"
        element={
          <>
          <Header onOpenModal={() => setIsModalOpen(true)} />

          <main>
        <div className="content-container" id="home">
          <div className="map-container">
            <div id="map"></div>
          </div>
          <div className="charts-container">
            <h2>Выбросы в атмосферу</h2>
            <PMCharts/>
          </div>
        </div>

        <ForecastSection />


        <section id="info" className="guide-section">
          <div className="guide-container">
            <div className="guide-text">
              <h2>Почему важно следить за качеством воздуха?</h2>
              <p>
                Качество воздуха – один из ключевых факторов, влияющих на здоровье и комфорт жизни в городе.
                Алматы, находясь в окружении гор, подвержен накоплению вредных веществ в атмосфере, особенно в зимний период.
                Основные источники загрязнения – транспорт, промышленность и бытовое отопление.
              </p>
            </div>
            <hr className="guide-divider" />
            <div className="guide-content">
              <div className="pollutants">
                <h3>Основные загрязнители воздуха</h3>
                <ul>
                  <li><strong>PM2.5, PM10</strong> – мельчайшие частицы пыли и сажи.</li>
                  <li><strong>CO</strong> – угарный газ.</li>
                  <li><strong>CO₂</strong> – углекислый газ.</li>
                  <li><strong>NO₂</strong> – оксиды азота.</li>
                  <li><strong>SO₂</strong> – диоксид серы.</li>
                  <li><strong>O₃</strong> – озон.</li>
                  <li><strong>NH₃</strong> – аммиак.</li>
                  <li><strong>H₂S</strong> – сероводород.</li>
                </ul>
              </div>
              <div className="guide-image">
                <img src="/Images/air-pollution.png" alt="Загрязнение воздуха" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-survey-section">
          <div className="about-survey-container">
            <div className="about-text">
              <h2>О проекте</h2>
              <p>
                Наш сервис помогает жителям Алматы следить за качеством воздуха в реальном времени.
                Мы собираем данные о загрязняющих веществах и погодных условиях, отображаем их на карте
                и предоставляем полезную аналитику.
              </p>
              <p className="about-subtext">
                В рамках опроса среди жителей города Алматы, мы выявили актуальность веб-сайта
                для мониторинга качества воздуха.
              </p>
            </div>
            <div className="survey-content">
              <div className="survey-chart">
                <h3>Как вы узнаёте о качестве воздуха в Алматы?</h3>
                <img src="/Images/grafik.jpg" alt="График опроса" />
              </div>
              <div className="survey-qr">
                <p>Пройди опросник и улучшай свою жизнь!</p>
                <img src="Images/опросник qr.png" alt="QR-код" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ModalComplaint 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <AiChatWidget />
      </>
    }
  />

  {/* Страница логина для админа */}
  <Route path="/admin/login" element={<AdminLogin />} />


  {/* Страница админ-панели */}
  <Route
  path="/admin"
  element={
    localStorage.getItem("isAdminAuthenticated") === "true" ? (
      <AdminPanel />
    ) : (
      <Navigate to="/admin/login" />
    )
  }
/>

    </Routes>
   </Router>

  );
}

export default App;
