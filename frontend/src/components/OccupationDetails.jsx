import React, { useState, useRef } from 'react';
import '../style/globals.css';
import '../style/OccupationDetails.css';

export default function OccupationDetails({ occupation }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const additionalDetailsRef = useRef(null);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded && additionalDetailsRef.current) {
      additionalDetailsRef.current.scrollTop = 0;
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="occupation-details">
      <button className="close-button" onClick={handleClose}>X</button>
      <div className="header">
        <h2>{occupation.name}</h2>
        <p>Level {occupation.level} - <i>{occupation.mapHierarchy.technicalLevelName}</i></p>
        <p className="route-name">{occupation.mapHierarchyrouteName}</p>
      </div>
      <div className="section in-brief">
        <h3>In brief:</h3>
        <p className="overview-text">{occupation.overview}</p>
      </div>
      <div className="section in-depth">
        <h3>In Depth</h3>
        <div
          ref={additionalDetailsRef}
          className={`additional-details ${isExpanded ? 'expanded' : 'collapsed'}`}
          dangerouslySetInnerHTML={{ __html: occupation.summary }}
        />
        <button onClick={handleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      <div className="pathway-name">
        <div className="pathway-name-container">
          <p><strong>Pathway name: </strong><span className="pathway-name-text">{occupation.mapHierarchy.pathwayName}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
