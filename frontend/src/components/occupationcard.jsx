import React from "react";

export default function OccupationCard({ occupation }) {
  if (!occupation) {
    return <div>Loading...</div>;
  }

  return (
    <div className="occupation-card">
      <h2>{occupation.name} (Code: {occupation.stdCode})</h2>
      <p><strong>Status:</strong> {occupation.statusName} (Level {occupation.level}, Version {occupation.versionNo})</p>
      <p><strong>Overview:</strong> {occupation.overview}</p>
      <div>
        <strong>Summary:</strong>
        <div dangerouslySetInnerHTML={{ __html: occupation.summary }} />
      </div>
      <div>
        <strong>Map Hierarchy:</strong>
        <ul>
          <li><strong>Route:</strong> {occupation.mapHierarchy.routeName} (ID: {occupation.mapHierarchy.routeId})</li>
          <li><strong>Pathway:</strong> {occupation.mapHierarchy.pathwayName} (ID: {occupation.mapHierarchy.pathwayId})</li>
          <li><strong>Cluster:</strong> {occupation.mapHierarchy.clusterName} (ID: {occupation.mapHierarchy.clusterId})</li>
          <li><strong>Technical Level:</strong> {occupation.mapHierarchy.technicalLevelName} (Level {occupation.mapHierarchy.technicalLevel})</li>
        </ul>
      </div>
      <p><strong>Status Last Updated:</strong> {occupation.statusLastUpdated}</p>
    </div>
  );
}
