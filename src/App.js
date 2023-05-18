import '../src/css/main.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Gameshop from './Components/Gameshop';
import Mygames from './Components/Mygames';
import Navbar from './Components/Navbar';
import GameCard from './Components/GameCard';
import GamePage from './Components/GamePage';
import MyFavorites from './Components/MyFavorites';

function App() {
  const [favorites, setFavorites] = useState([]);
  console.log(favorites)

  const addToFavorites = (game) => {
    setFavorites((prevFavorites) => [...prevFavorites, game]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard addToFavorites={addToFavorites} favorites={favorites} />} />
        <Route path="/gameshop" element={<Gameshop />} />
        <Route path="/mygames" element={<Mygames />} />
        <Route path="/game/:slug" element={<GamePage favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/myfavorites" element={<MyFavorites favorites={favorites} />} />
      </Routes>
    </div>
  );
}

export default App;