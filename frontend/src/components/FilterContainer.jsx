import React, { useEffect, useState } from 'react';
import FilterButton from "./FilterButton";
import SaveSearchButton from "./SaveSearchButton.jsx";

export default function FilterContainer({ allRoutes, appliedFilters, setAppliedFilters, occupationSearch }) {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {

    const savedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    console.log("Loaded searches from local storage:", savedSearches);
    setRecentSearches(savedSearches);
  }, []);

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
  };

  const handleUnsaveSearch = () => {
    const searchState = {
      query: occupationSearch,
      filters: appliedFilters
    };
    const updatedSearches = recentSearches.filter(search => 
      search.query !== searchState.query || 
      JSON.stringify(search.filters) !== JSON.stringify(searchState.filters)
    );
    console.log("Search state before unsaving:", searchState);
    console.log("Updated searches before unsaving:", updatedSearches);
    
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    
    console.log("Search state removed from local storage:", localStorage.getItem('recentSearches'));
  };

  return (
    <div className="filter-section">
      <FilterButton options={allRoutes} onApply={handleApplyFilters} />
      <SaveSearchButton onSave={handleSaveSearch} onUnsave={handleUnsaveSearch} />
    </div>
  );
}
