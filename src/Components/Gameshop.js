import React, {useEffect, useState} from "react";
export default function Gameshop(){
    const [games, setGames] = useState([]);

  useEffect(() => {
    const hentSpill = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f&page_size=10`);
      const data = await response.json();
      const test1= data.results; 
      setGames(test1)
      console.log(test1)
    };
    hentSpill();
  }, []);
    return(
    <>
   {games.map(game =>(
    <div key={game.id}>
        <p>{game.name}</p>
        <p>{game.genres.map((genre) => genre.name).join(", ")}</p>
        <img src={game.background_image}></img>
    </div>
   ))}
   </>
  );
}




