import React, { useEffect, useState } from 'react';
import FilterButton from "./FilterButton";
import SaveSearchButton from "./SaveSearchButton.jsx";

export default function FilterContainer({ allRoutes, appliedFilters, setAppliedFilters, occupationSearch }) {
  const [savedSearches, setSavedSearches] = useState([]);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('savedSearches')) || [];
    setSavedSearches(storedSearches);
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
    const updatedSearches = [...savedSearches, searchState];
    setSavedSearches(updatedSearches);
    localStorage.setItem('savedSearches', JSON.stringify(updatedSearches));
  };

  const handleUnsaveSearch = () => {
    const searchState = {
      query: occupationSearch,
      filters: appliedFilters
    };
    const updatedSearches = savedSearches.filter(search => 
      search.query !== searchState.query || 
      JSON.stringify(search.filters) !== JSON.stringify(searchState.filters)
    );
    setSavedSearches(updatedSearches);
    localStorage.setItem('savedSearches', JSON.stringify(updatedSearches));
  };

  return (
    <div className="filter-section">
      <FilterButton options={allRoutes} onApply={handleApplyFilters} />
      <SaveSearchButton onSave={handleSaveSearch} onUnsave={handleUnsaveSearch} />
    </div>
  );
}
