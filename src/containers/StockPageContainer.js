import React from 'react';
import StockInfoComponent from '../components/StockInfoComponent';
import NewsComponent from '../components/NewsComponent';
import demoStockInfo from '../api/demoStockInfo';
import demoStockNews from '../api/demoStockNews';

const StockPageContainer = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th colSpan="5">Statistics</th>
        </tr>
      </thead>
      <StockInfoComponent stockInfo={demoStockInfo[0]} />
    </table>
    <div>
      {demoStockNews.map(news => (
        <NewsComponent key={demoStockNews.indexOf(news)} news={news} />
      ))}
    </div>
  </div>
);

export default StockPageContainer;
