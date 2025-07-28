import React from 'react';
import '../styles/CardPizza.css';


const CardPizza = ({ nombre, precio, ingredientes, imagen }) => {
  const formattedPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0, 
  }).format(precio);

  return (
    <div className="card">
      <img src={imagen} alt={nombre} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredientes.join(', ')}
        </p>
        <p className="card-text">
          <strong>Precio:</strong> {formattedPrice}
        </p>
        <div className="buttons-container">
          <button className="btn btn-primary">👀 Ver Más</button>
          <button className="btn btn-success">🛒 Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
