import {useNavigate} from 'react-router-dom'
import "../style/OccupationCard.css"
export default function OccupationCard({
  name,
  overview,
  technicalLevelName,
  stdCode,
}) {
  const navigate = useNavigate()

  if (!name || !overview || !technicalLevelName) {
    return <div>Loading...</div>
  }

  return (
    <button
      className="occupation-card"
      onClick={() => navigate(`/occupation-details/${stdCode}`)}
    >
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
          <strong>Technical Level:</strong> {technicalLevelName} <br />{" "}
        </p>
      </div>
    </button>
  )
}
