import React from 'react';
import StockInfoComponent from '../components/StockInfoComponent';
import demoStockInfo from '../api/demoStockInfo';

const StockPageContainer = () => (
  <table>
    <thead>
      <tr>
        <th colSpan="5">Statistics (Company Name)</th>
      </tr>
    </thead>
    <StockInfoComponent stockInfo={demoStockInfo[0]} />
  </table>
);

export default StockPageContainer;
