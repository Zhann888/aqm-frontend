import React from "react";
import "./ModalComplaint.css";

const ModalComplaint = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Оставить жалобу на экологическую проблему</h2>
        <p className="subtitle">Здесь вы можете оставить жалобу на экологическую проблему в вашем районе</p>

        <form className="modal-form">
          <label>Заголовок</label>
          <input type="text" placeholder="Например: Вред автомобилей здоровью" />

          <label>Категория</label>
          <select>
            <option>Транспортные выбросы</option>
            <option>Промышленные загрязнения</option>
            <option>Пыль и строительные загрязнения</option>
            <option>Свалки и отходы</option>
            <option>Выбросы от отопления и частных домов</option>
          </select>

          <label>Район города Алматы</label>
          <select>
            <option>Алмалинский район</option>
            <option>Медеуский район</option>
            <option>Ауэзовский район</option>
            <option>Наурызбайский район</option>
            <option>Бостандыкский район</option>
            <option>Алатауский район</option>
            <option>Жетысуский район</option>
            <option>Турксибский район</option>
          </select>

          <label>Описание</label>
          <textarea placeholder="Опишите проблему подробнее..." />

          <p className="form-subtitle">Введите ваши данные, чтобы отправить жалобу</p>

          <div className="input-row">
            <div>
              <label>Ваше имя</label>
              <input type="text" placeholder="Имя" />
            </div>
            <div>
              <label>Ваш e-mail</label>
              <input type="email" placeholder="example@mail.com" />
            </div>
          </div>

          <button type="submit" className="submit-btn">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ModalComplaint;
