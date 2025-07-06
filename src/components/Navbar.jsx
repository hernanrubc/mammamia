import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
      <div className="navbar-buttons ms-auto">
        <Link to="/" className="btn btn-warning mx-2">🍕 Home</Link>
        <Link to="/login" className="btn btn-primary mx-2">🔐 Iniciar Sesión</Link>
        <Link to="/register" className="btn btn-success mx-2">📝 Registrarse</Link>
        <button className="btn btn-info mx-2">🛒 Total: $25.000</button>
      </div>
    </nav>
  );
};

export default Navbar;
