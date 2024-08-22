import { useState, useEffect} from "react";
import "../style/Filterbutton.css";
import filterIcon from '../images/filter.svg';

export default function FilterButton({ options, onApply,searchQuery, setSearchQuery, setFilterOptions }) {
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
  useEffect(() => {
    if(!searchQuery){
     const currentUrl = window.location.href
     const queryRegex = /[?&]query=([^&]+)/;
     
 const match = currentUrl.match(queryRegex);
 setSearchQuery(match ? decodeURIComponent(match[1]) : null);
 const filterRegex = /[?&]filter=(\d+)/g;
 const newOptions = [...currentUrl.matchAll(filterRegex)].map(match => parseInt(match[1]))
 
     setFilterOptions(newOptions);
     setSelectedOptions(newOptions)
    }
   
   }, [searchQuery])
  return (
    <div className="filter-container">
      <button className="filter-toggle-button" onClick={toggleDropdown}>
        <span className="filter-results">Filter Result</span>
        <img src={filterIcon} alt="Filter Icon"/>
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
          <button className="filter-apply-button" onClick={handleApplyFilters}>
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
}

