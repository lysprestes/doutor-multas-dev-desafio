
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Vehicles from './pages/Vehicles';

import 'tw-elements'
import './App.css'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/:term/:codigo" element={<Vehicles />} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App
