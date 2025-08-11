import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Pizza from './components/Pizza';

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
              <Home />
              {/* <Cart /> */}
            </>
          }
        />
        <Route
          path="/pizza"
          element={
            <>
              <Header />
              <Pizza />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
