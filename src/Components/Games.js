import { Link } from "react-router-dom";
export default function Games({game}){
    return(
        <div className="game-shop" key={game.id}>
         <p className="game-name">{game.name}</p>
        <p>{game.genres.map((genre) => genre.name).join(", ")}</p>
        <Link to={`/game/${game.slug}`}>
            <img className="game-image" src={game.background_image}></img>
            </Link>
            <Link to="/gameshop">
        <button>Visit shop</button>
      </Link>
        <button>Add to favorites</button>
    </div> 
    )
}