import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

import SaveSearchButton from "../components/SaveSearchButton"
import OccupationsList from "../components/OccupationsList"
import spinner from "../images/loadingSpinner.svg"
import FilterButton from "../components/FilterButton"
import fetchAllRoutes from "../utils/fetchAllRoutes"

export default function Search({
  searchResults,
  searchStatus,
  searchQuery,
}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isSaved, setIsSaved] = useState(false)
  const [allSaved, setAllSaved] = useState(
    JSON.parse(localStorage.getItem("pathways-search")) ?? []
  )
  const [allRoutes, setAllRoutes] = useState([])
  const [filteredResults, setFilteredResults] =
    useState(searchResults)
  const [filterOptions, setFilterOptions] = useState([])

  useEffect(() => {
    const fetchOptions = async () => {
      const filterOptions = await fetchAllRoutes()
      setAllRoutes(filterOptions)
    }
    fetchOptions()
    console.log({ filteredResults })
  }, [])

  useEffect(() => {
    searchQuery &&
      setSearchParams({ query: searchQuery, filter: filterOptions })
    const currentUrl = window.location.href
    const allUrls = new Set(allSaved.map(search => search.url))
    setIsSaved(allUrls.has(currentUrl))
    // eslint-disable-next-line react-hooks/exhaustive-deps

    if (filterOptions && filterOptions.length > 0) {
      const newResults = searchResults.filter(result =>
        filterOptions.includes(result.mapHierarchy.routeId)
      )
      return setFilteredResults(newResults)
    }

    setFilteredResults(searchResults)
  }, [searchResults, filterOptions])

  useEffect(() => {
    const newValue = JSON.stringify(allSaved)
    localStorage.setItem("pathways-search", newValue)
  }, [allSaved])

  const handleApplyFilters = selectedOptions => {
    if (selectedOptions.length > 0) {
      return setFilterOptions(selectedOptions)
    }
    setFilterOptions([])
  }

  const saveHandler = () => {
    const currentUrl = window.location.href
    const currentQuery = searchParams.get("query")
    const currentEntry = {
      name: currentQuery,
      url: currentUrl,
    }
    setIsSaved(previous => !previous)
    if (isSaved) {
      const newSavedHistory = allSaved.filter(
        search => search.url !== currentEntry.url
      )
      return setAllSaved(newSavedHistory)
    }
    setAllSaved(previous => [...previous, currentEntry])
  }

  const renderStatusResults = () => {
    // eslint-disable-next-line default-case
    switch (searchStatus) {
      case "idle":
        return <p>Enter search terms</p>
      case "loading":
        return <img src={spinner} alt="Loading spinner" />
      case "fulfilled":
        return <OccupationsList occupationsArray={filteredResults} />
    }
  }

  return (
    <>
      <h1>Search Page</h1>
      <div>
        <SaveSearchButton onSave={saveHandler} isSaved={isSaved} />
        <FilterButton
          options={allRoutes}
          onApply={handleApplyFilters}
        />
      </div>
      {renderStatusResults()}
    </>
  )
}
