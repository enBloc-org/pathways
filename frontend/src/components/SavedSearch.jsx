import React, { useState } from "react"
import "../style/SavedSearch.css"
export default function SavedSearches({
  savedSearches,
  handleSavedSearchClick,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev)
  }

  return (
    <div className="saved-searches--container">
      <button
        className="search-page--options-button"
        onClick={toggleDropdown}
        disabled={savedSearches.length === 0}
      >
        Saved Searches
        <svg
          version="1.1"
          width="28px"
          fill={
            savedSearches.length === 0
              ? "var(--secondary-grey)"
              : isDropdownOpen
                ? "var(--pink)"
                : "var(--grey)"
          }
          height="28px"
          viewBox="-10 0 120 80"
          xmlns="http://www.w3.org/2000/svg"
          alt="clock icon"
          className="clock-icon"
        >
          <path d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 66.124 61.696 L 41 47.319 V 19.044 h 8 V 42.68 l 21.097 12.073 L 66.124 61.696 z" />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="saved-searches__dropdown">
          <div className="divider-container">
            <h4>My Searches</h4>
            <div className="divider" />
          </div>

          <div className="saved-searches__dropdown-links-container">
            {savedSearches.map((search, index) => (
              <button
                key={`today-${index}`}
                className="dropdown-item"
                onClick={() => handleSavedSearchClick(search.url)}
              >
                {search.name
                  .replaceAll(",+", " and ")
                  .replaceAll(",", " and ")}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
