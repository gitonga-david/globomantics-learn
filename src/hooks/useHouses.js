import { useState, useEffect } from "react";

const useHouses = () => {
  const [houses, setHouses] = useState([]);

  // load data
  useEffect(() => {
    const fetchHouses = async () => {
      let res = await (await fetch("/houses.json")).json();
      setHouses((houses) => res);
    };
    fetchHouses();
  }, []);

  return houses;
};

export default useHouses;
