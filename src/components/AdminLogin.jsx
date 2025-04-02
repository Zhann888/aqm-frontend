import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const AdminLogin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // временноо
    if (login === "admin" && password === "12345") {
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate("/admin");
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="admin-login">
      <h2>Вход администратора</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
