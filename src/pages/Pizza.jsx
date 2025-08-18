import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { usePizzas } from "../context/PizzasContext";

export default function Pizza() {
  const { id: routeId } = useParams();     
  const pizzaId = routeId || "p001";
  const { byId, fetchPizzaById } = usePizzas();

  const [pizza, setPizza] = useState(byId[pizzaId]);
  const [loading, setLoading] = useState(!byId[pizzaId]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        if (!byId[pizzaId]) {
          setLoading(true);
          const data = await fetchPizzaById(pizzaId);
          if (active) setPizza(data);
        } else {
          setPizza(byId[pizzaId]);
        }
      } catch (e) {
        if (active) setError(e.message || "Error al cargar la pizza");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, [pizzaId, byId, fetchPizzaById]);

  if (loading) return <div className="container mt-4">Cargando pizza…</div>;
  if (error)   return <div className="container mt-4">Ups: {error}</div>;
  if (!pizza)  return null;

  const priceCLP = `$${pizza.precio?.toLocaleString("es-CL")}`;

  return (
    <div className="container mt-4">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-md-6">
          <img
            src={pizza.imagen}
            alt={pizza.nombre}
            style={{ width: "100%", borderRadius: 12, objectFit: "cover" }}
          />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="mb-2">{pizza.nombre}</h1>
          <div className="mb-3" style={{ fontWeight: 700, fontSize: 18 }}>
            {priceCLP}
          </div>
          <p className="mb-3">{pizza.desc}</p>
          <div className="mb-3">
            <strong>Ingredientes:</strong>
            <ul className="mt-2">
              {pizza.ingredientes?.map((ing) => (
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
