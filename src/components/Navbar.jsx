import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function formatCLP(n = 0) {
  if (typeof n !== 'number') return '$0';
  return `$${n.toLocaleString('es-CL')}`;
}

const Navbar = ({ total = 0 }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>

      <div className="navbar-buttons ms-auto">
        <Link to="/" className="btn btn-warning mx-2">🍕 Home</Link>
        <Link to="/login" className="btn btn-primary mx-2">🔐 Iniciar Sesión</Link>
        <Link to="/register" className="btn btn-success mx-2">📝 Registrarse</Link>
        <Link to="/profile" className="btn btn-secondary mx-2">👤 Perfil</Link>


        {/* Carrito: mantiene tu estilo pero ahora navega */}
        <Link to="/cart" className="btn btn-info mx-2">
          🛒 Total: {formatCLP(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
