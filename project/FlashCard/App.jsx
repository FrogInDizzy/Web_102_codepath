import React, { useState } from 'react';
import './App.css';
import FlipCard from './FlipCard';


const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [start, setStart] = useState(true);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => 
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCardIndex(randomIndex);
    setFlipped(false); // Reset the flip state
  };
  const appStyles = {
    backgroundImage: 'url("https://wallpapers.com/images/hd/high-resolution-world-map-country-flags-my4ymxztox3jjdhl.jpg")', // Use the URL directly
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh'
    // Include other styles for the .App class here
  };



  if (start) {
    return (
      <div className="App" style={appStyles}>
        <h1 style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '40px',
          textAlign: 'center'
        }}>Country Flipcard Game</h1>
        <button className="start-button" onClick={() => setStart(false)} style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '40px',
          fontSize: '40px'
        }}>Start</button>
      </div>
    );
  }

  const cards = [
    { emoji: '🇺🇸', countryName: 'United States' },
    { emoji: '🇯🇵', countryName: 'Japan' },
    { emoji: '🇮🇳', countryName: 'India' },
    { emoji: '🇬🇧', countryName: 'United Kingdom' },
    { emoji: '🇨🇦', countryName: 'Canada' },
    { emoji: '🇦🇺', countryName: 'Australia' },
    { emoji: '🇩🇪', countryName: 'Germany' },
    { emoji: '🇫🇷', countryName: 'France' },
    { emoji: '🇨🇳', countryName: 'China' },
    { emoji: '🇧🇷', countryName: 'Brazil' },
    { emoji: '🇮🇹', countryName: 'Italy' },
    { emoji: '🇷🇺', countryName: 'Russia' },
    { emoji: '🇪🇸', countryName: 'Spain' },
    { emoji: '🇲🇽', countryName: 'Mexico' },
    { emoji: '🇸🇦', countryName: 'Saudi Arabia' },
    { emoji: '🇿🇦', countryName: 'South Africa' },
    { emoji: '🇦🇷', countryName: 'Argentina' },
    { emoji: '🇳🇬', countryName: 'Nigeria' },
    { emoji: '🇮🇩', countryName: 'Indonesia' },
    { emoji: '🇹🇷', countryName: 'Turkey' },
    { emoji: '🇪🇬', countryName: 'Egypt' },
    { emoji: '🇮🇷', countryName: 'Iran' },
    { emoji: '🇮🇶', countryName: 'Iraq' },
    { emoji: '🇮🇪', countryName: 'Ireland' },
    { emoji: '🇮🇱', countryName: 'Israel' },
    { emoji: '🇯🇲', countryName: 'Jamaica' },
    { emoji: '🇯🇴', countryName: 'Jordan' },
    { emoji: '🇰🇿', countryName: 'Kazakhstan' },
    { emoji: '🇰🇪', countryName: 'Kenya' },
    { emoji: '🇰🇼', countryName: 'Kuwait' },
    { emoji: '🇱🇧', countryName: 'Lebanon' },
    { emoji: '🇱🇾', countryName: 'Libya' },
    { emoji: '🇲🇾', countryName: 'Malaysia' },
    { emoji: '🇲🇹', countryName: 'Malta' },
    { emoji: '🇲🇽', countryName: 'Mexico' },
    { emoji: '🇲🇦', countryName: 'Morocco' },
    { emoji: '🇳🇵', countryName: 'Nepal' },
    { emoji: '🇳🇿', countryName: 'New Zealand' },
    { emoji: '🇳🇬', countryName: 'Nigeria' },
    { emoji: '🇳🇴', countryName: 'Norway' },
    { emoji: '🇵🇰', countryName: 'Pakistan' },
    { emoji: '🇵🇭', countryName: 'Philippines' },
    { emoji: '🇵🇱', countryName: 'Poland' },
    { emoji: '🇵🇹', countryName: 'Portugal' },
    { emoji: '🇶🇦', countryName: 'Qatar' },
    { emoji: '🇷🇴', countryName: 'Romania' },
    { emoji: '🇷🇺', countryName: 'Russia' },
    { emoji: '🇸🇦', countryName: 'Saudi Arabia' },
    { emoji: '🇸🇬', countryName: 'Singapore' },
    { emoji: '🇿🇦', countryName: 'South Africa' },
    { emoji: '🇰🇷', countryName: 'South Korea' },
    { emoji: '🇪🇸', countryName: 'Spain' },
    { emoji: '🇸🇪', countryName: 'Sweden' },
    { emoji: '🇨🇭', countryName: 'Switzerland' },
    { emoji: '🇹🇷', countryName: 'Turkey' },
    { emoji: '🇦🇪', countryName: 'United Arab Emirates' },
    { emoji: '🇻🇳', countryName: 'Vietnam' },
    { emoji: '🇿🇼', countryName: 'Zimbabwe' },
    { emoji: '🇹🇹', countryName: 'Trinidad and Tobago' },
    { emoji: '🇹🇳', countryName: 'Tunisia' },
    { emoji: '🇹🇲', countryName: 'Turkmenistan' },
    { emoji: '🇹🇻', countryName: 'Tuvalu' },
    { emoji: '🇺🇬', countryName: 'Uganda' },
    { emoji: '🇺🇦', countryName: 'Ukraine' },
    { emoji: '🇦🇪', countryName: 'United Arab Emirates' },
    { emoji: '🇺🇾', countryName: 'Uruguay' },
    { emoji: '🇺🇿', countryName: 'Uzbekistan' },
    { emoji: '🇻🇺', countryName: 'Vanuatu' },
    { emoji: '🇻🇦', countryName: 'Vatican City' },
    { emoji: '🇻🇪', countryName: 'Venezuela' },
    { emoji: '🇻🇳', countryName: 'Vietnam' },
    { emoji: '🏴', countryName: 'Wales' },
    { emoji: '🇪🇭', countryName: 'Western Sahara' },
    { emoji: '🇾🇪', countryName: 'Yemen' },
    { emoji: '🇿🇲', countryName: 'Zambia' },
    { emoji: '🇿🇼', countryName: 'Zimbabwe' },
  ];

  return (
    <div className="App" style={appStyles}>
      <header className="App-header">
        <h1>The Ultimate Country Flag Game!</h1>
        <p>How good of a country flag fan are you? Test all of your country flag knowledge here!</p>
      </header>
      <div className="card-container">
      <FlipCard 
  flipped={flipped} 
  setFlipped={setFlipped} 
  emoji={<span style={{ fontSize: '80px' }}>{cards[currentCardIndex].emoji}</span>} 
  countryName={cards[currentCardIndex].countryName} 
/>        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default App;
