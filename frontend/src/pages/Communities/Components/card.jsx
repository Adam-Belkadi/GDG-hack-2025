import React from 'react';
import './Components.css';

const Card = ({ title, description, members, isNew, isPopular, isVerified, stats }) => {
  return (
    <div className={`card-container ${isNew ? 'new' : ''}`}>
      <div className="card-badges">
        {isPopular && <span className="badge popular">Popular</span>}
        {isVerified && <span className="badge verified">Verified</span>}
      </div>

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
        <button className="join-button">Join Community</button>
      </div>

      {stats && (
        <div className="card-stats">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="stat-item">
              <img src={`/icons/${key}.svg`} alt={key} className="stat-icon" />
              <span className="stat-value">{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;