import React from 'react';

const occupationDetailsStyle = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

export default function OccupationDetails({ name, level, overview, technicalLevelName, additionalDetails }) {
  if (!name || !level || !overview || !technicalLevelName || !additionalDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={occupationDetailsStyle}>
      <h2>{name}</h2>
      <p><strong>Level:</strong> {level}</p>
      <p><strong>Overview:</strong> {overview}</p>
      <p><strong>Technical Level Name:</strong> {technicalLevelName}</p>
      <p><strong>Additional Details:</strong> <span dangerouslySetInnerHTML={{ __html: additionalDetails }} /></p>
    </div>
  );
}
