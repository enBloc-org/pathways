import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import "../style/OccupationCard.css"
export default function OccupationCard({
  name,
  overview,
  technicalLevelName,
  stdCode,
}) {
  const ref = useRef(null)
  const [isMultiLine, setIsMultiLine] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkMultiLine = () => {
      if (ref.current) {
        const span = document.createElement("span")
        span.textContent = name
        const h2Styles = window.getComputedStyle(ref.current)
        span.style.font = h2Styles.font
        span.style.fontSize = h2Styles.fontSize
        span.style.letterSpacing = h2Styles.letterSpacing
        span.style.whiteSpace = "nowrap"
        span.style.visibility = "hidden"
        span.style.position = "absolute"

        document.body.appendChild(span)

        const isWrapped = span.offsetWidth > ref.current.offsetWidth

        document.body.removeChild(span)

        setIsMultiLine(isWrapped)
      }
    }

    checkMultiLine()
    window.addEventListener("resize", checkMultiLine)

    return () => window.removeEventListener("resize", checkMultiLine)
  }, [ref])

  if (!name || !overview || !technicalLevelName) {
    return <div>Loading...</div>
  }

  return (
    <button
      className="occupation-card"
      onClick={() => navigate(`/occupation-details/${stdCode}`)}
    >
      <h2
        ref={ref}
        className={isMultiLine ? "text-center" : "text-left"}
      >
        {name}
      </h2>
      <div className="overview">
        <p className="in-brief">In brief:</p>
        <p>{` ${overview}`}</p>
      </div>
    </button>
  )
}
