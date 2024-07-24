import fetchOccupationByQuery from "./utils/fetchOccupationByQuery"
import {useEffect, useState } from "react"
import Header from "./components/Header"
import OccupationsList from "./components/OccupationsList"
import fetchAllRoutes from "./utils/fetchAllRoutes.js"
import "./style/globals.css"
import "./App.css"

function App() {
  const [searchResults, setSearchResults] = useState(undefined)
  const [allRoutes, setAllRoutes] = useState([]);
 

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchedRoutes = await fetchAllRoutes();

        setAllRoutes(fetchedRoutes);

      } catch (error) {
        console.error("Failed to fetch routes:", error);
      }
    };
    fetch();
  }, []);


  const handleSearch = async query => {
    const data = await fetchOccupationByQuery(query)
    setSearchResults(data)
  }


  return (
    <div className="app">
      <Header searchHandler={handleSearch} allRoutes={allRoutes}/>
      {searchResults && (
        <div style={{width:"100dvw"}}>
          <OccupationsList occupationsArray={searchResults.results} />
          <div style={{width: "70vmin", }}></div>
        </div>
      )}
    </div>
  )
}


export default App
