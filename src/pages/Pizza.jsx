import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { api } from "../services/api";

export default function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/pizzas/${id}`);
        if (!active) return;
        const adaptada = {
          id: data.id,
          nombre: data.name,
          precio: data.price,
          imagen: data.img,
          desc: data.desc,
          ingredientes: data.ingredients || [],
        };
        setPizza(adaptada);
      } catch (e) {
        if (active) setError("No se encontró la pizza solicitada.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, [id]);

  if (!id) return <Navigate to="/" replace />;

  if (loading) return <div className="container mt-4 text-white">Cargando pizza…</div>;
  if (error)   return <div className="container mt-4 text-white">{error}</div>;
  if (!pizza)  return null;

  const priceCLP = `$${Number(pizza.precio).toLocaleString("es-CL")}`;

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
              {pizza.ingredientes.map((ing) => <li key={ing}>{ing}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
