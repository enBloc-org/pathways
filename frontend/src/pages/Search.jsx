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

  return (
    <>
      <h1>Search Page</h1>
      {renderStatusResults()}
    </>
  )
}
