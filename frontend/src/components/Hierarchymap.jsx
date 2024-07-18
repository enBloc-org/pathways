import React from 'react';
import '../style/Hierarchymap.css'; 

const HierarchyMap = ({}) => {
  return (
    <div className="hierarchy-map-wrapper">
      <p className="route-header">Digital</p>
      <div className="hierarchy-map">
        <div className="heading">
          <p>Technical</p>
          <div className="grid-line"></div>
          <p>Higher Technical</p>
          <div className="grid-line"></div>
          <p>Professional</p>
        </div>

        <div className="grid-container">
          
          <p>content</p>
        </div>
      </div>
    </div>
  );
};

export default HierarchyMap;