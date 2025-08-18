import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CardPizza.css";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, nombre, precio, ingredientes = [], imagen }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const formattedPrice = new Intl.NumberFormat("es-CL", {
    style: "currency", currency: "CLP", minimumFractionDigits: 0,
  }).format(Number(precio || 0));

  return (
    <div className="card">
      <img src={imagen} alt={nombre} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text"><strong>Ingredientes:</strong> {ingredientes.join(", ")}</p>
        <p className="card-text"><strong>Precio:</strong> {formattedPrice}</p>
        <div className="buttons-container">
          <button className="btn btn-primary" onClick={() => navigate(`/pizza/${id || "p001"}`)}>👀 Ver Más</button>
          <button className="btn btn-success" onClick={() => addToCart({ id, nombre, precio: Number(precio||0), imagen })}>🛒 Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
