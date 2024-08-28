import React, { useState } from "react"
import "../style/SavedSearch.css"
export default function SavedSearches({
  savedSearches,
  setSearchQuery,
  handleSavedSearchClick,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev)
  }

  const displaySearches = savedSearches

  return (
    <div className="saved-searches--container">
      <button
        className="search-page--options-button"
        onClick={toggleDropdown}
      >
        <p>Saved Searches</p>
        <svg
          version="1.1"
          width="28px"
          fill="var(--grey)"
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
        <div className="search-page--options__dropdown saved-searches__dropdown">
          {displaySearches.length > 0 && (
            <div className="dropdown-section">
              <div>
                <div className="divider" />
              </div>
              {displaySearches.map((search, index) => (
                <div
                  key={`today-${index}`}
                  className="dropdown-item"
                  onClick={() => handleSavedSearchClick(search.url)}
                >
                  <p>{search.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
