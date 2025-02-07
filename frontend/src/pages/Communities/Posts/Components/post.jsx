import React from 'react';

const Post = ({ title, description, author, date }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center p-4 border-b">
        <img 
          src="/icons/user.jpg" 
          alt="Profile" 
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{author}</h2>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>

      {/* Images Gallery */}
      <div className="grid grid-cols-4 gap-1">
        <img 
          src="/icons/user.jpg" 
          alt="Image 1" 
          className="w-full h-32 object-cover"
        />
        <img 
          src="/icons/user.jpg" 
          alt="Image 2" 
          className="w-full h-32 object-cover"
        />
        <img 
          src="/icons/user.jpg" 
          alt="Image 3" 
          className="w-full h-32 object-cover"
        />
        <img 
          src="/icons/user.jpg" 
          alt="Image 4" 
          className="w-full h-32 object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between p-4 border-t">
        <button className="flex items-center bg-white text-yellow-500 hover:bg-yellow-50 px-4 py-2 rounded-lg transition-colors border border-gray-200 shadow-sm">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
          Star
        </button>
        <button className="flex items-center bg-white text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors border border-gray-200 shadow-sm">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Report
        </button>
      </div>
    </div>
  );
};

export default Post;