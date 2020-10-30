import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import StockInfoComponent from '../components/StockInfoComponent';
import NewsComponent from '../components/NewsComponent';
import CompanyInfoComponent from '../components/CompanyInfoComponent';
import getCompanyInfoRequest from '../api/getCompanyInfoRequest';
import { fetchStockInfo, fetchStockNews } from '../actions/index';

const StockPageContainer = ({
  stockInfo,
  fetchStockInfo,
  stockNews,
  fetchStockNews,
  companyInfo,
  getCompanyInfoRequest,
}) => {
  const { symbol } = useParams();

  useEffect(() => {
    fetchStockInfo();
    fetchStockNews();
    getCompanyInfoRequest(symbol);
  }, []);

  let customStockInfoComponent;
  let customStockNewsComponent;
  let customCompanyInfoComponent;
  if (stockInfo) {
    customStockInfoComponent = <StockInfoComponent stockInfo={stockInfo[0]} />;
  } else {
    customStockInfoComponent = <div className="loader" />;
  }

  if (stockNews) {
    customStockNewsComponent = stockNews.map(news => (
      <NewsComponent key={stockNews.indexOf(news)} news={news} />
    ));
  } else {
    customStockNewsComponent = <div className="loader" />;
  }

  if (companyInfo) {
    customCompanyInfoComponent = <CompanyInfoComponent profile={companyInfo[0]} />;
  } else {
    customCompanyInfoComponent = <div className="loader" />;
  }

  return (
    <div className="sub-container">
      <div className="left-sub-container">
        {customCompanyInfoComponent}

        {customStockInfoComponent}

      </div>
      <div className="right-sub-container">
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
  getCompanyInfoRequest,
};

StockPageContainer.propTypes = {
  stockInfo: PropTypes.instanceOf(Array).isRequired,
  fetchStockInfo: PropTypes.func.isRequired,
  stockNews: PropTypes.instanceOf(Array).isRequired,
  fetchStockNews: PropTypes.func.isRequired,
  companyInfo: PropTypes.instanceOf(Array).isRequired,
  getCompanyInfoRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockPageContainer);
