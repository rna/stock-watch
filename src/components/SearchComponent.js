import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/search-black.svg';

const SearchComponent = ({ value, handleSearch }) => (
  <div className="search-wrapper">
    <img className="search-icon" src={searchIcon} alt="search" />
    <input
      placeholder="Search for Company"
      onChange={handleSearch}
      value={value}
      className="search-input"
      type="text"
    />
  </div>
);

SearchComponent.propTypes = {
  value: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default SearchComponent;
