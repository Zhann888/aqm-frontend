import React from "react";
import "../index.css";

const Header = ({ onOpenModal }) => (
  <header>
    <div className="logo">Logo Name</div>

    <div className="nav-actions">
      <nav>
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#info">Справочник</a></li>
          <li><a href="#about">О проекте</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </nav>

      <button onClick={onOpenModal} className="complaint-button">
        Оставить жалобу
      </button>
    </div>
  </header>
);

export default Header;
