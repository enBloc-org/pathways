import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import TLevelContainer from "../components/TLevelContainer"
import { useSearchContext } from "../context/searchContext"
import "../style/globals.css"
import "../style/OccupationPage.css"
import LoadingSpinner from "../components/LoadingSpinner"
import sanitize from "../utils/sanitize"
import fetchOccupationDetails from "../utils/fetchOccupationDetails"

export default function OccupationPage() {
  const {
    searchState: { searchResults },
  } = useSearchContext()
  const params = useParams()
  const [currentOccupation, setCurrentOccupation] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchDetails = async () => {
      await fetchOccupationDetails(params.occupation)
        .then(fetchedOccupation => {
          setCurrentOccupation(fetchedOccupation)
          setIsLoaded(true)
        })
        .catch(error => {
          console.error(error)
          setIsLoaded(false)
        })
    }

    fetchDetails()
  }, [searchResults, params])

  return (
    <main className="occupation-page__main main">
      {isLoaded ? (
        <>
          <div className="flex-col occupation-header">
            <h1>{currentOccupation.name}</h1>
            <h2>
              <i>{currentOccupation.mapHierarchy.pathwayName}</i>
            </h2>
          </div>
          <div className="flex-col occupation-page__banner">
            <h3>Overview:</h3>
            <p>{currentOccupation.overview}</p>
          </div>
          <section className="occupation-page__section">
            <h3>In Depth</h3>
            <div />
            <div
          className="occupation-page__summary"
              dangerouslySetInnerHTML={{ __html: sanitize(currentOccupation.summary) }}
            />
          </section>
          <TLevelContainer products={currentOccupation.products} />
        </>
      ) : (
        <div className="occupation-page--loading-spinner">
          <LoadingSpinner />
        </div>
      )}
    </main>
  )
}
