import React, { useEffect, useState, useCallback } from "react";
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
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [occupationSearch, setOccupationSearch] = useState('');
  const [savedSearches, setSavedSearches] = useState(() => {
    const saved = localStorage.getItem('savedSearches');
    return saved ? JSON.parse(saved) : [];
  });

  const handleSearch = useCallback(async (query) => {
    const data = await fetchOccupationByQuery(query);
    setOccupationSearch(query);
    setSearchResults(data);
    updateHash(query, appliedFilters);
  }, [appliedFilters]);

  const updateHash = (query, filters) => {
    const filtersString = filters.map(option => option.replace(/\s+/g, '-')).join(',');
    window.location.hash = `query=${encodeURIComponent(query)}&filter=${filtersString}`;
  };

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

    const query = new URLSearchParams(window.location.hash.slice(1)).get('query') || '';
    const filter = new URLSearchParams(window.location.hash.slice(1)).get('filter') || '';
    setOccupationSearch(query);
    setAppliedFilters(filter ? filter.split(',') : []);
    if (query) {
      handleSearch(query);
    }
  }, [handleSearch]);

  const handleApplyFilters = (selectedOptions) => {
    setAppliedFilters(selectedOptions);
    console.log("Applied Filters:", selectedOptions);
    updateHash(occupationSearch, selectedOptions);
  };

  const handleSaveSearch = () => {
    const currentHash = window.location.hash;
    const updatedSearches = [...savedSearches, currentHash];
    setSavedSearches(updatedSearches);
    localStorage.setItem('savedSearches', JSON.stringify(updatedSearches));
  };

  return (
    <div className="app">
      <Header searchHandler={handleSearch} allRoutes={allRoutes} />
      <div className="filter-section">
        <FilterButton options={allRoutes} onApply={handleApplyFilters} />
        <SaveSearchButton onClick={handleSaveSearch} />
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
