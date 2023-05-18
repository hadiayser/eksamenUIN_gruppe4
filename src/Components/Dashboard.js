import React from "react";
import { useHentSpill } from "./HentSpill";
import Games from "./GameCard";
import MyFavorites from "./MyFavorites";

export default function Dashboard({ addToFavorites, favorites }) {
  const gameShopTre =
    'https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f&ordering=released&page_size=3';

  const myGamesfire =
    'https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f&page_size=4&genres=2';

  const gameShopSpill = useHentSpill(gameShopTre);
  const myGamesSpill = useHentSpill(myGamesfire);

  return (
    <>
      <h2>Gameshop</h2>
      {gameShopSpill.map((game) => (
        <Games game={game} key={game.id} addToFavorites={addToFavorites} showVisitShop={true}/>
      ))}
      <h2>My Games</h2>
      {myGamesSpill.map((game) => (
        <Games game={game} key={game.id} addToFavorites={addToFavorites} showVisitShop={false} />
      ))}
      <MyFavorites favorites={favorites} />
    </>
  );
}
