import React from 'react';

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search for apps..."
    onChange={(e) => onSearch(e.target.value)}
  />
);

export default SearchBar;
