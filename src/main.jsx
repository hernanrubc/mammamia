import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { PizzasProvider } from "./context/PizzasContext"; 
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <PizzasProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </PizzasProvider>
    </UserProvider>
  </React.StrictMode>
);
