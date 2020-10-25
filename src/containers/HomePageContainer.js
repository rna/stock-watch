import React from 'react';
import StockComponent from '../components/StockComponent';
import stocks from '../api/stocks';

const HomePageContainer = () => (
  <table>
    <thead>
      <tr>
        <th>SYMBOL</th>
        <th>COMPANY NAME</th>
        <th>PRICE (USD)</th>
        <th>MARKET CAP.(Billions)</th>
      </tr>
    </thead>
    <tbody>
      {stocks.map(s => <StockComponent key={s.symbol} stock={s} />)}
    </tbody>
  </table>
);

export default HomePageContainer;
