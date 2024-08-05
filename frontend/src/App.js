import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"

import fetchOccupationByQuery from "./utils/fetchOccupationByQuery"
import Header from "./components/Header"
import About from "./pages/About"
import Search from "./pages/Search"
import OccupationPage from "./pages/OccupationPage"

import "./style/globals.css"
import "./App.css"

function App() {
  const [searchResults, setSearchResults] = useState(undefined)
  const navigate = useNavigate()

  const handleSearch = async query => {
    const data = await fetchOccupationByQuery(query)
    setSearchResults(data)
    navigate("/search")
  }

  return (
    <div className="app">
      <Header searchHandler={handleSearch} />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={<Search searchResults={searchResults} />}
        />
        <Route
          path="/occupation-details/:occupation"
          element={<OccupationPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
