import React, { useState } from 'react';
import '../style/globals.css';
import '../style/OccupationDetails.css'; 

export default function OccupationDetails({ name, level, overview, technicalLevelName, additionalDetails, routeName, pathwayName }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!name || !level || !overview || !technicalLevelName || !additionalDetails || !routeName || !pathwayName) {
    return <div>Loading...</div>;
  }

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="occupation-details">
      <div className="header">
        <h2>{name}</h2>
        <p><strong>Level:</strong> {level} - {technicalLevelName}</p>
        <p className="route-name">{routeName}</p>
      </div>
      <div className="section in-brief">
        <h3>In brief:</h3>
        <p className="overview-text">{overview}</p>
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
      <div className="pathway-name">
        <p><strong>Pathway name:</strong> {pathwayName}</p>
      </div>
    </div>
  );
}
