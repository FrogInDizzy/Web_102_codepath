import React, { useState, useEffect, useRef } from 'react';
import './FlipCard.css'; // Import the CSS file for styling

const FlipCard = ({ emoji, countryName, flipped, setFlipped }) => {
  const cardInnerRef = useRef(); // Create a ref
  const [userAnswer, setUserAnswer] = useState(''); // New state variable for the user's answer

  const handleClick = () => {
    setFlipped(!flipped); // This will toggle the flip state
  };

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value); // Update the user's answer when the input changes
  };

  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === countryName.toLowerCase()) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  };

  useEffect(() => {
    // ...
  }, [flipped]);


return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner" ref={cardInnerRef}>
        <div className="flip-card-front">
          {emoji} {/* Display the emoji on the front side */}
          <div className="answer-input" onClick={(e) => e.stopPropagation()}>
  <input type="text" value={userAnswer} onChange={handleInputChange} />
  <button onClick={checkAnswer}>Check Answer</button>
</div>
        </div>
        <div className="flip-card-back">
          <div>{countryName}</div> {/* Display the country name on the back side */}
        </div>
      </div>
    </div>
  );
}
export default FlipCard;