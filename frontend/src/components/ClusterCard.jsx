import React from 'react';

const ClusterCard = ({ name, description, technicalLevelName }) => {
  return (
    <div className="cluster-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Technical Level:</strong> {technicalLevelName}</p>
    </div>
  );
};

export default ClusterCard;
