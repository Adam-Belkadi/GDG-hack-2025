import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Upbar from '../Components/navbar';
import Post from './Components/post';
import Categories from './Components/categories';
import NewPost from './Components/addpost';

export default function PostsInC() {
  const { communityId } = useParams();
  const [visiblePosts, setVisiblePosts] = useState(12);
  const [showAddPost, setShowAddPost] = useState(false);
  const totalPosts = 100;

  const handleLoadMore = () => {
    setVisiblePosts(prevCount => Math.min(prevCount + 9, totalPosts));
  };

  const handleAddPostClick = () => {
    setShowAddPost(true);
  };

  const generateMockData = (index) => ({
    title: `Post ${index + 1}`,
    description: `This is the description for post ${index + 1}. Join us to explore and learn together!`,
    author: `Author ${index + 1}`,
    date: `2025-02-07`
  });

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navbar - Hidden when modal is open */}
      <div className={`transition-opacity duration-200 ${showAddPost ? 'opacity-0' : 'opacity-100'}`}>
        <Upbar />
      </div>
      
      {/* Navigation Tabs - Hidden when modal is open */}
      <div className={`fixed top-[75px] left-0 right-0 bg-white border-b border-gray-200 z-20 lg:left-[358px] transition-opacity duration-200 ${showAddPost ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-center space-x-4 py-4">
            <button className="px-6 py-2 text-sm font-medium text-blue-500 bg-white rounded-lg border border-blue-500 shadow-sm hover:bg-blue-50 transition-all">
              Posts
            </button>
            <button className="px-6 py-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all">
              Events
            </button>
            <button className="px-6 py-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all">
              Ranking
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Fixed Left Sidebar - Hidden when modal is open */}
        <div className={`hidden lg:block w-[358px] fixed left-0 top-[75px] bottom-0 bg-white border-r border-gray-200 z-10 transition-opacity duration-200 ${showAddPost ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="h-[calc(100vh-75px)]">
            <Categories />
          </div>
        </div>

        {/* Main Content - Hidden when modal is open */}
        <div className={`flex-1 lg:ml-[358px] transition-opacity duration-200 ${showAddPost ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-[125px] pb-[80px]">
            <div className="space-y-6">
              {[...Array(visiblePosts)].map((_, index) => (
                <Post 
                  key={index}
                  {...generateMockData(index)}
                />
              ))}
            </div>

            {visiblePosts < totalPosts && (
              <div className="flex justify-center mt-8">
                <button 
                  onClick={handleLoadMore}
                  className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm hover:shadow font-medium"
                >
                  Load More ({totalPosts - visiblePosts} left)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Add Post Button - Hidden when modal is open */}
      <div className={`fixed bottom-6 right-6 lg:right-10 z-30 transition-opacity duration-200 ${showAddPost ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button 
          onClick={handleAddPostClick}
          className="flex items-center gap-2 bg-white text-blue-500 px-6 py-3 rounded-full shadow-lg border border-blue-500 hover:bg-blue-50 transition-all font-medium"
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
              d="M12 4v16m8-8H4" 
            />
          </svg>
          Add Post
        </button>
      </div>

      {/* Add Post Modal */}
      {showAddPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white flex justify-between items-center p-4 border-b z-10">
              <h2 className="text-xl font-semibold text-gray-900">Create New Post</h2>
              <button 
                onClick={() => setShowAddPost(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <NewPost onClose={() => setShowAddPost(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}