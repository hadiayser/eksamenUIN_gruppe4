import React, {useEffect, useState} from "react";
export default function Gameshop(){
    const [games, setGames] = useState([]);

  useEffect(() => {
    const hentSpill = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f&page_size=10`);
      const data = await response.json();
      const test1= data.results; 
      setGames(test1)
      console.log(test1)
    };
    hentSpill();
  }, []);
    return(
    <>
   {games.map(game =>(
    <div key={game.id}>
        <p>{game.name}</p>
        <img src={game.background_image}></img>
    </div>
   ))}
   </>
  );
}

export const store = [
    {
      title: "",
      id: 1,
      released: "",
      genres: ["", ""],
      link: "",
      img: "",
 
    },
    {
      title: "",
      id: 2,
      released: "",
      genres: ["", ""],
      link: "",
      img: "",
    
    },
    {
      title: "",
      id: 3,
      released: "",
      genres: ["", "", ""],
      link: "",
      img: "",
    
    },
    {
      title: "",
      id: 4,
      released: "",
      genres: ["", "", ""],
      link: "",
      img: "",
 
    },
    {
      title: "",
      id: 5,
      released: "",
      genres: ["", "", ""],
      link: "",
      img: "",
    }
  ]

  export const mygames = [
    {
      title: "",
      id: 6,
      released: "",
      genres: ["", ""],
      link: "",
      img: "",
    },
    {
      title: "",
      id: 7,
      released: "",
      genres: ["", ""],
      link: "",
      img: "",
    },
    {
      title: "",
      id: 8,
      released: "",
      genres: ["", ""],
      link: "",
      img: "",
    },
    {
      title: "",
      id: 9,
      released: "",
      genres: ["", "", ""],
      link: "",
      img: "",
    },
    {
      title: "",
      id: 10,
      released: "",
      genres: ["", ""],
      link: "",
      img: "",
    }
  ]



