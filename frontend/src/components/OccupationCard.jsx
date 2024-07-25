import "../style/OccupationCard.css"
import expandButton from "../images/expand.svg"

export default function OccupationCard({
  occupation,
  expandHandler,
}) {
  if (
    !occupation.name ||
    !occupation.overview ||
    !occupation.mapHierarchy.technicalLevelName
  ) {
    return <div>Loading...</div>
  }

  const clickHandler = () => {
    expandHandler(true)
  }

  return (
    <div className="occupation-card">
      <h2>{occupation.name}</h2>
      <div>
        <p className="overview">
          <span>
            <i>In brief:</i>
          </span>{" "}
          {` ${occupation.overview}`}
        </p>
      </div>
      <div className="technical-level-name">
        <p>
          <strong>Technical Level:</strong> <br />{" "}
          {occupation.mapHierarchy.technicalLevelName}
        </p>
        <button type="button" onClick={clickHandler}>
          <img src={expandButton} />
        </button>
      </div>
    </div>
  )
}
