import "../style/OccupationCard.css"
import expandButton from "../images/expand.svg"

export default function OccupationCard({
  name,
  overview,
  technicalLevelName,
}) {
  if (!name || !overview || !technicalLevelName) {
    return <div>Loading...</div>
  }

  return (
    <div className="occupation-card">
      <h2>{name}</h2>
      <div>
        <p className="overview">
          <span>
            <i>In brief:</i>
          </span>{" "}
          {` ${overview}`}
        </p>
      </div>
      <div className="technical-level-name">
        <p>
          <strong>Technical Level:</strong> <br />{" "}
          {technicalLevelName}
        </p>
        <div>
          <img src={expandButton} />
        </div>
      </div>
    </div>
  )
}
