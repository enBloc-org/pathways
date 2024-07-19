import "../style/OccupationCard.css"
export default function OccupationCard({ 
  name, 
  level, 
  overview, 
  technicalLevelName 
}) {
if (!name || !level || !overview || !technicalLevelName) {
  return <div>Loading...</div>;
}

return (
  <div className="occupation-card">
    <h2>{name}</h2> 
    <div className="level">
    <p>Level {level}</p>
    </div>
    <div>
    <p className="overview">
      <span>
      <i>
        In brief: 
      </i>
      </span>
      {` ${overview}`}</p>
    </div>
    <div className="technical-level-name">
      <span><strong>Technical Level Name:</strong> {technicalLevelName}</span>
      <button className="expand-button">
      ⤢
    </button>
    </div>
  </div>
  );
}