import React from 'react';
import backgroundImage from 'https://wallpapers.com/images/hd/high-resolution-world-map-country-flags-my4ymxztox3jjdhl.jpg'; // Update the path to where you've placed your image
import styles from './PlantParentQuiz.module.css';


const PlantParentQuiz = () => {
  return (
    <div className="quiz-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>The Ultimate Plant Parent!</h1>
      <p>How good of a plant parent are you? Test all of your planty knowledge here!</p>
      <div className="card-info">
        Number of cards: 10
      </div>
      <button className="start-btn">Start!</button>
    </div>
  );
};

export default PlantParentQuiz;
