import { useMemo } from "react";

const useFeaturedHouse = (houses) => {
  let featuredHouse = useMemo(() => {
    if (houses.length) {
      let randomIndex = Math.floor(Math.random() * houses.length);
      return houses[randomIndex];
    }
  }, [houses]);
  return featuredHouse;
};

export default useFeaturedHouse;
