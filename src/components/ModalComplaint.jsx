import React, { useState } from "react";
import "./ModalComplaint.css";

const ModalComplaint = ({ isOpen, onClose }) => {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    district: "",
    description: "",
    name: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Введите заголовок";
    if (!formData.category) newErrors.category = "Выберите категорию";
    if (!formData.district) newErrors.district = "Выберите район";
    if (!formData.description.trim()) newErrors.description = "Введите описание";
    if (!formData.name.trim()) newErrors.name = "Введите имя";
    if (!formData.email.trim()) {
      newErrors.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Жалоба отправлена:", formData);
      alert("Жалоба успешно отправлена!");
      onClose();
      setFormData({
        title: "",
        category: "",
        district: "",
        description: "",
        name: "",
        email: ""
      });
      setErrors({});
    }
  };



  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Оставить жалобу на экологическую проблему</h2>
        <p className="subtitle">Здесь вы можете оставить жалобу на экологическую проблему в вашем районе</p>

        <form className="modal-form" onSubmit={handleSubmit}>

          <label>Заголовок</label>
          <input 
          type="text" 
          name="title"
          placeholder="Например: Вред автомобилей здоровью"
          value={formData.title}
          onChange={handleChange}
          />
          {errors.title && <span className="error">{errors.title}</span>}


          <label>Категория</label>
          <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          >
            <option value="">-- Выберите категорию --</option>
            <option>Транспортные выбросы</option>
            <option>Промышленные загрязнения</option>
            <option>Пыль и строительные загрязнения</option>
            <option>Свалки и отходы</option>
            <option>Выбросы от отопления и частных домов</option>
            </select>
            {errors.category && <span className="error">{errors.category}</span>}


          <label>Район города Алматы</label>
          <select
          name="district"
          value={formData.district}
          onChange={handleChange}
          >
            <option value="">-- Выберите район --</option>
            <option>Алмалинский район</option>
            <option>Медеуский район</option>
            <option>Ауэзовский район</option>
            <option>Наурызбайский район</option>
            <option>Бостандыкский район</option>
            <option>Алатауский район</option>
            <option>Жетысуский район</option>
            <option>Турксибский район</option>
          </select>
          {errors.district && <span className="error">{errors.district}</span>}


          <label>Описание</label>
          <textarea 
          name="description"
          placeholder="Опишите проблему подробнее..."
          value={formData.description}
          onChange={handleChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}


          <p className="form-subtitle">Введите ваши данные, чтобы отправить жалобу</p>

          <div className="input-row">
            <div>
              <label>Ваше имя</label>
              <input 
              type="text" 
              name="name"
              placeholder="Имя" 
              value={formData.name}
              onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div>
              <label>Ваш e-mail</label>
              <input 
              type="email" 
              name="email"
              placeholder="example@mail.com" 
              value={formData.email}
              onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <button type="submit" className="submit-btn">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ModalComplaint;
