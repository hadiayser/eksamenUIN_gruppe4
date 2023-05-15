import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
const [games, setGames] = useState([]);

  useEffect(() => {
    const hentSpill = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f`);
      const data = await response.json();
      const test1= data.results; 
      setGames(test1)
      console.log(test1)
    };
    hentSpill();
  }, []);

  return (
   <>
   {games.map(game =>(
    <div className="dashboard" key={game.id}>
        <Link to={`/game/${game.slug}`}>
            <img src={game.background_image} className="game-image"></img>
            </Link>
        <p className= "game-name">{game.name}</p>
    </div>
   ))}
   </>
  );
}
