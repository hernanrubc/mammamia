import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardPizza from "./CardPizza";
import "../styles/Home.css";
import { api } from "../services/api";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/pizzas");
        const adaptadas = data.map((p) => ({
          id: p.id,
          nombre: p.name,
          precio: p.price,
          ingredientes: p.ingredients,
          imagen: p.img,
        }));
        setPizzas(adaptadas);
      } catch (e) {
        setError(e.message || "Error al cargar pizzas");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div className="container mt-4">Cargando pizzas…</div>;
  }

  if (error) {
    return <div className="container mt-4">Ups: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row gx-4 gy-4">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center"
          >
            <CardPizza
              nombre={pizza.nombre}
              precio={`$${pizza.precio?.toLocaleString("es-CL")}`}
              ingredientes={pizza.ingredientes}
              imagen={pizza.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
