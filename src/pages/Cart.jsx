import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { items, increment, decrement, removeFromCart, total } = useCart();

  if (!items || items.length === 0) {
    return (
      <div className="container mt-4 cart-container">
        <h2 className="text-white mb-4">🛒 Detalles del pedido</h2>
        <p className="text-white">El carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4 cart-container">
      <h2 className="text-white mb-4">🛒 Detalles del pedido</h2>

      {items.map((pizza) => (
        <div key={pizza.id} className="cart-card mb-4">
          <div className="row g-0 align-items-center">
            <div className="col-md-3">
              <img
                src={pizza.imagen}
                alt={pizza.nombre}
                className="img-fluid rounded-start cart-img"
              />
            </div>

            <div className="col-md-9">
              <div className="cart-body text-center">
                <h5 className="cart-title">{pizza.nombre}</h5>
                <p className="cart-text mb-1">
                  Precio unitario: ${Number(pizza.precio).toLocaleString("es-CL")}
                </p>
                <p className="cart-text mb-1">Cantidad: {pizza.cantidad}</p>
                <p className="cart-text cart-subtotal">
                  Subtotal: $
                  {(Number(pizza.precio) * Number(pizza.cantidad)).toLocaleString("es-CL")}
                </p>

                <div className="d-flex justify-content-center gap-2 mt-2">
    
    
                  <button
                    className="custom-btn btn-minus"
                    onClick={() => decrement(pizza.id)}
                    aria-label="Disminuir cantidad"
                  >
                    &minus;
                  </button>

                  <button
                    className="custom-btn btn-plus"
                    onClick={() => increment(pizza.id)}
                    aria-label="Aumentar cantidad"
                  >
                    &#43;
                  </button>

                  <button
                    className="btn-remove ms-3"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-total-card mt-4 d-flex flex-md-row justify-content-between align-items-center">
        <h4 className="fw-bold mb-0 cart-total-text">
          🧾 Total: ${Number(total).toLocaleString("es-CL")}
        </h4>
        <button className="btn-pay mt-3 mt-md-0">💰 Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
