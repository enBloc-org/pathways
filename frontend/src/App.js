import fetchOccupationByQuery from "./utils/fetchOccupationByQuery"
import { useState } from "react"
import Header from "./components/Header"
import OccupationsList from "./components/OccupationsList"
import OccupationDetails from "./components/OccupationDetails"

import "./style/globals.css"
import "./App.css"

function App() {
  const [searchResults, setSearchResults] = useState(undefined)
  const [occupationDetails, setOccupationDetails] =
    useState(undefined)

  const handleSearch = async query => {
    const data = await fetchOccupationByQuery(query)
    setSearchResults(data)
  }

  return (
    <div className="app">
      <Header searchHandler={handleSearch} />
      {searchResults && (
        <div style={{ width: "100dvw" }}>
          <OccupationsList
            occupationsArray={searchResults.results}
            eventHandler={setOccupationDetails}
          />
          <div style={{ width: "70vmin" }}>
            {occupationDetails && (
              <OccupationDetails occupation={occupationDetails} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
