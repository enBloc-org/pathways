import React, { useState } from "react";
import "../style/Filterbutton.css";

export default function FilterButton({ options, onApply }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (routeId) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(routeId)
        ? prevSelected.filter((id) => id !== routeId)
        : [...prevSelected, routeId]
    );
  };

  const handleApplyFilters = () => {
    onApply(selectedOptions);
  };

  return (
    <div className="filter-container">
      <h2>Select Filters</h2>
      <div className="filter-options">
        {options.map((route) => (
          <div key={route.routeId}>
            <input
              type="checkbox"
              id={`filter-${route.routeId}`}
              checked={selectedOptions.includes(route.routeId)}
              onChange={() => handleCheckboxChange(route.routeId)}
            />
            <label htmlFor={`filter-${route.routeId}`}>{route.name}</label>
          </div>
        ))}
      </div>
      <button className="filter-apply-button" onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}
