import SaveSearchButton from '../components/SaveSearchButton'
import OccupationsList from "../components/OccupationsList"
import spinner from "../images/loadingSpinner.svg"

export default function Search({ searchResults, searchStatus }) {
  const renderStatusResults = () => {
    switch (searchStatus) {
      case "idle":
        return <p>Enter search terms</p>
      case "loading":
        return <img src={spinner}></img>
      case "fulfilled":
        return <OccupationsList occupationsArray={searchResults} />
    }
  }

  const saveHandler = () => {
    const url = new URL(window.location.href)
    console.log(url)
    localStorage.setItem('pathways-search', url)
  }
  
  const unsaveHandler = () => {
    localStorage.removeItem('pathways-search')
  }

  return (
    <>
      <h1>Search Page</h1>
      <div>
        <SaveSearchButton onSave={saveHandler} onUnsave={unsaveHandler}/>
      </div>
      {renderStatusResults()}
    </>
  )
}
