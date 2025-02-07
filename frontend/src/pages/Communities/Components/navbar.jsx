import React, { useState } from 'react';
import './Components.css';
import NotificationMenu from './Notificationbar';

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="upbar">
      <div className="upbar-left">
        <img src="/icons/gdg logo.svg" alt="" style={{
             height: '50px',
             width: '50px'
        }} />
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
        <div className="relative">
          <button 
            className="notification-btn"
            onClick={toggleNotifications}
          >
            <img src="/icons/Notification.svg" alt="Notifications" className="notification-icon" />
          </button>
          
          {/* Notification Menu */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 z-50">
              <NotificationMenu />
            </div>
          )}
        </div>
        
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

export default Navbar;