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
  const [appliedFilters, setAppliedFilters] = useState([]);
  const [occupationSearch, setOccupationSearch] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [saveConfirmation, setSaveConfirmation] = useState(false);

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

    const savedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    console.log("Loaded searches from local storage:", savedSearches);
    setRecentSearches(savedSearches);
  }, []);

  const handleSearch = async (query) => {
    const data = await fetchOccupationByQuery(query);
    setOccupationSearch(query);
    setSearchResults(data);
    window.location.hash = query;
  };

  const handleApplyFilters = (selectedOptions) => {
    setAppliedFilters(selectedOptions);
    console.log("Applied Filters:", selectedOptions);
    window.location.hash = `${occupationSearch}&filter=${selectedOptions.join(",")}`;
  };

  const handleSaveSearch = () => {
    const searchState = {
      query: occupationSearch,
      filters: appliedFilters
    };
    const updatedSearches = [...recentSearches, searchState];
    console.log("Search state before saving:", searchState);
    console.log("Updated searches before saving:", updatedSearches);
    
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    
    console.log("Search state saved to local storage:", localStorage.getItem('recentSearches'));
    
    setSaveConfirmation(true);
    setTimeout(() => setSaveConfirmation(false), 3000); 
  };

  return (
    <div className="app">
      <Header searchHandler={handleSearch} allRoutes={allRoutes} />
      <div className="filter-section">
        <FilterButton options={allRoutes} onApply={handleApplyFilters} />
        <SaveSearchButton onClick={handleSaveSearch} />
      </div>
      {saveConfirmation && <div className="save-confirmation">Search saved successfully!</div>}
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
