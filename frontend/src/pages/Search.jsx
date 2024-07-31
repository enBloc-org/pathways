export default function Search( {searchResults} ) {
  return (
    <>
      <h1>Search Page</h1>
      <ul>
        {searchResults && searchResults.map(result => (
          <li>{result.name}</li>
        ))}
      </ul>
    </>
  )
}
