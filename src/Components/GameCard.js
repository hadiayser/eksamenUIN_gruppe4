import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GameCard() {
  const { slug } = useParams();
  const [game, setGame] = useState(null);

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
      <h1>{game?.name}</h1>
      <img src={game?.background_image} alt={game?.name} />
      <p>{game?.description_raw}</p>
    </div>
  );
}