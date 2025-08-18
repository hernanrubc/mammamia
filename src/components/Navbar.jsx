import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";

function formatCLP(n = 0) { return `$${Number(n||0).toLocaleString("es-CL")}`; }

const Navbar = () => {
  const { total, count } = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
      <div className="navbar-buttons ms-auto">
        <Link to="/" className="btn btn-warning mx-2">🍕 Home</Link>
        <Link to="/login" className="btn btn-primary mx-2">🔐 Iniciar Sesión</Link>
        <Link to="/register" className="btn btn-success mx-2">📝 Registrarse</Link>
        <Link to="/profile" className="btn btn-secondary mx-2">👤 Perfil</Link>
        <Link to="/cart" className="btn btn-info mx-2">🛒 Total: {formatCLP(total)} {count ? `(${count})` : ""}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
