import { useState, useEffect } from "react"
import "../style/Filterbutton.css"
import { useSearchContext } from "../context/searchContext"

export default function FilterButton({
  options,
  onApply,
  searchQuery,
  setFilterOptions,
}) {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const { dispatch } = useSearchContext()

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
  useEffect(() => {
    if (!searchQuery) {
      const currentUrl = window.location.href
      const queryRegex = /[?&]query=([^&]+)/

      const match = currentUrl.match(queryRegex)
      dispatch({
        type: "SET_SEARCH_QUERY",
        payload: match ? decodeURIComponent(match[1]) : "",
      })
      const filterRegex = /[?&]filter=(\d+)/g
      const newOptions = [...currentUrl.matchAll(filterRegex)].map(
        match => parseInt(match[1])
      )

      setFilterOptions(newOptions)
      setSelectedOptions(newOptions)
    }
  }, [searchQuery])

  return (
    <div className="filter-container">
      <button
        className="search-page--options-button"
        onClick={toggleDropdown}
      >
        Filter Results
        <svg
          height="28px"
          fill={isActive ? "var(--pink)" : "var(--grey)"}
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
        <div className="filter-options">
          <button
            className="filter-close-button"
            onClick={toggleDropdown}
          >
            &times;
          </button>
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
