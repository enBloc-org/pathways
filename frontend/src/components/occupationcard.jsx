
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
    <p><strong>Level:</strong> {level}</p>
    <p className="overview"><strong>In brief:</strong> {overview}</p>
    <div className="technical-level-name">
      <span><strong>Technical Level Name:</strong> {technicalLevelName}</span>
    </div>
  </div>
  );
}