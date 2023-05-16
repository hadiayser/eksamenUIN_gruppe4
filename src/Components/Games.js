import { Link } from "react-router-dom";
export default function Games({game}){
    return(
        <div key={game.id}>
        <p>{game.name}</p>
        <p>{game.genres.map((genre) => genre.name).join(", ")}</p>
        <Link to={`/game/${game.slug}`}>
            <img src={game.background_image}></img>
            </Link>
            <Link to="/gameshop">
        <button>Visit shop</button>
        <button>Add to favorites</button>
      </Link>
    </div> 
    )
}