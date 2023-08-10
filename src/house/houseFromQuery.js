import { useParams } from "react-router-dom";
import House from ".";
import { useContext } from "react";
import HousesContext from "../context/houseContext";

const HouseFromQuery = () => {
  const { id } = useParams();
  const houses = useContext(HousesContext);
  const house = houses.find((h) => h.id === parseInt(id));

  if (!house) {
    return <div>Could not find house with id: {id}</div>;
  } 
  return <House house={house} />;
};

export default HouseFromQuery;
