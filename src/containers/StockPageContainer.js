import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockInfoComponent from '../components/StockInfoComponent';
import NewsComponent from '../components/NewsComponent';
import CompanyInfoComponent from '../components/CompanyInfoComponent';
import { fetchStockInfo, fetchStockNews, fetchCompanyInfo } from '../actions/index';

const StockPageContainer = ({
  stockInfo,
  fetchStockInfo,
  stockNews,
  fetchStockNews,
  companyInfo,
  fetchCompanyInfo,
}) => {
  useEffect(() => {
    fetchStockInfo();
    fetchStockNews();
    fetchCompanyInfo();
  }, []);

  let customStockInfoComponent;
  let customStockNewsComponent;
  let customCompanyInfoComponent;
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

  if (companyInfo) {
    customCompanyInfoComponent = <CompanyInfoComponent profile={companyInfo[0]} />;
  } else {
    customCompanyInfoComponent = null;
  }

  return (
    <div>
      {customCompanyInfoComponent}
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
  companyInfo: state.stockDetail.companyInfo,
});

const mapDispatchToProps = {
  fetchStockInfo,
  fetchStockNews,
  fetchCompanyInfo,
};

StockPageContainer.propTypes = {
  stockInfo: PropTypes.instanceOf(Array).isRequired,
  fetchStockInfo: PropTypes.func.isRequired,
  stockNews: PropTypes.instanceOf(Array).isRequired,
  fetchStockNews: PropTypes.func.isRequired,
  companyInfo: PropTypes.instanceOf(Array).isRequired,
  fetchCompanyInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockPageContainer);
