
import React from 'react';
import './Category.css';

const CategorySelector = ({ onCategoryChange, activeCategory }) => {
  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className="category-selector">
      {['business', 'sports', 'technology', 'general', 'health', 'education', 'entertainment'].map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`btn mx-2 ${activeCategory === category ? 'active' : ''}`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
