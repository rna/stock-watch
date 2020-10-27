import React from 'react';
import PropTypes from 'prop-types';

const SearchComponent = ({ value, handleSearch }) => (
  <div>
    <input
      placeholder="Search Stocks"
      onChange={handleSearch}
      value={value}
    />
  </div>
);

SearchComponent.propTypes = {
  value: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default SearchComponent;
