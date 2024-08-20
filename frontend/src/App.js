import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import fetchOccupationByQuery from "./utils/fetchOccupationByQuery"
import Header from "./components/Header"
import About from "./pages/About"
import Search from "./pages/Search"
import OccupationPage from "./pages/OccupationPage"
import InfoPage from "./components/InfoPage"

import "./style/globals.css"
import "./App.css"

function App() {
  const [searchStatus, setSearchStatus] = useState("idle")
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const navigate = useNavigate()

  const handleSavedSearchClick= (url) =>{
    setSearchQuery('');
    console.log(url)
    window.location.href = url;
;
    }

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

    if (searchQuery !== '') {
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
      <Header searchHandler={handleQuery} />

      <Routes>
        <Route path='/' element={<InfoPage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <Search
              searchResults={searchResults}
              searchStatus={searchStatus}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSavedSearchClick={handleSavedSearchClick}
            />
          }
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
