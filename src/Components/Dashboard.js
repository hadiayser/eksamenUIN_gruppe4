import { useHentSpill } from "./HentSpill";
import Games from "./Games";

export default function Dashboard() {
    const gameShopTre =
    'https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f&ordering=released&page_size=3';
    
     const myGamesfire =
    'https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f&page_size=4&genres=2';

    const gameShopSpill = useHentSpill(gameShopTre);
    const myGamesSpill = useHentSpill(myGamesfire);

    return(
      <>
      <h1>Gameshop</h1>
      {gameShopSpill.map((game)=>(
        <Games game={game}/>
      ))}
      <h1>MyGames</h1>
      {myGamesSpill.map((game)=>(
        <Games game={game}/>
      ))}
      </>
    )
   }
