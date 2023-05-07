import React from 'react';
import '../src/css/main.css';
import Dashboard from './Components/Dashboard';
import Gameshop from './Components/Gameshop';
import Mygames from './Components/Mygames';
import Navbar from './Components/Navbar';
import {Route, Routes } from 'react-router-dom';
import Gamecard from './Components/Gamecard';


function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gameshop" element={<Gameshop />} />
        <Route path="/mygames" element={<Mygames />} />
        <Route path="/game/:slug" element={<Gamecard />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
      </div>
  );
}

export default App;
