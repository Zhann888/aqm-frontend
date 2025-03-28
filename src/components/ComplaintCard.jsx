import React from "react";
import "./ComplaintCard.css"; 


const ComplaintCard = ({ complaint, districtName }) => {
  return (
    <div className="complaint-card" style={cardStyle}>
      <h3>{complaint.title}</h3>
      <p><strong>Категория:</strong> {complaint.category}</p>
      <p><strong>Район:</strong> {districtName}</p>
      <p><strong>Описание:</strong> {complaint.description}</p>
      <p><strong>Имя:</strong> {complaint.name}</p>
      <p><strong>Email:</strong> {complaint.email}</p>
      <p><em>Создано: {new Date(complaint.createdAt).toLocaleString()}</em></p>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "16px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
};

export default ComplaintCard;
