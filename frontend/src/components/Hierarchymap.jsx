import React from 'react';
import '../style/Hierarchymap.css'; 

const HierarchyMap = ({}) => {
  return (
    <div className="hierarchy-map-wrapper">
      <p className="route-header">Digital</p>
      <div className="hierarchy-map">
        <div className="grid-container">
          <div className="grid-item">Technical</div>
          <div className="grid-line"></div>
          <div className="grid-item">Higher Technical</div>
          <div className="grid-line"></div>
          <div className="grid-item">Professional</div>
        </div>
      </div>
    </div>
  );
};

export default HierarchyMap;