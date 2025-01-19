import React from 'react';
import CardPizza from './CardPizza';
import '../styles/Home.css';

const Home = () => {
  const pizzas = [
    {
      id: 1,
      name: 'Pizza Napolitana',
      price: 5950,
      ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
      img: 'https://www.latercera.com/resizer/v2/UJQEGMANSJGG5CSZZ22TPK66DA.JPG?quality=80&smart=true&auth=53f10884b5f60ead0ad9c3e87c2780ff5194d26e59980ad3446a74a5d851df6e&width=690&height=502',
    },
    {
      id: 2,
      name: 'Pizza Española',
      price: 6950,
      ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg',
    },
    {
      id: 3,
      name: 'Pizza Pepperoni',
      price: 6950,
      ingredients: ['mozzarella', 'pepperoni', 'orégano'],
      img: 'https://assets-us-01.kc-usercontent.com/4353bced-f940-00d0-8c6e-13a0a4a7f5c2/2ac60829-5178-4a6e-80cf-6ca43d862cee/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg?w=1280&auto=format?auto=format',
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row gx-4 gy-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <CardPizza {...pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
