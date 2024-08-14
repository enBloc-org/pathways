import TLevelCard from "./TLevelCard"
import "../style/TLevelContainer.css"

export default function TLevelContainer({ products }) {
  return (
    <div className="t-level-container">
      <h2>T-Level Placements</h2>
      {products.map((product, index) => {
        if (product.typeName === "TLevel") {
          return (
            <TLevelCard
              key={index}
              name={product.name}
              productCode={product.productCode}
            />
          )
        }
      })}
      <div className="links">
        <h3>Learn More:</h3>
        <a href="https://employers.tlevels.gov.uk/hc/en-gb">T-level Placements</a>
        <a href="https://www.tlevels.gov.uk/students/find">Find Partners</a>
      </div>
    </div>
  )
}
