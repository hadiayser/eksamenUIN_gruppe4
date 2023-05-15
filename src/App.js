import React from 'react';
import '../src/css/main.css';
import Dashboard from './Components/Dashboard';
import Gameshop from './Components/Gameshop';
import Mygames from './Components/Mygames';
import Navbar from './Components/Navbar';
import {Route, Routes } from 'react-router-dom';
import GameCard from './Components/GameCard';
import GamePage from './Components/GamePage';


function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gameshop" element={<Gameshop />} />
        <Route path="/mygames" element={<Mygames />} />
        <Route path="/game/:slug" element={<GameCard />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/gamepage/:slug" element={<GamePage />} />
      </Routes>
      </div>
  );
}

export default App;
