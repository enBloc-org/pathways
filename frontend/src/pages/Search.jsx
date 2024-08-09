import { useState, useEffect } from "react"

import OccupationsList from "../components/OccupationsList"
import spinner from "../images/loadingSpinner.svg"
import FilterButton from "../components/FilterButton"
import fetchAllRoutes from "../utils/fetchAllRoutes"

export default function Search({ searchResults, searchStatus }) {
  const [allRoutes, setAllRoutes] = useState([])
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(() => {
    const fetchOptions = async () => {
      const filterOptions = await fetchAllRoutes()
      setAllRoutes(filterOptions)
    }
    fetchOptions()

    setFilteredResults(searchResults)
  }, [searchResults])

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

  const renderStatusResults = () => {
    switch (searchStatus) {
      case "idle":
        return <p>Enter search terms</p>
      case "loading":
        return <img src={spinner}></img>
      case "fulfilled":
        return <OccupationsList occupationsArray={filteredResults} />
    }
  }

  return (
    <>
      <h1>Search Page</h1>
      <div>
        <FilterButton
          options={allRoutes}
          onApply={handleApplyFilters}
        />
      </div>
      {renderStatusResults()}
    </>
  )
}
