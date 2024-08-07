import React, { useState, useEffect } from "react";
import FilterButton from '../components/FilterButton';
import fetchAllRoutes from '../utils/fetchAllRoutes';

export default function Search({ searchResults }) {
  const [allRoutes, setAllRoutes] = useState([]);
  const [filteredResults, setFilteredResults] = useState(searchResults);

  const handleApplyFilters = (selectedOptions) => {
    if (selectedOptions.length === 0) {
      setFilteredResults(searchResults);
    } else {
      setFilteredResults(searchResults.filter(result =>
        selectedOptions.includes(result.routeId)
      ));
    }
  };

  useEffect(() => {
    const fetchOptions = async () => {
      const filterOptions = await fetchAllRoutes();
      setAllRoutes(filterOptions);
    };

    fetchOptions();
  }, []);

  return (
    <>
      <h1>Search Page</h1>
      {allRoutes.length > 0 ? (
        <FilterButton options={allRoutes} onApply={handleApplyFilters} />
      ) : (
        <p>Loading filters...</p>
      )}
      <ul>
        {filteredResults && filteredResults.map(result => (
          <li key={result.routeId}>{result.name}</li>
        ))}
      </ul>
    </>
  );
}
