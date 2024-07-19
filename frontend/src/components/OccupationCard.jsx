import "../style/OccupationCard.css"
import expandButton from '../images/expand.svg'

export default function OccupationCard({
  name,
  level,
  overview,
  technicalLevelName,
}) {
  if (!name || !level || !overview || !technicalLevelName) {
    return <div>Loading...</div>
  }

  return (
    <div className="occupation-card">
      <h2>{name}</h2>
      <p className="level">Level {level}</p>
      <div>
        <p className="overview">
          <span>
            <i>In brief:</i>
          </span>{" "}
          <br />
          {` ${overview}`}
        </p>
      </div>
      <div className="technical-level-name">
        <p>
          <strong>Technical Level:</strong> <br />{" "}
          {technicalLevelName}
        </p>
        <img src={expandButton}/>
      </div>
    </div>
  )
}
