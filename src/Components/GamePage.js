import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function GamePage({setFavorites}) {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const addToFavorites = (game) => {
    setFavorites((prevFavorites) => [...prevFavorites, game]);
  };

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`https://api.rawg.io/api/games/${slug}?key=d756e11d41c9402e9f5ee9be11373a5f`);
      const data = await response.json();
      setGame(data);
    };
    fetchGame();
  }, [slug]);

  return (
    <div>
      <h1 className="game-name">{game?.name}</h1>
      <p className="game-name">{game?.genres.map((genre) => genre.name).join(", ")}</p>
      <p className="game-name">Rating: {game?.rating}</p>
      <p className="game-name">Released: {game?.released}</p>
      <img className="game-image" src={game?.background_image} alt={game?.name} />
      <button onClick={() => addToFavorites(game)}>Add to favorites</button>
      <p className="game-name">{game?.description_raw}</p>
    </div>
  );
}

