import React from 'react';
import OccupationDetails from './OccupationDetails';

const HierarchyMap = ({ occupation, routeName }) => {
  return (
    <div className="hierarchy-map">
      <h1 className="route-header">{routeName}</h1>
      <OccupationDetails occupation={occupation} routeName={routeName} />
      <OccupationDetails occupation={occupation} routeName={routeName} />
      <OccupationDetails occupation={occupation} routeName={routeName} />
    </div>
  );
};

export default HierarchyMap;
