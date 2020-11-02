import React from 'react';
import PropTypes from 'prop-types';
import StockComponent from './StockComponent';

const StocksListComponent = ({ filtered, handleDelete }) => (
  <table className="stock-list">
    <thead>
      <tr>
        <th>SYMBOL</th>
        <th>COMPANY NAME</th>
        <th>PRICE (USD)</th>
        <th>MARKET CAP.(Billions)</th>
        <th>Action(s)</th>
      </tr>
    </thead>
    <tbody>
      {filtered.map(s => (<StockComponent key={s.symbol} stock={s} handleDelete={handleDelete} />))}
    </tbody>
  </table>
);

StocksListComponent.propTypes = {
  filtered: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Array),
  ]).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default StocksListComponent;
