import React from 'react';

const Categories = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col bg-white">
      {/* Banner Section - Reduced Height */}
      <div className="relative h-[120px] flex-shrink-0">
        <img 
          src="/icons/user.jpg" 
          alt="Community Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-4 left-4">
          <img 
            src="/icons/user.jpg" 
            alt="Community Avatar" 
            className="w-10 h-10 rounded-full border-4 border-white shadow-sm"
          />
        </div>
      </div>

      {/* Content Section - More Compact */}
      <div className="p-4">
        <div className="pt-4">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Community Name</h2>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Stats Row */}
          <div className="flex gap-4 py-2 border-y border-gray-100 my-2">
            <div>
              <span className="text-sm font-semibold text-gray-900">2.5k</span>
              <span className="text-xs text-gray-500 ml-1">Members</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-900">120</span>
              <span className="text-xs text-gray-500 ml-1">Online</span>
            </div>
          </div>

          {/* Staff Section - Compact */}
          <div className="py-2">
            {/* Owner */}
            <div className="mb-2">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Owner</h3>
              <div className="flex items-center">
                <img 
                  src="/icons/user.jpg" 
                  alt="Owner" 
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm text-gray-800 font-medium">Elise Borg</span>
              </div>
            </div>

            {/* Admins - Reduced spacing */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Admins</h3>
              <div className="flex items-center">
                <img 
                  src="/icons/user.jpg" 
                  alt="Admin 1" 
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm text-gray-800">Artsiom Petrovic</span>
              </div>
              <div className="flex items-center">
                <img 
                  src="/icons/user.jpg" 
                  alt="Admin 2" 
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm text-gray-800">Olivia Rossi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;