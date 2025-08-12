import React from "react";
import "../styles/Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          {/* Ícono de usuario como imagen */}
          <img
            src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"
            alt="Icono de usuario"
            className="profile-icon-img"
          />

          <h2 className="profile-name">Nombre Apellido</h2>
          <p className="profile-email">nombre@mail.cl</p>
        </div>

        <div className="profile-body">
          <h4>Información de la cuenta</h4>
          <p><strong>Fecha de registro:</strong> 10/08/2025</p>
          <p><strong>Pedidos realizados:</strong> 12</p>
          <p><strong>Último pedido:</strong> 08/08/2025</p>

          <div className="logout-wrap">
            <button className="btn btn-danger">🚪 Cerrar sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
}
