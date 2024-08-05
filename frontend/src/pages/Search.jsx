import OccupationsList from "../components/OccupationsList"

export default function Search({ searchResults, searchStatus }) {
  switch(searchStatus){
    case 'idle':
      return <p>Enter search terms</p>
    case 'loading':
      return <p>Loading...</p>
    case 'fulfilled':
      return <OccupationsList occupationsArray={searchResults} />
  }
  // return (
  //   <>
  //     <h1>Search Page</h1>
  //     {isLoading ? (
  //       <p>Loading...</p>
  //     ) : (
  //       searchResults && (
  //         <OccupationsList occupationsArray={searchResults} />
  //       )
  //     )}
  //   </>
  // )
}
