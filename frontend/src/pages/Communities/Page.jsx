import React, { useState } from 'react';
import Upbar from './Components/navbar';
import Card from './Components/card';
import Category from './Components/Category';
import './page.css';

export default function Communities() {
  const [visibleCards, setVisibleCards] = useState(12);
  const totalCards = 100;
  
  const categories = [
    'All Communities',
    'Technology',
    'Design',
    'Business',
    'Marketing',
    'Education'
  ];

  const handleLoadMore = () => {
    setVisibleCards(prevCount => Math.min(prevCount + 9, totalCards));
  };

  const generateMockData = (index) => ({
    title: `Community ${index + 1}`,
    description: `This is the description for community ${index + 1}. Join us to explore and learn together!`,
    members: Math.floor(Math.random() * 10000)
  });

  return (
    <div className="homepage">
      <Upbar />
      <div className="homepage-content">
        <div className="header-section">
          <h1 className="discover-text">
            Discover Communities 
            <span className="or-text"> or </span>
            <span className="create-own">create your own</span>
          </h1>
          <div className="categories-buttons">
            {categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </div>
        </div>
        
        <div className="cards-grid">
          {[...Array(visibleCards)].map((_, index) => (
            <Card 
              key={index}
              {...generateMockData(index)}
            />
          ))}
        </div>
        
        {visibleCards < totalCards && (
          <div className="load-more">
            <Category 
              category={`Load More (${totalCards - visibleCards} left)`}
              onClick={handleLoadMore}
            />
          </div>
        )}
      </div>
    </div>
  );
}