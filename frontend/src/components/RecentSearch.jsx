import React, { useState } from "react";
import "../style/RecentSearch.css"; 
export default function RecentSearches({ recentSearches }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const todaySearches = recentSearches.filter(
    (search) => search.category === "Today"
  );
  const pastSearches = recentSearches.filter(
    (search) => search.category === "Past"
  );

  return (
    <div className="recent-searches-container">
      <button className="recent-searches-toggle" onClick={toggleDropdown}>
        Recent Searches <span className="clock-icon">🕒</span>
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-section">
            <h4>Today</h4>
            {todaySearches.map((search, index) => (
              <a href={`#search-${index}`} key={index} className="dropdown-item">
                {search.name}
              </a>
            ))}
          </div>
          <div className="dropdown-section">
            <h4>Past</h4>
            {pastSearches.map((search, index) => (
              <a href={`#search-${index}`} key={index} className="dropdown-item">
                {search.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
