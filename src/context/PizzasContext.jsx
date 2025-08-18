import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../services/api";

function adaptar(p) {
  return {
    id: p.id,
    nombre: p.name,
    precio: p.price,
    ingredientes: p.ingredients,
    imagen: p.img,
    desc: p.desc,
  };
}

const PizzasContext = createContext(null);

export function PizzasProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [byId, setById] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const { data } = await api.get("/pizzas");
        if (!active) return;
        const adaptadas = data.map(adaptar);
        setPizzas(adaptadas);
        setById(Object.fromEntries(adaptadas.map(p => [p.id, p])));
      } catch (e) {
        if (active) setError(e.message || "Error al cargar pizzas");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const fetchPizzaById = async (id) => {
    if (byId[id]) return byId[id];
    const { data } = await api.get(`/pizzas/${id}`);
    const adaptada = adaptar(data);
    setById(prev => ({ ...prev, [id]: adaptada }));
    setPizzas(prev => (prev.some(p => p.id === id) ? prev : [...prev, adaptada]));
    return adaptada;
  };

  const value = useMemo(() => ({ pizzas, byId, loading, error, fetchPizzaById }),
    [pizzas, byId, loading, error]);

  return <PizzasContext.Provider value={value}>{children}</PizzasContext.Provider>;
}

export function usePizzas() {
  const ctx = useContext(PizzasContext);
  if (!ctx) throw new Error("usePizzas debe usarse dentro de <PizzasProvider>");
  return ctx;
}
