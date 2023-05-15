import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Mygames() {
    const [games, setGames] = useState([]);
    
      useEffect(() => {
        const hentSpill = async () => {
          const response = await fetch(`https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f&page_size=20&genres=2`);
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
        <div className="my-games" key={game.id}>
            <Link to={`/game/${game.slug}`}>
            <img className="game-image"src={game.background_image}></img>
            <p className="game-name">{game.name}</p>
            </Link>
        </div>
       ))}
       </>
      );
    }
     
    