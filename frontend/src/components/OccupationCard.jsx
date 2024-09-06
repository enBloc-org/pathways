import {useNavigate} from 'react-router-dom'
import{useState, useEffect, useRef} from 'react';
import "../style/OccupationCard.css"
export default function OccupationCard({
  name,
  overview,
  technicalLevelName,
  stdCode,
}) {
  const ref = useRef(null);
const [isMultiLine, setIsMultiLine]= useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const checkMultiLine = () => {
      if (ref.current) {
        setIsMultiLine(ref.current.scrollHeight > ref.current.clientHeight);
      }
    };

    checkMultiLine();
    // window.addEventListener('resize', checkMultiLine);

  }, [ref, isMultiLine]);
  if (!name || !overview || !technicalLevelName) {
    return <div>Loading...</div>
  }

  return (
    <button
      className="occupation-card"
      onClick={() => navigate(`/occupation-details/${stdCode}`)}
    >
      <h2 ref={ref} className= {isMultiLine ? 'h2.text-left' :'h2'   } >{name}</h2>
      <div>
        <p className="overview">
          <span>
            <i class='in-brief'>In brief:</i>
          </span>{" "}
          {` ${overview}`}
        </p>
      </div>
      
    </button>
  )
}
