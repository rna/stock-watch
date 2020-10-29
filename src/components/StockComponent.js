import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import trashIcon from '../images/trash_16x16.png';

const StockComponent = ({ stock, handleDelete }) => (
  <tr>
    <td><Link to={`/stock/${stock.symbol}`}>{stock.symbol}</Link></td>
    <td>{stock.companyName}</td>
    <td>{stock.price}</td>
    <td>{(stock.marketCap / 1000000000).toFixed(2)}</td>
    <td><button type="button" onClick={() => handleDelete(stock)}><img src={trashIcon} alt="trash button" /></button></td>
  </tr>
);

StockComponent.propTypes = {
  stock: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    marketCap: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default StockComponent;
