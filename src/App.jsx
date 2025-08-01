import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
// import Home from './components/Home';
import Footer from './components/Footer';
// import Register from './components/Register';
// import Login from './components/Login';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              {/* <Home /> */}
              <Cart />
            </>
          }
        />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
