import React from 'react';
import '../style/Hierarchymap.css';

const HierarchyMap = () => {
  return (
    <div className="hierarchy-map-wrapper">
      <p className="route-header">Digital</p>
      <div className="hierarchy-map">
        <div className="heading">
            <p className="heading-item">Technical</p>            
            <p className="heading-item">Higher Technical</p>     
            <p className="heading-item">Professional</p>        
        </div>
        <div className="grid-container">
          <div className="grid-line line-1"></div>
          <div className="grid-line line-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HierarchyMap;
