const TLevelCard = ({ name, key, productCode }) => {
  return (
    <div className="tlevel-card" key={key}>
      <h2>T-Level Product</h2>
      <p>{name}</p>
    </div>
  )
}

export default TLevelCard
