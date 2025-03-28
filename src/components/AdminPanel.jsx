import React, { useEffect, useState } from "react";
import "../index.css";
import ComplaintCard from "./ComplaintCard";

const AdminPanel = () => {
  const [complaints, setComplaints] = useState([]);
  const [districts, setDistricts] = useState([]);

  const fetchData = async () => {
    try {
      const [complaintsRes, districtsRes] = await Promise.all([
        fetch("http://localhost:5000/api/complaints"),
        fetch("http://localhost:5000/api/districts")
      ]);

      const complaintsData = await complaintsRes.json();
      const districtsData = await districtsRes.json();

      setComplaints(complaintsData);
      setDistricts(districtsData);
    } catch (err) {
      console.error("Ошибка при загрузке данных:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getDistrictName = (id) => {
    const found = districts.find((d) => d.id === id);
    return found ? found.name : "Неизвестно";
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    window.location.href = "/admin/login";
  };

  return (
    <div className="admin-panel" style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Панель администратора</h2>
        <button onClick={handleLogout} className="complaint-button">Выйти</button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        {complaints.length === 0 ? (
          <p>Жалоб пока нет.</p>
        ) : (
          complaints.map((complaint) => (
            <ComplaintCard
              key={complaint.id}
              complaint={complaint}
              districtName={getDistrictName(complaint.DistrictId)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
