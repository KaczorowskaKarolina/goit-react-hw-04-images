import React, { useState } from 'react';
import '../styles/searchbar.css';

const Searchbar = ({ handleSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(keyword); // Przekazanie aktualnego keyword do funkcji handleSearch
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" id="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;