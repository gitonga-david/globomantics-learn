import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./mainPage.css";
import Header from "./header";
import FeaturedHouse from "./featuredHouse";
import SearchResults from "../searchResult";
import HouseFilter from "./houseFilter";
import HouseFromQuery from "../house/houseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import HousesContext from "../context/houseContext";

function App() {
  const houses = useHouses();
  const featuredHouse = useFeaturedHouse(houses);

  return (
    <Router>
      <HousesContext.Provider value={houses}>
        <div className="container">
          <Header subtitle="Providing houses all over the world" />
          <HouseFilter />
          <Routes>
            <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
            <Route path="/search/:country" element={<SearchResults />} />
            <Route
              path="/house/:id"
              element={<HouseFromQuery houses={houses} />}
            />
          </Routes>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
