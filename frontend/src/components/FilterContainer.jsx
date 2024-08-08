import React, { useEffect, useState } from 'react';
import FilterButton from "./FilterButton";
import SaveSearchButton from "./SaveSearchButton.jsx";

export default function FilterContainer({ allRoutes, appliedFilters, setAppliedFilters, occupationSearch }) {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const savedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(savedSearches);
  }, []);

  const handleApplyFilters = (selectedOptions) => {
    setAppliedFilters(selectedOptions);
    window.location.hash = `${occupationSearch}&filter=${selectedOptions.join(",")}`;
  };

  const handleSaveSearch = () => {
    const searchState = {
      query: occupationSearch,
      filters: appliedFilters
    };
    const updatedSearches = [...recentSearches, searchState];
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
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
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  return (
    <div className="filter-section">
      <FilterButton options={allRoutes} onApply={handleApplyFilters} />
      <SaveSearchButton onSave={handleSaveSearch} onUnsave={handleUnsaveSearch} />
    </div>
  );
}
