import React from "react";


const Footer = () => (
  <footer className="footer" id="contacts">
    <div className="footer-container">
      <div className="footer-section">
        <div className="logo">
        <img src="/LOGO.png" alt="AlmaAir" className="logo-img" />
        </div>
        <p>AlmaAir – следи за качеством воздуха в режиме реального времени. Данные о загрязнении, прогнозы и аналитика для жителей города.</p>
        <p className="copyright">© 2025 AlmaAir. Все права защищены. 🌍💙</p>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-section">
        <h3>Мы в соцсетях:</h3>
        <p>Instagram <span className="icon">📷</span></p>
        <p>Telegram <span className="icon">✈️</span></p>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-section">
        <h3>Свяжитесь с нами:</h3>
        <p>example@gmail.com</p>
        <p>+7 777 777 77 77</p>
      </div>
    </div>
  </footer>
);

export default Footer;
