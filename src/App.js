import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Cart from './components/CartModal'
import ProductDetail from '../src/components/ArticulosDetails'
import Home from '../src/components/Home'
import ArticulosList from '../src/components/ArticulosList'; 
import Header from '../src/components/Header';

function App() {
  const [allArticulos,setAllArticulos]=useState([]);
  const [total,setTotal]=useState(0);
  const [countArticulos,SetCountArticulos]=useState(0);

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
