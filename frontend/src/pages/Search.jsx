import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

import SaveSearchButton from "../components/SaveSearchButton"
import OccupationsList from "../components/OccupationsList"
import spinner from "../images/loadingSpinner.svg"

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
  
  useEffect(() => {
    searchQuery && setSearchParams({ query: searchQuery })
    const currentUrl = window.location.href
    const allUrls = new Set(allSaved.map(search => search.url))
    setIsSaved(allUrls.has(currentUrl))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults])

  useEffect(() => {
    const newValue = JSON.stringify(allSaved)
    localStorage.setItem("pathways-search", newValue)
  }, [allSaved])

  const renderStatusResults = () => {
    // eslint-disable-next-line default-case
    switch (searchStatus) {
      case "idle":
        return <p>Enter search terms</p>
      case "loading":
        return <img 
                  src={spinner}
                  alt="Loading spinner"
                  ></img>
      case "fulfilled":
        return <OccupationsList occupationsArray={searchResults} />
    }
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

  return (
    <>
      <h1>Search Page</h1>
      <div>
        <SaveSearchButton onSave={saveHandler} isSaved={isSaved} />
      </div>
      {renderStatusResults()}
    </>
  )
}
