import TLevelCard from "./TLevelCard"
import "../style/TLevelContainer.css"

export default function TLevelContainer({ products }) {
  return (
    <aside className="t-level-container">
      <h2>T-Level Placements</h2>
      {products.map((product, index) => {
        if (product.typeName === "TLevel") {
          return <TLevelCard key={index} name={product.name} />
        }
        return null
      })}
      <div className="t-level-container__links">
        <p>Learn More:</p>
        <a 
        href="https://employers.tlevels.gov.uk/hc/en-gb" 
        target="_blank" 
        rel="noopener noreferrer"
        >
          T-level Placements
          </a>
          <a 
          href="https://www.tlevels.gov.uk/students/find" 
          target="_blank" 
          rel="noopener noreferrer"
          >
            Find Partners
            </a>
          </div>
        </aside>
        );
      }