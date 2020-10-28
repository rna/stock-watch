import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockInfoComponent from '../components/StockInfoComponent';
import NewsComponent from '../components/NewsComponent';
import CompanyInfoComponent from '../components/CompanyInfoComponent';
import { fetchStockInfo } from '../actions/index';
import demoStockNews from '../api/demoStockNews';
import demoCompanyInfo from '../api/demoCompanyInfo';

const StockPageContainer = ({ stockInfo, fetchStockInfo }) => {
  useEffect(() => {
    fetchStockInfo();
  }, []);

  let customStockInfoComponent;
  if (stockInfo) {
    customStockInfoComponent = <StockInfoComponent stockInfo={stockInfo[0]} />;
  } else {
    customStockInfoComponent = null;
  }

  return (
    <div>
      <CompanyInfoComponent profile={demoCompanyInfo[0]} />
      <table>
        <thead>
          <tr>
            <th colSpan="5">Statistics</th>
          </tr>
        </thead>
        {customStockInfoComponent}
      </table>
      <div>
        {demoStockNews.map(news => (
          <NewsComponent key={demoStockNews.indexOf(news)} news={news} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  stockInfo: state.stockDetail.stockInfo,
});

const mapDispatchToProps = {
  fetchStockInfo,
};

StockPageContainer.propTypes = {
  stockInfo: PropTypes.instanceOf(Array).isRequired,
  fetchStockInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockPageContainer);
