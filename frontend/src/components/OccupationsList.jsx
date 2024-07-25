import OccupationCard from "./OccupationCard"
import "../style/OccupationsList.css"

export default function OccupationsList({
  occupationsArray,
  eventHandler,
}) {
  return (
    <div className="container">
      {occupationsArray.map(occupation => (
        <OccupationCard
          occupation={occupation}
          expandHandler={eventHandler}
        />
      ))}
    </div>
  )
}
