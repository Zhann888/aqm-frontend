import React, { useState } from "react";
import "../index.css";

const Header = ({ onOpenModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header>
      <div className="logo">
        <img src="/LOGO.png" alt="AlmaAir Logo" className="logo-img" />
      </div>

      <button className="burger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`nav-actions ${isMobileMenuOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#info">Справочник</a></li>
            <li><a href="#about">О проекте</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>

        <button className="complaint-button" onClick={onOpenModal}>
          Оставить жалобу
        </button>
      </div>
    </header>
  );
};

export default Header;
