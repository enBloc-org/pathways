import OccupationsList from "../components/OccupationsList"

export default function Search({ searchResults, isLoading }) {
  return (
    <>
      <h1>Search Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        searchResults && (
          <OccupationsList occupationsArray={searchResults} />
        )
      )}
    </>
  )
}
