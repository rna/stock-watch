import React, { useState } from 'react';

const SearchComponent = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <input
        placeholder="Search Stocks"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <h1>{value}</h1>
    </div>
  );
};

export default SearchComponent;
