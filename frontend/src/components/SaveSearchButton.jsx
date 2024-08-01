import React, { useState } from "react";
import heartIcon from '../images/heart.svg';
import heartRedIcon from '../images/redheart.svg';
import "../style/Heart.css";

export default function SaveSearchButton({ onClick }) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const toggleHeart = () => {
    setIsHeartClicked((prevIsHeartClicked) => !prevIsHeartClicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="save-search-button" onClick={toggleHeart}>
      <span className="save-search-text">Save search</span>
      <img
        src={isHeartClicked ? heartRedIcon : heartIcon} 
        alt="Heart Icon"
        className="heart-icon"
      />
    </button>
  );
}
