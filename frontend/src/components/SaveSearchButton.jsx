import heartIcon from "../images/heart.svg"
import heartRedIcon from "../images/redheart.svg"
import "../style/Heart.css"

export default function SaveSearchButton({ onSave, isSaved }) {
  return (
    <button className="save-search-button" onClick={onSave}>
      <span className="save-search-text">Save search</span>
      <img
        src={isSaved ? heartRedIcon : heartIcon}
        alt="Heart Icon"
        className="heart-icon"
      />
    </button>
  )
}
