import React from 'react';
import './upbar.css';

const Upbar = () => {
  return (
    <div className="upbar">
      <div className="upbar-left">
        <img src="/icons/gdg logo.svg" alt="GDG Logo" className="logo" />
      </div>
      
      <div className="upbar-center">
        <div className="search-container">
          <img src="/icons/Search.svg" alt="Search" className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="upbar-right">
        <button className="notification-btn">
          <img src="/icons/Notification.svg" alt="Notifications" className="notification-icon" />
        </button>
        <div className="profile-avatar">
          <img 
            src="https://ui-avatars.com/api/?name=John+Doe" 
            alt="Profile" 
            className="avatar-img"
          />
        </div>
        <button className="menu-btn">
          <img src="/icons/Menu.svg" alt="Menu" className="menu-icon" />
        </button>
      </div>
    </div>
  );
};

export default Upbar;