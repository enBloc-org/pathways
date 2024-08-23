import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

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
  const [searchStatus, setSearchStatus] = useState("idle")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setSearchStatus("loading")
        const data = await fetchOccupationByQuery(searchQuery)
        setSearchResults(data)
        setSearchStatus("fulfilled")
        navigate("/search")
      } catch (error) {
        setSearchStatus("idle")
        navigate("/search")
      }
    }

    if (searchQuery !== "") {
      handleSearch()
    } else {
      setSearchStatus("idle")
    }
  }, [searchQuery])

  const handleQuery = input => {
    setSearchQuery(input)
  }

  return (
    <div className="app">
      <div className="app--header">
        <Header searchHandler={handleQuery} />
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
