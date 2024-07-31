import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Login from './Pages/Login';
import Home from './Pages/Home'
import Product from './Pages/Product'
import Pricing from './Pages/Pricing'
import AboutUS from './Pages/AboutUS'

import './index.css';

function App() {
  return (
    <Router>
      <RouteHandler />
    </Router>
  );
}

function RouteHandler() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/aboutus" element={<AboutUS />} />
      </Routes>
    </>
  );
}

export default App;
