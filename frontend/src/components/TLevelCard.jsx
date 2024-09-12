import "../style/TLevelCard.css"

const TLevelCard = ({ name, key}) => {
  return (
    <div className="t-level-card" key={key}>
      <p>{name}</p>
    </div>
  )
}

export default TLevelCard
