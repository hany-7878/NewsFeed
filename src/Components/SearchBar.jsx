// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded"
        placeholder="Search news"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
