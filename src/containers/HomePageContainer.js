import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockComponent from '../components/StockComponent';
import showStocks from '../actions/index';
import SearchComponent from '../components/SearchComponent';

const HomePageContainer = ({ stocks, showStocks }) => {
  useEffect(() => {
    showStocks();
  }, []);

  return (
    <div>
      <SearchComponent />
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
          {stocks.map(s => (
            <StockComponent key={stocks.indexOf(s)} stock={s} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  stocks: state.stocks,
});

const mapDispatchToProps = {
  showStocks,
};

HomePageContainer.propTypes = {
  stocks: PropTypes.instanceOf(Array).isRequired,
  showStocks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
