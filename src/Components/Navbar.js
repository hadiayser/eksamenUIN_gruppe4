import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Navnet på siden
      </Link>
      <ul>
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
