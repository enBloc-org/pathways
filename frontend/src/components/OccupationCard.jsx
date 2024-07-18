export default function OccupationCard({ 
    name, 
    level, 
    overview, 
    technicalLevelName
 }) {
  if (!name | !level | !overview | !technicalLevelName) {
    return <div>Loading...</div>;
  }

return (
  <div className="occupation-card">
 <h2>{name}</h2>
    <p><strong>Level:</strong> {level}</p>
    <p><strong>Overview:</strong> {overview}</p>
    <p><strong>Technical Level Name:</strong> {technicalLevelName}</p>
  </div>
);
}