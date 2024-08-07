import { useState, useEffect } from "react"
import FilterButton from "../components/FilterButton"
import fetchAllRoutes from "../utils/fetchAllRoutes"

export default function Search({ searchResults }) {
  const [allRoutes, setAllRoutes] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  const handleApplyFilters = selectedOptions => {
    if (selectedOptions.length > 0) {
      return setFilteredResults(
        searchResults.filter(result =>
          selectedOptions.includes(result.mapHierarchy.routeId)
        )
      )
    }
    setFilteredResults(searchResults)
  }

  useEffect(() => {
    const fetchOptions = async () => {
      const filterOptions = await fetchAllRoutes()
      setAllRoutes(filterOptions)
    }
    fetchOptions()

    setFilteredResults(searchResults)
  }, [searchResults])

  return (
    <>
      <h1>Search Page</h1>
      <div>
        <FilterButton
          options={allRoutes}
          onApply={handleApplyFilters}
        />
      </div>

      <ul>
        {filteredResults &&
          filteredResults.map(result => (
            <li key={result.routeId}>{result.name}</li>
          ))}
      </ul>
    </>
  )
}
