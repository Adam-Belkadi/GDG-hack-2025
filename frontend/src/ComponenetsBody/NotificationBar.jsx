import React, { useState } from 'react';
import NotificationSettings from './Notificationsettinges';

const NotificationMenu = () => {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  return (
    <>
      <div className="w-64 bg-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-900">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-blue-600">Notification</h2>
        </div>

        <div className="p-2">
          <div className="space-y-2">
            <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer group">
              <img 
                src="/icons/calendar-03.svg" 
                alt="Calendar" 
                className="w-5 h-5 mr-3 text-gray-700 group-hover:text-gray-900"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">New Event</span>
            </div>

            <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer group">
              <img 
                src="/icons/mail-add.svg" 
                alt="New Post" 
                className="w-5 h-5 mr-3 text-gray-700 group-hover:text-gray-900"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">New Post In CyberS...</span>
            </div>
          </div>
        </div>

        <div className="mt-auto border-t border-gray-200 p-4">
          <div 
            onClick={handleSettingsClick}
            className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer group"
          >
            <span className="text-sm">Notification settings</span>
            <img 
              src="/icons/settings-01.svg" 
              alt="Settings" 
              className="w-5 h-5 ml-auto group-hover:text-gray-900"
            />
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]">
          <NotificationSettings onClose={() => setShowSettings(false)} />
        </div>
      )}
    </>
  );
};

export default NotificationMenu;