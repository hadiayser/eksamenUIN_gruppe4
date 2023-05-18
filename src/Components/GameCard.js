import { Link } from "react-router-dom";

const GameCard = ({ game, addToFavorites, showVisitShop  }) => {
  return (
    <div className="game-shop" key={game.id}>
      <p className="game-name">{game.name}</p>
      <p>{game.genres.map((genre) => genre.name).join(", ")}</p>
      <Link to={`/game/${game.slug}`}>
        <img className="game-image" src={game.background_image} alt={game.name} />
      </Link>
      {showVisitShop &&(
      <Link to="/gameshop">
        <button>Visit shop</button>
      </Link>
        )}
      <button onClick={() => addToFavorites(game)}>Add to favorites</button>
    </div>
  );
};

export default GameCard;