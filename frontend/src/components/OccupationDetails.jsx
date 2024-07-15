import '../style/OccupationDetails.css'; 

export default function OccupationDetails({ name, level, overview, technicalLevelName, additionalDetails }) {
  if (!name || !level || !overview || !technicalLevelName || !additionalDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="occupation-details">
      <div className="header">
        <h2>{name}</h2>
        <p><strong>Level:</strong> {level}</p>
        <p><strong>Technical Level Name:</strong> {technicalLevelName}</p>
      </div>
      <div className="section">
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
      <div className="section">
        <h3>Additional Details</h3>
        <div dangerouslySetInnerHTML={{ __html: additionalDetails }} />
      </div>
    </div>
  );
}
