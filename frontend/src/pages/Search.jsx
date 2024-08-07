import OccupationsList from "../components/OccupationsList"

export default function Search({ searchResults }) {
  return (
    <>
      <h1>Search Page</h1>
      <OccupationsList occupationsArray={searchResults} />
    </>
  )
}
