import OccupationCard from "./OccupationCard"
import "../style/OccupationsList.css"

export default function OccupationsList({ occupationsArray }) {
  return (
    <div className="container">
      {occupationsArray.map(occupation => (
        <OccupationCard
          name={occupation.name}
          level={occupation.level}
          overview={occupation.overview}
          technicalLevelName={occupation.mapHierarchy.technicalLevelName}
          stdCode={occupation.stdCode}
        />
      ))}
    </div>
  )
}
