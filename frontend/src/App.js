import React, { useEffect, useState } from "react";
import fetchOccupationByQuery from "./utils/fetchOccupationByQuery";
import fetchAllRoutes from "./utils/fetchAllRoutes.js";
import Header from "./components/Header";
import OccupationsList from "./components/OccupationsList";
import FilterContainer from "./components/FilterContainer.jsx";
import "./style/globals.css";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState(undefined);
  const [allRoutes, setAllRoutes] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [occupationSearch, setOccupationSearch] = useState('');

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const fetchedRoutes = await fetchAllRoutes();
        setAllRoutes(fetchedRoutes);
      } catch (error) {
        console.error("Failed to fetch routes:", error);
      }
    };
    fetchRoutes();
  }, []);

  const handleSearch = async (query) => {
    const data = await fetchOccupationByQuery(query);
    setOccupationSearch(query);
    setSearchResults(data);
    window.location.hash = query;
  };

  return (
    <div className="app">
      <Header searchHandler={handleSearch} allRoutes={allRoutes} />
      <FilterContainer 
        allRoutes={allRoutes} 
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
        occupationSearch={occupationSearch}
      />
      {searchResults && (
        <div style={{ width: "100dvw" }}>
          <OccupationsList occupationsArray={searchResults.results} />
          <div style={{ width: "70vmin" }}></div>
        </div>
      )}
    </div>
  );
}

export default App;
