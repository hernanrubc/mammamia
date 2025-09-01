import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import "../styles/Cart.css";

export default function Cart() {
  const { items, increment, decrement, removeFromCart, total } = useCart();
  const { token } = useUser();

  if (!items || items.length === 0) {
    return (
      <div className="container mt-4">
        <h2 className="text-white mb-4">🛒 Detalles del pedido</h2>
        <p className="text-white">El carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4 cart-container">
      <h2 className="text-white mb-4">🛒 Detalles del pedido</h2>

      {items.map((pizza) => {
        const unit = Number(pizza.precio) || 0;
        const sub  = unit * (pizza.cantidad || 0);

        return (
          <div key={pizza.id} className="cart-card card mb-4 p-3">
            <h5 className="cart-name text-center mb-2">{pizza.nombre}</h5>
            <hr className="cart-divider" />

            <div className="d-flex flex-column flex-md-row align-items-center gap-3">
              <img
                src={pizza.imagen}
                alt={pizza.nombre}
                className="cart-thumb"
              />

              <div className="text-center flex-grow-1">
                <p className="mb-1 cart-line">
                  Precio unitario:{" "}
                  <strong>${unit.toLocaleString("es-CL")}</strong>
                </p>
                <p className="mb-1 cart-line">
                  Cantidad: <strong>{pizza.cantidad}</strong>
                </p>
                <p className="mb-2 cart-subtotal">
                  Subtotal:{" "}
                  <strong>${sub.toLocaleString("es-CL")}</strong>
                </p>

                <div className="cart-controls">
                  <button
                    className="qty-btn qty-minus"
                    onClick={() => decrement(pizza.id)}
                    aria-label="Disminuir cantidad"
                  >
                    &minus;
                  </button>

                  <button
                    className="qty-btn qty-plus"
                    onClick={() => increment(pizza.id)}
                    aria-label="Aumentar cantidad"
                  >
                    &#43;
                  </button>

                  <button
                    className="btn-remove"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    Quitar 🗑️
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="total-card card mt-4 d-flex flex-md-row justify-content-between align-items-center">
        <h4 className="fw-bold mb-0">
          🧾 Total: ${Number(total).toLocaleString("es-CL")}
        </h4>
        <button
          className="btn-pay mt-3 mt-md-0"
          disabled={!token}
          title={!token ? "Inicia sesión para pagar" : "Pagar"}
        >
          💰 Pagar
        </button>
      </div>
    </div>
  );
}
