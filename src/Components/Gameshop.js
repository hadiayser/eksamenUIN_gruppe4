import React, {useEffect, useState} from "react";
import { useHentSpill } from "./HentSpill";
export default function Gameshop(){

    const url = "https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f&ordering=released&page_size=10";
    const games = useHentSpill(url);

    return(
    <>
   {games.map(game =>(
    <div key={game.id}>
        <p>{game.name}</p>
        <p>{game.genres.map((genre) => genre.name).join(", ")}</p>
        <img src={game.background_image}></img>
    </div>
   ))}
   </>
  );
}




