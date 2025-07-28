import React from 'react';
import CardPizza from './CardPizza';
import '../styles/Home.css';
import { pizzas } from '../pizzas';

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row gx-4 gy-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <CardPizza
              nombre={pizza.nombre}
              precio={pizza.precio}
              ingredientes={pizza.ingredientes}
              imagen={pizza.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
