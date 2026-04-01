// App.jsx
import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import ProductDetail from './components/ProductDetail';
import JewelryLanding from './components/JewelryLanding';
import JewelryDetail from './components/JewelryDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Landing />} />   
         <Route path="/product/:slug" element={<ProductDetail />} />
         <Route path="/jewelry" element={<JewelryLanding />} />
         <Route path="/jewelry/:slug" element={<JewelryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;