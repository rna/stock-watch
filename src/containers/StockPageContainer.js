import React from 'react';
import StockInfoComponent from '../components/StockInfoComponent';
import NewsComponent from '../components/NewsComponent';
import CompanyInfoComponent from '../components/CompanyInfoComponent';
import demoStockInfo from '../api/demoStockInfo';
import demoStockNews from '../api/demoStockNews';
import demoCompanyInfo from '../api/demoCompanyInfo';

const StockPageContainer = () => (
  <div>
    <CompanyInfoComponent profile={demoCompanyInfo[0]} />
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
