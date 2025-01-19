import React from 'react';
import '../styles/CardPizza.css';


const CardPizza = ({ name, price, ingredients, img }) => {

  const formattedPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0, 
  }).format(price);

  return (
    <div className="card">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients.join(', ')}
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
