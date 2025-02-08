import React, { useState } from "react";

const NotificationSettings = ({ onClose }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const categories = ["Events", "Posts", "Comments", "Mentions", "Updates"];

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const handleSave = () => {
    console.log({
      notificationsEnabled: isEnabled,
      email,
      searchCategory,
    });
    onClose?.();
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-sm">
          <h2 className="text-xl font-medium text-blue-500">
            Notification Settings
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Settings Content */}
      <div className="p-6 space-y-6">
        {/* Custom Toggle Switch */}
        <div className="space-y-2">
          <h3 className="text-base font-medium text-gray-700">Notifications</h3>
          <button
            onClick={toggleSwitch}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              isEnabled ? "bg-blue-500" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Categories Section */}
        <div className="space-y-4">
          <h3 className="text-base font-medium text-gray-700">
            Notification Categories
          </h3>
          <input
            type="text"
            placeholder="Search category"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-gray-300 cursor-pointer transition-colors"
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Email Section */}
        <div className="space-y-2">
          <h3 className="text-base font-medium text-gray-700">
            Notification Email
          </h3>
          <input
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="p-6 pt-2">
        <button
          onClick={handleSave}
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;
