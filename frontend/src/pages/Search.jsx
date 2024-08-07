import React, { useState } from "react";

import FilterButton from '../components/FilterButton'
import fetchAllRoutes from '../utils/fetchAllRoutes'

export default function Search({ searchResults }) {
  const [filteredResults, setFilteredResults] = useState(searchResults);
  const [allRoutes, setAllRoutes] = useState()

  const handleApplyFilters = (selectedOptions) => {
    if (selectedOptions.length === 0) {
      setFilteredResults(searchResults);
    } else {
      setFilteredResults(searchResults.filter(result =>
        selectedOptions.includes(result.routeId)
      ));
    }
  };

  useEffect(()=>{
    const fetchOptions = async () => {
      const filterOptions = await fetchAllRoutes()
      setAllRoutes(filterOptions)
    }

    fetchOptions()
  }, [])

  return (
    <>
      <h1>Search Page</h1>
      <FilterButton options={allRoutes} onApply={handleApplyFilters} />
      
      <ul>
        {filteredResults && filteredResults.map(result => (
          <li key={result.routeId}>{result.name}</li>
        ))}
      </ul>
    </>
  );
}

