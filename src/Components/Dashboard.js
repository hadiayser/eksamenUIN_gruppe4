import React, {useEffect} from "react";

export default function Dashboard() {
  useEffect(() => {
    const hentSpill = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?key=d756e11d41c9402e9f5ee9be11373a5f`);
      const data = await response.json();
      console.log(data); 
    };
    hentSpill();
  }, []);

  return (
   <></>
  );
}
