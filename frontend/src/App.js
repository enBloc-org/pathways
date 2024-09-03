import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import { useSearchContext } from "./context/searchContext"
import fetchOccupationByQuery from "./utils/fetchOccupationByQuery"
import Header from "./components/Header"
import About from "./pages/About"
import Search from "./pages/Search"
import OccupationPage from "./pages/OccupationPage"
import InfoPage from "./components/InfoPage"

import "./style/normalize.css"
import "./style/globals.css"
import "./App.css"

function App() {
  const {
    searchState: { searchStatus, searchQuery },
    dispatch,
  } = useSearchContext()
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()

  const handleSavedSearchClick = url => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: "" })
    const route = url.match(/^https?:\/\/[^/]+(\/.*)$/)[1]
    navigate(route)
  }

  useEffect(() => {
    const handleSearch = async () => {
      try {
        dispatch({ type: "SET_SEARCH_STATUS", payload: "loading" })
        const data = await fetchOccupationByQuery(searchQuery)
        setSearchResults(data)
        dispatch({
          type: "SET_SEARCH_STATUS",
          payload: "fulfilled",
        })
        navigate("/search")
      } catch (error) {
        dispatch({ type: "SET_SEARCH_STATUS", payload: "idle" })
        navigate("/search")
      }
    }

    if (searchQuery !== "") {
      handleSearch()
    } else {
      dispatch({ type: "SET_SEARCH_STATUS", payload: "idle" })
    }
  }, [searchQuery])

  return (
    <div className="app">
      <div className="app--header">
        <Header />
      </div>

      <div className="app--routes">
        <Routes>
          <Route path="/" element={<InfoPage />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/search"
            element={
              <Search
                searchResults={searchResults}
                searchStatus={searchStatus}
                searchQuery={searchQuery}
                handleSavedSearchClick={handleSavedSearchClick}
              />
            }
          />
          <Route
            path="/occupation-details/:occupation"
            element={<OccupationPage searchResults={searchResults} />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
