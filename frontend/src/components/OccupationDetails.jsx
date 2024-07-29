import React, { useState, useRef } from "react"
import "../style/globals.css"
import "../style/OccupationDetails.css"

export default function OccupationDetails({ occupation }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const additionalDetailsRef = useRef(null)

  const handleReadMore = () => {
    setIsExpanded(!isExpanded)
    if (isExpanded && additionalDetailsRef.current) {
      additionalDetailsRef.current.scrollTop = 0
    }
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="details-container">
      <div className="occupation-details">
        <div>
          <div className="header">
            <div>
              <h2>{occupation.name}</h2>
              <p>
                Level {occupation.level} -{" "}
                <i>{occupation.mapHierarchy.technicalLevelName}</i>
              </p>
              <p className="route-name">
                {occupation.mapHierarchy.routeName}
              </p>
            </div>
            <button className="close-button" onClick={handleClose}>
              X
            </button>
          </div>

          <div className="in-brief">
            <h3>In brief:</h3>
            <p className="overview-text">{occupation.overview}</p>
          </div>
        </div>

        <div className="in-depth-container">
          <div className="in-depth">
            <strong>In Depth</strong>
            <div
              ref={additionalDetailsRef}
              className={`additional-details ${isExpanded ? "expanded" : "collapsed"}`}
              dangerouslySetInnerHTML={{ __html: occupation.summary }}
            />
          </div>
          <button
            className="read-more-button"
            onClick={handleReadMore}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="pathway-name-container">
          <p>
            <strong>Pathway name: </strong>
            <span className="pathway-name-text">
              {occupation.mapHierarchy.pathwayName}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
