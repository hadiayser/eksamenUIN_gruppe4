import React from "react";
import { Link } from "react-router-dom";

const MyFavorites = ({ favorites }) => {
  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((game) => (
        <div className="my-games" key={game.id}>
          <h3 className="game-name">{game.name}</h3>
          <Link to={`/game/${game.slug}`}>
          <img className="game-image" src={game.background_image} alt={game.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default MyFavorites;