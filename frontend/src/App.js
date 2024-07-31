import React, { useEffect, useState } from "react";
import fetchOccupationByQuery from "./utils/fetchOccupationByQuery";
import fetchAllRoutes from "./utils/fetchAllRoutes.js";
import Header from "./components/Header";
import OccupationsList from "./components/OccupationsList";
import FilterButton from "./components/FilterButton";
import SaveSearchButton from "./components/SaveSearchButton.jsx"; 
import "./style/globals.css";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState(undefined);
  const [allRoutes, setAllRoutes] = useState([]);
  const [AppliedFilters, setAppliedFilters] = useState([]);

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
    setSearchResults(data);
  };

  const handleApplyFilters = (selectedOptions) => {
    setAppliedFilters(selectedOptions);
    console.log("Applied Filters:", AppliedFilters);
  };

  return (
    <div className="app">
      <Header searchHandler={handleSearch} allRoutes={allRoutes} />
      <div className="filter-section">
        <FilterButton options={allRoutes} onApply={handleApplyFilters} />
        <SaveSearchButton /> {}
      </div>
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
