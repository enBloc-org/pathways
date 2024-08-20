import React, { useState } from "react";
import "../style/RecentSearch.css";
import ClockIcon from "../images/Clock.svg"
import { Link } from "react-router-dom";

export default function SavedSearches({ savedSearches }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const displaySearches = savedSearches


  return (
    <div className="recent-searches-container">
      <div className="recent-searches-header" onClick={toggleDropdown}>
        Saved Searches
        <img src={ClockIcon} alt="Clock Icon" className="clock-icon" />
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {displaySearches.length > 0 && (
            <div className="dropdown-section">
             <div>
               
                <div className='divider'/> 
              </div>
              {displaySearches.map((search, index) => (
                 <Link
                 to={search.url}
                 key={`today-${index}`}
                 className="dropdown-item"
               >
                 <p>{search.name}</p>
               </Link>
              ))}
            </div>
          )}


        </div>
      )}
    </div>
  );
}
