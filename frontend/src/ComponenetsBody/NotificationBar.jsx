import React, { useState } from 'react';
import NotificationSettings from './NotificationSettings';

const NotificationBar = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  return (
    <>
<div className="notification-menu">
  <div className="notification-header">
    <h2>Notification</h2>
  </div>

  <div className="notification-body">
    <div className="notification-item">
      <img src="/icons/calendar.svg" alt="Calendar" />
      <span>New Event</span>
    </div>

    <div className="notification-item">
      <img src="/icons/mail-add-02.svg" alt="New Post" />
      <span>New Post In CyberS...</span>
    </div>
  </div>

  <div className="notification-footer" onClick={handleSettingsClick}>
    <span>Notification settings</span>
    <img src="/icons/settings.svg" alt="Settings" />
  </div>
</div>

{showSettings && (
  <div className="notification-overlay">
    <NotificationSettings onClose={() => setShowSettings(false)} />
  </div>
)}
    </>
  );
};

export default NotificationBar;