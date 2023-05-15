import { useEffect, useState } from "react";

export const useHentSpill = (url) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const hentSpill = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const test1 = data.results;
      setGames(test1);
      console.log(test1);
    };

    hentSpill();
  }, [url]);

  return games;
};
