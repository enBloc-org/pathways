import React, { useState } from "react";
import "../style/RecentSearch.css";
import ClockIcon from "../images/Clock.svg"

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
        <img src={ClockIcon} alt="Clock Icon" className="clock-icon" />
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {todaySearches.length > 0 && (
            <div className="dropdown-section">
             <div>
                <h4><i>Today</i></h4> 
                <div className='divider'/> 
              </div>
              {todaySearches.map((search, index) => (
                <a
                  href={`#search-${index}`}
                  key={`today-${index}`}
                  className="dropdown-item"
                >
                  <p>{search.name}</p>
                </a>
              ))}
            </div>
          )}

          {pastSearches.length > 0 && (
            <div className="dropdown-section">
              <div>
              <h4> <i>Past</i></h4> 
              <div className='divider'/> 
            </div>
              {pastSearches.map((search, index) => (
                <a
                  href={`#search-${index}`}
                  key={`past-${index}`}
                  className="dropdown-item"
                >
                  <p>{search.name}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
