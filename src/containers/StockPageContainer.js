import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockInfoComponent from '../components/StockInfoComponent';
import NewsComponent from '../components/NewsComponent';
import CompanyInfoComponent from '../components/CompanyInfoComponent';
import { fetchStockInfo, fetchStockNews } from '../actions/index';
import demoCompanyInfo from '../api/demoCompanyInfo';

const StockPageContainer = ({
  stockInfo,
  fetchStockInfo,
  stockNews,
  fetchStockNews,
}) => {
  useEffect(() => {
    fetchStockInfo();
    fetchStockNews();
  }, []);

  let customStockInfoComponent;
  let customStockNewsComponent;
  if (stockInfo) {
    customStockInfoComponent = <StockInfoComponent stockInfo={stockInfo[0]} />;
  } else {
    customStockInfoComponent = null;
  }

  if (stockNews) {
    customStockNewsComponent = stockNews.map(news => (
      <NewsComponent key={stockNews.indexOf(news)} news={news} />
    ));
  } else {
    customStockNewsComponent = null;
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
        {customStockNewsComponent}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  stockInfo: state.stockDetail.stockInfo,
  stockNews: state.stockDetail.stockNews,
});

const mapDispatchToProps = {
  fetchStockInfo,
  fetchStockNews,
};

StockPageContainer.propTypes = {
  stockInfo: PropTypes.instanceOf(Array).isRequired,
  fetchStockInfo: PropTypes.func.isRequired,
  stockNews: PropTypes.instanceOf(Array).isRequired,
  fetchStockNews: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockPageContainer);
