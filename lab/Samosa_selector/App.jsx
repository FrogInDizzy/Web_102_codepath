import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
    setClicked(true);
    setTimeout(() => setClicked(false), 100); // remove the class after 100ms
  };


  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier( multiplier * 10);
      setCount(count - 1000);
    }
  }

  const upgrades = [
    { name: 'Double Stuffed 👯‍♀️', description: '2x per click', cost: 10, buy: buyDoubleStuffed },
    { name: 'Party Pack 🎉', description: '5x per click', cost: 100, buy: buyPartyPack },
    { name: 'Full Feast 👩🏽‍🍳', description: '10x per click', cost: 1000, buy: buyFullFeast },
  ];

 return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="https://helpful-griffin-0a0ba5.netlify.app/samosa.png" alt="samosa" onClick={updateCount} />
      </div>
      <div className="container">
        {upgrades.map((upgrade, index) => (
          <div className='upgrade' key={index}>
            <h3> {upgrade.name}</h3>
            <p>{upgrade.description}</p>
            <button onClick={upgrade.buy}>{`Cost: ${upgrade.cost} samosas`}</button>
          </div>
        ))}
      </div>
    </div>
  )    
 }


export default App
