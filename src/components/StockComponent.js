import React from 'react';
import PropTypes from 'prop-types';

const StockComponent = ({ stock }) => (
  <tr>
    <td>{stock.symbol}</td>
    <td>{stock.companyName}</td>
    <td>{stock.price}</td>
    <td>{(stock.marketCap / 1000000000).toFixed(2)}</td>
  </tr>
);

StockComponent.propTypes = {
  stock: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    marketCap: PropTypes.number.isRequired,
  }).isRequired,
};

export default StockComponent;
