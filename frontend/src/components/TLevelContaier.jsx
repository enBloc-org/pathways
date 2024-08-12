import TLevelCard from "./TLevelCard"

export default function TLevelContainer({ products }) {
  return (
    <div className="tlevel-container">
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
    </div>
  )
}
