import React, { useState } from "react";
import "../style/Filterbutton.css";
import filterIcon from '../images/filter.svg'

export default function FilterButton({ options, onApply }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (routeId) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(routeId)
        ? prevSelected.filter((id) => id !== routeId)
        : [...prevSelected, routeId]
    );
  };

  const handleApplyFilters = () => {
    onApply(selectedOptions);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  return (
    <div className="filter-container">
      <button className="filter-toggle-button" onClick={toggleDropdown}>
        Filter Result 
        <img src={filterIcon}/>
      </button>
      {isDropdownOpen && (
        <div className="dropdown">
          <div className="filter-options">
            {options.map((route) => (
              <div key={route.routeId} className="filter-option">
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
          <div className="filter-actions">
            <button className="filter-apply-button" onClick={handleApplyFilters}>
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
