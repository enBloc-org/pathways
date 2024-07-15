import "./style/globals.css"
import fetchOccupationByQuery from "./utils/fetchOccupationByQuery"
import { useEffect, useState } from "react"
import Header from "./components/Header"

function App() {
  const [searchResults, setSearchResults] = useState(undefined)

  const handleSearch = async query => {
    const data = await fetchOccupationByQuery(query)
    setSearchResults(data)
  }

  return (
    <div className="App">
      <Header searchHandler={handleSearch} />
      {searchResults && <p>{searchResults.results[0].object}</p>}
    </div>
  )
}

export default App
