import React from 'react';
import '../style/Hierarchymap.css';

const HierarchyMap = () => {
  return (
    <div className="hierarchy-map-wrapper">
      <p className="route-header">Digital</p>
      <div className="hierarchy-map">
        <div className="heading">
          <div className="heading-item">
            <p>Technical</p>
          </div>
          <div className="heading-item">
            <p>Higher Technical</p>
          </div>
          <div className="heading-item">
            <p>Professional</p>
          </div>
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
