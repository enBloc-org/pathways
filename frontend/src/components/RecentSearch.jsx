import React, { useState } from "react";
import "../style/RecentSearch.css";

export default function RecentSearches({ recentSearches }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const todaySearches = recentSearches.filter(
    (search) => search.category === "Today"
  );
  const pastSearches = recentSearches.filter(
    (search) => search.category === "Past"
  );

  return (
    <div className="recent-searches-container">
      <div className="recent-searches-header" onClick={toggleDropdown}>
        Saved Searches
        <span className="clock-icon">🕒</span>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {todaySearches.length > 0 && (
            <div className="dropdown-section">
             <div>
                <h4>Today</h4> 
                <div className='divider'/> 
              </div>
              {todaySearches.map((search, index) => (
                <a
                  href={`#search-${index}`}
                  key={`today-${index}`}
                  className="dropdown-item"
                >
                  {search.name}
                </a>
              ))}
            </div>
          )}

          {pastSearches.length > 0 && (
            <div className="dropdown-section">
              <div>
              <h4>Past</h4> 
              <div className='divider'/> 
            </div>
              {pastSearches.map((search, index) => (
                <a
                  href={`#search-${index}`}
                  key={`past-${index}`}
                  className="dropdown-item"
                >
                  {search.name}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
