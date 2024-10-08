import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

import SaveSearchButton from "../components/SaveSearchButton"
import LoadingSpinner from "../components/LoadingSpinner"
import OccupationsList from "../components/OccupationsList"
import FilterButton from "../components/FilterButton"
import fetchAllRoutes from "../utils/fetchAllRoutes"
import SavedSearches from "../components/SavedSearch"
import "../style/Search.css"
import { useSearchContext } from "../context/searchContext"

export default function Search({ handleSavedSearchClick }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isSaved, setIsSaved] = useState(false)
  const [allSaved, setAllSaved] = useState(
    JSON.parse(localStorage.getItem("pathways-search")) ?? []
  )
  const [allRoutes, setAllRoutes] = useState([])
  const {
    searchState: { searchResults, searchQuery, searchStatus },
  } = useSearchContext()
  const [filteredResults, setFilteredResults] =
    useState(searchResults)
  const [filterOptions, setFilterOptions] = useState([])

  const verifyIsSaved = () => {
    const currentUrl = window.location.href.replaceAll(/\+/g, " ")
    const allUrls = new Set(allSaved.map(search => search.url))
    return allUrls.has(currentUrl)
  }

  useEffect(() => {
    const fetchOptions = async () => {
      const filterOptions = await fetchAllRoutes()
      setAllRoutes(filterOptions)
    }
    fetchOptions()

    searchQuery &&
      setSearchParams({ query: searchQuery, filter: filterOptions })
    setIsSaved(verifyIsSaved())
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
    setIsSaved(false)
  }

  const saveHandler = () => {
    const currentFilterLength = filterOptions.length
    const currentUrl = window.location.href
    const currentQuery = searchParams.get("query")
    const currentEntry = {
      name: `${currentQuery} ${currentFilterLength > 0 ? `filters(${currentFilterLength})` : ""}`,
      url: currentUrl.replaceAll(/\+/g, " "),
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
        return <LoadingSpinner />
      case "fulfilled":
        return <OccupationsList occupationsArray={filteredResults} />
    }
  }

  return (
    <main className="search-page grid-container">
      <div className="search-page--options-bar">
        <FilterButton
          options={allRoutes}
          onApply={handleApplyFilters}
          searchQuery={searchQuery}
          setFilterOptions={setFilterOptions}
        />
        <SaveSearchButton
          onSave={saveHandler}
          isSaved={isSaved}
          isDisabled={!searchQuery}
        />
        <SavedSearches
          savedSearches={allSaved}
          handleSavedSearchClick={handleSavedSearchClick}
        />
      </div>
      {searchQuery && (
        <p className="search-page--results-count">
          {filteredResults.length} matched results for {searchQuery}:
        </p>
      )}
      <div className="search-page--results">
        {renderStatusResults()}
      </div>
    </main>
  )
}
