import TLevelContainer from "../components/TLevelContainer"
import "../style/globals.css"
import "../style/OccupationPage.css"
import { useParams } from "react-router-dom"

export default function OccupationPage({ searchResults }) {
  const params = useParams()

  const index = searchResults.findIndex(
    occupation => occupation.stdCode === params.occupation
  )

  const occupationSummary = searchResults[index].summary.replace(
    /<\/?p>/g,
    ""
  )
  return (
    <main className="occupation-page__main main">
      <div className="flex-col occupation-header">
        <h1>{searchResults[index].name}</h1>
        <h2>
          Level {searchResults[index].level} -{" "}
          <i>
            {searchResults[index].mapHierarchy.technicalLevelName}
          </i>
        </h2>
        <p className="route-name">
          {searchResults[index].mapHierarchy.routeName}
        </p>
      </div>
      <div className="flex-col occupation-page__banner">
        <h3>Overview:</h3>
        <p>{searchResults[index].overview}</p>
      </div>
      <section className="occupation-page__section">
        <h3>In Depth</h3>
        <div />
        <p className="occupation-page__summary">
          {occupationSummary}
        </p>
      </section>
      <TLevelContainer products={searchResults[index].products} />
      <div className="pathway-name">
        <p>
          <strong>Pathway name: </strong>
          <span>{searchResults[index].mapHierarchy.pathwayName}</span>
        </p>
      </div>
    </main>
  )
}
