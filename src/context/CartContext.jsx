import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  
  const addToCart = (pizza) => {
    setItems((prev) => {
      const i = prev.findIndex((p) => p.id === pizza.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], cantidad: copy[i].cantidad + 1 };
        return copy;
      }
      return [...prev, { ...pizza, cantidad: 1 }];
    });
  };

  const increment = (id) =>
    setItems((prev) => prev.map(p => p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p));

  const decrement = (id) =>
    setItems((prev) =>
      prev.map(p => p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p)
          .filter(p => p.cantidad > 0)
    );

  const removeFromCart = (id) =>
    setItems((prev) => prev.filter(p => p.id !== id));

  const total = useMemo(
    () => items.reduce((acc, p) => acc + p.precio * p.cantidad, 0),
    [items]
  );

  const value = { items, addToCart, increment, decrement, removeFromCart, total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
