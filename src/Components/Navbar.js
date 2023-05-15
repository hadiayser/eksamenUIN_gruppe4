import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <h1>Gamehub </h1>
      </Link>
      <ul className= "options">
        <li>
          <Link to="/gameshop">Gameshop</Link>
        </li>
        <li>
          <Link to="/myfavorites">My Favorites</Link>
        </li>
        <li>
          <Link to="/mygames">My Games</Link>
        </li>
      </ul>
    </nav>
  );
}
