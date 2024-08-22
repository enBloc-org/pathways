import { useState, useEffect } from "react"
import "../style/Filterbutton.css"

export default function FilterButton({ options, onApply }) {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(selectedOptions.length > 0)
  }, [selectedOptions])

  const handleCheckboxChange = routeId => {
    setSelectedOptions(prevSelected =>
      prevSelected.includes(routeId)
        ? prevSelected.filter(id => id !== routeId)
        : [...prevSelected, routeId]
    )
  }

  const handleApplyFilters = () => {
    onApply(selectedOptions)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(prevIsDropdownOpen => !prevIsDropdownOpen)
  }

  return (
    <div>
      <button
        className="filter-toggle-button"
        onClick={toggleDropdown}
      >
        <span>{isActive ? "Edit Filters" : "Filter Results"}</span>
        <svg
          height="28px"
          fill={isActive ? "#ff0000" : "#bebebe"}
          viewBox="0 0 2000 1500"
          width="28px"
          xmlns="http://www.w3.org/2000/svg"
          alt="filter icon"
          className="filter-icon"
        >
          <path d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="dropdown">
          <div className="filter-options">
            {options.map(route => (
              <div key={route.routeId} className="filter-option">
                <input
                  type="checkbox"
                  id={`filter-${route.routeId}`}
                  checked={selectedOptions.includes(route.routeId)}
                  onChange={() => handleCheckboxChange(route.routeId)}
                />
                <label htmlFor={`filter-${route.routeId}`}>
                  {route.name}
                </label>
              </div>
            ))}
          </div>
          <button
            className="filter-apply-button"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  )
}
