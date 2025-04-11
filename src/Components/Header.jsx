import React from 'react';
import CategorySelector from './CategorySelector';
import './Header.css';

const Header = ({ onCategoryChange, activeCategory }) => {
  return (
    <header className="custom-header">
      <CategorySelector
        onCategoryChange={onCategoryChange}
        activeCategory={activeCategory}
      />
    </header>
  );
};

export default Header;
