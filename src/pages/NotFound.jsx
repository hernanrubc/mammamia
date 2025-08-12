import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">😵 404</h1>
      <p className="notfound-text">
        Oops… la página que buscas no existe.
      </p>
      <img
        className="notfound-gif"
        src="https://media1.tenor.com/m/5UfPlGBhnbQAAAAd/titanic-hay-alguien.gif"
        alt="Hay alguien aquí?"
      />
      <Link to="/" className="btn btn-warning notfound-btn">
        🍕 Volver al inicio
      </Link>
    </div>
  );
}
