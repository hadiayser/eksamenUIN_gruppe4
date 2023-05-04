import React from 'react';
import '../src/css/main.css';
import Dashboard from './Components/Dashboard';
import Gameshop from './Components/Gameshop';
import Mygames from './Components/Mygames';
import Navbar from './Components/Navbar';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gameshop" element={<Gameshop />} />
        <Route path="/mygames" element={<Mygames />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
  );
}

export default App;
