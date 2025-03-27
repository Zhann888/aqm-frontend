import React from "react";

const Header = ({ onOpenModal }) => (
  <header>
    <div className="logo">Logo Name</div>
    <nav>
      <ul>
        <li><a href="#home">Главная</a></li>
        <li><a href="#info">Справочник</a></li>
        <li><a href="#about">О проекте</a></li>
        <li><a href="#contacts">Контакты</a></li>
        <li><button onClick={onOpenModal} className="complaint-btn">Оставить жалобу</button></li>
      </ul>
    </nav>
  </header>
);

export default Header;
