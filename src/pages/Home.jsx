import React from "react";
import CardPizza from "../components/CardPizza";
import "../styles/Home.css";
import { usePizzas } from "../context/PizzasContext";

export default function Home() {
  const { pizzas, loading, error } = usePizzas();

  if (loading) return <div className="container mt-4 text-white">Cargando pizzas…</div>;
  if (error)   return <div className="container mt-4 text-white">Ups: {error}</div>;
  if (!pizzas || pizzas.length === 0)
    return <div className="container mt-4 text-white">No hay pizzas por ahora.</div>;

  return (
    <div className="container mt-4">
      <div className="row gx-4 gy-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
            <CardPizza
              id={pizza.id}
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
}
