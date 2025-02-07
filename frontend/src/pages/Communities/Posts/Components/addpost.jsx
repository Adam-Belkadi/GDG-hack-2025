import React, { useState } from 'react';

const NewPost = ({ onClose }) => {
  const [postTitle, setPostTitle] = useState('');
  const [description, setDescription] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchCategory, setSearchCategory] = useState('');
  const [categories] = useState([
    'Web Development', 'Mobile Dev', 'UI/UX', 'DevOps', 'Cloud', 
    'AI/ML', 'Blockchain', 'Security', 'Data Science', 'IoT'
  ]);

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleRemoveCategory = (categoryToRemove) => {
    setSelectedCategories(selectedCategories.filter(cat => cat !== categoryToRemove));
  };

  const handleAddPost = () => {
    console.log({
      postTitle,
      description,
      additionalInfo,
      selectedCategories
    });
    onClose?.();
  };

  return (
    <div className="w-full max-w-2xl p-4 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">New Post</h2>
        <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
          U
        </div>
      </div>

      <div className="space-y-4">
        {/* Post Title */}
        <div className="space-y-1">
          <label htmlFor="postTitle" className="text-sm font-medium text-gray-700">Title</label>
          <input
            id="postTitle"
            type="text"
            placeholder="Enter post title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            placeholder="Write your post description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-32 p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Additional Information */}
        <div className="space-y-1">
          <label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">Additional Information</label>
          <textarea
            id="additionalInfo"
            placeholder="Any additional details..."
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="w-full h-24 p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Categories</label>
          <div className="w-full overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-2 rounded-full cursor-pointer transition-colors whitespace-nowrap border
                    ${selectedCategories.includes(category)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Search */}
        <div className="space-y-1">
          <label htmlFor="categorySearch" className="text-sm font-medium text-gray-700">Search Categories</label>
          <input
            id="categorySearch"
            type="text"
            placeholder="Search for categories..."
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Selected Categories */}
        <div className="border border-gray-300 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">Selected Categories</h3>
          <div className="max-h-48 overflow-y-auto space-y-2">
            {selectedCategories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg group"
              >
                <span className="text-gray-700">{category}</span>
                <button
                  onClick={() => handleRemoveCategory(category)}
                  className="text-gray-400 group-hover:text-red-500 text-xl font-medium transition-colors"
                  aria-label={`Remove ${category} category`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleAddPost}
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;