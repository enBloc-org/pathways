import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

import SaveSearchButton from "../components/SaveSearchButton"
import OccupationsList from "../components/OccupationsList"
import spinner from "../images/loadingSpinner.svg"

export default function Search({ searchResults, searchStatus }) {
  const [searchParams] = useSearchParams()
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    const currentUrl = window.location.href
    const allUrls = new Set(
      JSON.parse(localStorage.getItem("pathways-search")).map(
        search => search.url
      )
    )

    console.log(allUrls.has(currentUrl))
    setIsSaved(allUrls.has(currentUrl))
  }, [searchResults])
  
  const renderStatusResults = () => {
    switch (searchStatus) {
      case "idle":
        return <p>Enter search terms</p>
      case "loading":
        return <img src={spinner}></img>
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

    const previousSearches = JSON.parse(
      localStorage.getItem("pathways-search")
    )
    setIsSaved(previous => !previous)

    if (!previousSearches)
      return localStorage.setItem(
        "pathways-search",
        JSON.stringify([currentEntry])
      )

    const matchingEntry = previousSearches.find(
      search => search.url === currentEntry.url
    )
    if (matchingEntry) {
      return localStorage.setItem(
        "pathways-search",
        JSON.stringify(
          previousSearches.filter(
            search => search.url !== currentEntry.url
          )
        )
      )
    }

    previousSearches.push(currentEntry)
    localStorage.setItem(
      "pathways-search",
      JSON.stringify(previousSearches)
    )
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
