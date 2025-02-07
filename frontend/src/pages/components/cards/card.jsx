import React from 'react';
import './card.css';

const Card = ({ title, description, members }) => {
  return (
    <div className="card-container">
      <div className="card-media">
        <img src="/icons/bigcat.svg" alt="Big Cat" className="big-cat" />
        <img src="/icons/small cat.svg" alt="Small Cat" className="small-cat" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-members">
          <span>{members.toLocaleString()}</span> 
          <span className="members-highlight">Members</span>
        </p>
      </div>
    </div>
  );
};

export default Card;