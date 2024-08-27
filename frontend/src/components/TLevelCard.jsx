import "../style/TLevelCard.css"

const TLevelCard = ({ name, key}) => {
  return (
    <div className="t-level-card" key={key}>
      <h2>Placement</h2>
      <p>{name}</p>
    </div>
  )
}

export default TLevelCard
