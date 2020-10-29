import React from 'react';
import PropTypes from 'prop-types';

const StockInfoComponent = ({ stockInfo }) => (
  <div className="stock-info">
    <table>
      <thead>
        <tr>
          <th colSpan="5">
            Statistics (
            {stockInfo.symbol}
            )
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div>OPEN</div>
            <div>
              &#36;
              {stockInfo.open.toFixed(2)}
            </div>
          </td>
          <td>
            <div>HIGH</div>
            <div>
              &#36;
              {stockInfo.dayHigh.toFixed(2)}
            </div>
          </td>
          <td>
            <div>LOW</div>
            <div>
              &#36;
              {stockInfo.dayLow.toFixed(2)}
            </div>
          </td>
          <td>
            <div>52WK HIGH</div>
            <div>
              &#36;
              {stockInfo.yearHigh.toFixed(2)}
            </div>
          </td>
          <td>
            <div>52WK LOW</div>
            <div>
              &#36;
              {stockInfo.yearLow.toFixed(2)}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>VOLUME</div>
            <div>
              {(stockInfo.volume / 1000000).toFixed(2)}
              M
            </div>
          </td>
          <td>
            <div>AVG. VOLUME</div>
            <div>
              {(stockInfo.avgVolume / 1000000).toFixed(2)}
              M
            </div>
          </td>
          <td>
            <div>MARKET CAP.</div>
            <div>
              {(stockInfo.marketCap / 1000000000).toFixed(2)}
              B
            </div>
          </td>
          <td>
            <div>P/E RATIO</div>
            <div>{stockInfo.pe.toFixed(2)}</div>
          </td>
          <td>
            <div>PREV. CLOSE</div>
            <div>
              &#36;
              {stockInfo.previousClose}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

);

StockInfoComponent.propTypes = {
  stockInfo: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
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
