import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div className="card-container">
      {/* Image section */}
      <div className="card-media">
        <img src="/icons/bigcat.svg" alt="Big Cat" className="big-cat" />
        <img src="/icons/small cat.svg" alt="Small Cat" className="small-cat" />
      </div>

      {/* Content section */}
      <div className="card-content">
        <h3 className="card-title">Lorem ipsum dolor</h3>
        <p className="card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco.
        </p>
        <p className="card-members">
          <span>2.3 K</span> <span className="members-highlight">Members</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
