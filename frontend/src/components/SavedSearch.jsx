import React, { useState } from "react";
import "../style/SavedSearch.css";
import ClockIcon from "../images/Clock.svg"
export default function SavedSearches({ savedSearches, setSearchQuery,handleSavedSearchClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const displaySearches = savedSearches


  return (
    <div className="saved-searches-container search-page--options-button">
      <div className="saved-searches-header" onClick={toggleDropdown}>
        <p>Saved Searches</p>
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
                 <div
                 key={`today-${index}`}
                 className="dropdown-item"
                 onClick={() => handleSavedSearchClick(search.url)}
               >
                 <p>{search.name.replace(",+", " and ").replace(",", " and ")}</p>
               </div>
              ))}
            </div>
          )}


        </div>
      )}
    </div>
  );
}
