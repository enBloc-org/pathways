import spinner from "../images/loadingSpinner.svg"
import "../style/Search.css"

export default function LoadingSpinner() {
  return (
    <img
      className="loading-image"
      src={spinner}
      alt="spinner animation"
    />
  )
}
