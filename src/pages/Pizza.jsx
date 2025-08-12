import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/pizzas/p001");
        setPizza(data);
      } catch (e) {
        setError(e.message || "Error al cargar la pizza");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="container mt-4">Cargando pizza…</div>;
  if (error)   return <div className="container mt-4">Ups: {error}</div>;
  if (!pizza)  return null;

  const priceCLP = `$${pizza.price?.toLocaleString("es-CL")}`;

  return (
    <div className="container mt-4">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            style={{ width: "100%", borderRadius: 12, objectFit: "cover" }}
          />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="mb-2">{pizza.name}</h1>
          <div className="mb-3" style={{ fontWeight: 700, fontSize: 18 }}>
            {priceCLP}
          </div>
          <p className="mb-3">{pizza.desc}</p>
          <div className="mb-3">
            <strong>Ingredientes:</strong>
            <ul className="mt-2">
              {pizza.ingredients?.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
          </div>
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}
