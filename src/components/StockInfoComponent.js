import React from 'react';
import PropTypes from 'prop-types';

const StockInfoComponent = ({ stockInfo }) => (
  <tbody>
    <tr>
      <td>
        <div>OPEN</div>
        <div>{stockInfo.open}</div>
      </td>
      <td>
        <div>HIGH</div>
        <div>{stockInfo.dayHigh}</div>
      </td>
      <td>
        <div>LOW</div>
        <div>{stockInfo.dayLow}</div>
      </td>
      <td>
        <div>52WK HIGH</div>
        <div>{stockInfo.yearHigh}</div>
      </td>
      <td>
        <div>52WK LOW</div>
        <div>{stockInfo.yearLow}</div>
      </td>
    </tr>
    <tr>
      <td>
        <div>VOLUME</div>
        <div>{stockInfo.volume}</div>
      </td>
      <td>
        <div>AVG. VOLUME</div>
        <div>{stockInfo.avgVolume}</div>
      </td>
      <td>
        <div>MARKET CAP.</div>
        <div>{stockInfo.marketCap}</div>
      </td>
      <td>
        <div>P/E RATIO</div>
        <div>{stockInfo.pe}</div>
      </td>
      <td>
        <div>PREV. CLOSE</div>
        <div>{stockInfo.previousClose}</div>
      </td>
    </tr>
  </tbody>
);

StockInfoComponent.propTypes = {
  stockInfo: PropTypes.shape({
    open: PropTypes.number.isRequired,
    dayHigh: PropTypes.number.isRequired,
    dayLow: PropTypes.number.isRequired,
    yearHigh: PropTypes.number.isRequired,
    yearLow: PropTypes.number.isRequired,
    volume: PropTypes.number.isRequired,
    avgVolume: PropTypes.number.isRequired,
    marketCap: PropTypes.number.isRequired,
    pe: PropTypes.number.isRequired,
    previousClose: PropTypes.number.isRequired,
  }).isRequired,
};

export default StockInfoComponent;
