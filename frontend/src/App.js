import fetchOccupationByQuery from "./utils/fetchOccupationByQuery"
import { useState } from "react"
import Header from "./components/Header"
import InfoPage from "./components/InfoPage"

import './style/globals.css'
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState(undefined)

  const handleSearch = async query => {
    const data = await fetchOccupationByQuery(query)
    setSearchResults(data)
  }

  return (
    <div className="app">
      <Header searchHandler={handleSearch} />
      {!searchResults ? (
        <InfoPage />
      ) : (
        <div className="search-results">
          {searchResults.results.map(result => (
            <p key={result.id}>{result.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default App