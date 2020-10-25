import React from 'react';
import StockComponent from '../components/StockComponent';
import stocks from '../api/stocks';

const HomePageContainer = () => (
  <table>
    <thead>
      <th>
        <td>SYMBOL</td>
        <td>COMPANY NAME</td>
        <td>PRICE (USD)</td>
        <td>MARKET CAP.</td>
      </th>
    </thead>
    <tbody>
      {stocks.map(s => <StockComponent key={s.symbol} stock={s} />)}
    </tbody>
  </table>
);

export default HomePageContainer;
