import fetchOccupationByQuery from "./utils/fetchOccupationByQuery"
import { useState } from "react"
import Header from "./components/Header"

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
      {searchResults && <p>{searchResults.results[0].object}</p>}
    </div>
  )
}

export default App
