import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";

import Footer from "./components/Footer";
import { useUser } from "./context/UserContext";

const App = () => {
  const { token } = useUser();

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route path="/login" element={ token ? <Navigate to="/" replace /> : <Login /> } />
        <Route path="/register" element={ token ? <Navigate to="/" replace /> : <Register /> } />

        <Route path="/pizza/:id" element={<Pizza />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/profile" element={ token ? <Profile /> : <Navigate to="/login" replace /> } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
