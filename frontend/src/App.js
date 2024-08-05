import { useState, usEffect, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import fetchOccupationByQuery from "./utils/fetchOccupationByQuery"
import Header from "./components/Header"
import About from "./pages/About"
import Search from "./pages/Search"
import OccupationPage from "./pages/OccupationPage"

import "./style/globals.css"
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState(undefined)
  const [searchResults, setSearchResults] = useState(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    const handleSearch = async () => {
      setIsLoading(true)
      const data = await fetchOccupationByQuery(searchQuery)
      setSearchResults(data)
      setIsLoading(false)
      navigate("/search")
    }

    handleSearch()
  }, [searchQuery])

  const handleQuery = input => {
    setSearchQuery(input)
  }

  return (
    <div className="app">
      <Header searchHandler={handleQuery} />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={<Search searchResults={searchResults} isLoading={isLoading}/>}
        />
        <Route
          path="/occupation-details/:occupation"
          element={<OccupationPage />}
        />
      </Routes>
    </div>
  )
}

export default App
