import React from 'react';

const ClusterCard = ({ name, description, technicalLevelName }) => {
  return (
    <div className="new-cluster">
      <h2>{name}</h2>
      <p>{description}</p>
      {technicalLevelName && <p>Technical Level: {technicalLevelName}</p>}
    </div>
  );
};

export default ClusterCard;
