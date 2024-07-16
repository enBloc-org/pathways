import React, { useState } from 'react';
import '../style/OccupationDetails.css'; 

export default function OccupationDetails({ name, level, overview, technicalLevelName, additionalDetails }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!name || !level || !overview || !technicalLevelName || !additionalDetails) {
    return <div>Loading...</div>;
  }

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="occupation-details">
      <div className="header">
        <h2>{name}</h2>
        <p>Level {level} - <i>{technicalLevelName}</i></p>
      </div>
      <div className="section in-brief">
        <h3>In Brief</h3>
        <p>{overview}</p>
      </div>
      <div className="section in-depth">
        <h3>In Depth</h3>
        <div
          className={`additional-details ${isExpanded ? 'expanded' : 'collapsed'}`}
          dangerouslySetInnerHTML={{ __html: additionalDetails }}
        />
        <button onClick={handleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}
