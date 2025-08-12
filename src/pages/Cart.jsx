import { useState } from 'react';
import { pizzaCart } from '../pizzas';
import '../styles/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentarCantidad = (id) => {
    const nuevoCarrito = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
    );
    setCart(nuevoCarrito);
  };

  const disminuirCantidad = (id) => {
    const nuevoCarrito = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, cantidad: pizza.cantidad - 1 } : pizza
      )
      .filter((pizza) => pizza.cantidad > 0);
    setCart(nuevoCarrito);
  };

  const total = cart.reduce(
    (acumulador, pizza) => acumulador + pizza.precio * pizza.cantidad,
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="text-white mb-4">🛒 Detalles del pedido</h2>
      {cart.length === 0 ? (
        <p className="text-white">El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((pizza) => (
            <div key={pizza.id} className="card mb-4 p-3">
              <div className="row g-0 align-items-center">
                <div className="col-md-3">
                  <img
                    src={pizza.imagen}
                    alt={pizza.nombre}
                    className="img-fluid rounded-start cart-img"
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body text-center">
                    <h5 className="card-title">{pizza.nombre}</h5>
                    <p className="card-text mb-1">
                      Precio unitario: ${pizza.precio.toLocaleString('es-CL')}
                    </p>
                    <p className="card-text mb-1">Cantidad: {pizza.cantidad}</p>
                    <p className="card-text fw-bold">
                      Subtotal: ${(pizza.precio * pizza.cantidad).toLocaleString('es-CL')}
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="custom-btn btn-danger"
                        onClick={() => disminuirCantidad(pizza.id)}
                      >
                        &minus;
                      </button>
                      <button
                        className="custom-btn btn-success"
                        onClick={() => aumentarCantidad(pizza.id)}
                      >
                        &#43;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="card cart-total-card mt-4 d-flex flex-md-row justify-content-between align-items-center">
            <h4 className="fw-bold mb-0">🧾 Total: ${total.toLocaleString('es-CL')}</h4>
            <button className="btn-pay mt-3 mt-md-0">💰 Pagar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

