// src/EventCard.jsx
import React from 'react';
import './index.css';


function EventCard({ title, type, imageUrl, link }) {
  return (
    <div className="event-card">
      <div className="event-image-container">
        <img src={imageUrl} alt={title} className="event-image" />
      </div>
      <div className="event-info">
        <h3>{title}</h3>
        <p>{type}</p>
        <a href={link} className="event-link" target="_blank" rel="noopener noreferrer">View Menu</a>
      </div>
    </div>
  );
}

export default EventCard;
