import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
      <div className="navbar-buttons ms-auto">
        <button className="btn btn-warning mx-2">🍕 Home</button>
        <button className="btn btn-primary mx-2">🔐 Login</button>
        <button className="btn btn-success mx-2">🔐 Register</button>
        <button className="btn btn-info mx-2">🛒 Total: $25.000</button>
      </div>
    </nav>
  );
};

export default Navbar;
