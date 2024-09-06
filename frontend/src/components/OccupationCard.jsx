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
        // Create a temporary span element
        const span = document.createElement('span');
        // Set the text content to the name
        span.textContent = name;
        // Copy the font styles from the h2 to the span
        const h2Styles = window.getComputedStyle(ref.current);
        span.style.font = h2Styles.font;
        span.style.fontSize = h2Styles.fontSize;
        span.style.letterSpacing = h2Styles.letterSpacing;
        span.style.whiteSpace = 'nowrap';
        span.style.visibility = 'hidden';
        span.style.position = 'absolute';
        
        // Add the span to the body
        document.body.appendChild(span);
        
        // Compare the width of the span to the width of the h2
        const isWrapped = span.offsetWidth > ref.current.offsetWidth;
        
        // Remove the temporary span
        document.body.removeChild(span);
        
        setIsMultiLine(isWrapped);
        
        console.log('Text width:', span.offsetWidth);
        console.log('Container width:', ref.current.offsetWidth);
        console.log('Is multiline:', isWrapped);
      }
    };

console.log('effect ran')
    checkMultiLine();
 // Add event listener for window resize
 window.addEventListener('resize', checkMultiLine);

 // Cleanup function to remove event listener
 return () => window.removeEventListener('resize', checkMultiLine);
  }, [ref]);
  if (!name || !overview || !technicalLevelName) {
    return <div>Loading...</div>
  }

  return (
    <button
      className="occupation-card"
      onClick={() => navigate(`/occupation-details/${stdCode}`)}
    >
      <h2 ref={ref} className= {isMultiLine ? 'text-center' :'text-left'   } >{name}</h2>
    
        <div className="overview">
          <p className='in-brief'>
          In brief:
          </p>
         <p>{` ${overview}`}</p> 
        </div>
     
      
    </button>
  )
}
