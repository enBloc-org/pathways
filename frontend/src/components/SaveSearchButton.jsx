import React, { useState } from "react";
import heartIcon from '../images/heart.svg';
import heartRedIcon from '../images/redheart.svg';

export default function SaveSearchButton() {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const toggleHeart = () => {
    setIsHeartClicked((prevIsHeartClicked) => !prevIsHeartClicked);
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
