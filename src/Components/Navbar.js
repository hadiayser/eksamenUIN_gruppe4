export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">Navnet på siden</a>
        <ul>
            <li>
                <a href="Gameshop">Gameshop</a>
            </li>
            <li>
                <a href="MyFavorites">My Favorites</a>
            </li>
            <li>
                <a href="Mygames">My Games</a>
            </li>
        </ul>
    </nav>
}