import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

import SaveSearchButton from "../components/SaveSearchButton"
import OccupationsList from "../components/OccupationsList"
import spinner from "../images/loadingSpinner.svg"

export default function Search({ searchResults, searchStatus }) {
  const [searchParams] = useSearchParams()
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    setIsSaved(false)
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
    const currentUrl = new URL(window.location.href)
    const currentQuery = searchParams.get("query")
    const currentEntry = {
      name: currentQuery,
      url: currentUrl,
    }

    const previousSearches = JSON.parse(
      localStorage.getItem("pathways-search")
    )

    if (!previousSearches)
      return localStorage.setItem("pathways-search", JSON.stringify([currentEntry]))

    if (previousSearches(currentEntry) >= 0) {
      return localStorage.setItem(
        "pathways-search",
        previousSearches.filter(search => search !== JSON.stringify(currentEntry))
      )
    }

    previousSearches.push(currentEntry)
    localStorage.setItem(
      "pathways-search",
      JSON.stringify(previousSearches)
    )

    setIsSaved(previous => !previous)
  }

  return (
    <>
      <h1>Search Page</h1>
      <div>
        <SaveSearchButton
          onSave={saveHandler}
          onUnsave={saveHandler}
          isSaved={isSaved}
        />
      </div>
      {renderStatusResults()}
    </>
  )
}
