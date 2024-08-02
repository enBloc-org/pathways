import OccupationsList from "../components/OccupationsList"

export default function Search({ searchResults }) {
  return (
    <>
      <h1>Search Page</h1>
      {searchResults.length === 0 ? (
        <p>
          There are no T Level placements that match this job title
        </p>
      ) : (
        <OccupationsList occupationsArray={searchResults} />
      )}
    </>
  )
}
