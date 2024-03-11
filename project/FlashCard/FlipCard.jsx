import React, { useState, useEffect, useRef } from 'react';
import './FlipCard.css'; // Import the CSS file for styling

const FlipCard = ({ emoji, countryName, flipped, setFlipped }) => {
    const cardInnerRef = useRef(); // Create a ref
    const [transition, setTransition] = useState(true); // New state variable
  
    const handleClick = () => {
      setTransition(true); // Enable transition when card is manually flipped
      setFlipped(!flipped); // This will toggle the flip state
    };
  
    useEffect(() => {
      if (flipped) {
        // Remove the transition when the card is flipped
        cardInnerRef.current.style.transition = transition ? '' : 'none';
      } else {
        // Add the transition when the card is not flipped
        cardInnerRef.current.style.transition = transition ? 'none' : 'none';
      }
    }, [flipped, transition]); // Add transition to the dependency array
  

      return (
        <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
          <div className="flip-card-inner" ref={cardInnerRef}>
            <div className="flip-card-front">
              {emoji} {/* Display the emoji on the front side */}
            </div>
            <div className="flip-card-back">
              {countryName} {/* Display the country name on the back side */}
            </div>
          </div>
        </div>
      );
    };

export default FlipCard;
