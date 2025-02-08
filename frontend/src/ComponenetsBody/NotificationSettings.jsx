import React, { useState } from "react";

const NotificationSettings = ({ onClose }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const categories = ["Events", "Posts", "Comments", "Mentions", "Updates"];

  return (
    <div className="notification-settings">
      <div className="settings-header">
        <h2>Notification Settings</h2>
        <button onClick={onClose} className="close-btn">✖</button>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h3>Notifications</h3>
          <button
            onClick={() => setIsEnabled(!isEnabled)}
            className={`toggle-switch ${isEnabled ? "active" : ""}`}
          >
            <span className="toggle-thumb" />
          </button>
        </div>

        <div className="settings-section">
          <h3>Notification Categories</h3>
          <input type="text" placeholder="Search category" className="input-field" />

          <div className="category-list">
            {categories.map((category, index) => (
              <div key={index} className="category-badge">{category}</div>
            ))}
          </div>
        </div>

        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default NotificationSettings;
