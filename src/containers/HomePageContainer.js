import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockComponent from '../components/StockComponent';
import { showStocks, searchStock } from '../actions/index';
import SearchComponent from '../components/SearchComponent';

const HomePageContainer = ({
  stocks, showStocks, searchStock, search,
}) => {
  useEffect(() => {
    showStocks();
  }, []);

  let filteredStocks = stocks;
  if (search === '') {
    filteredStocks = stocks;
  } else {
    filteredStocks = stocks.filter(el => (el.companyName).includes(search));
  }

  const handleSearch = e => {
    searchStock(e.target.value);
  };

  return (
    <div>
      <SearchComponent value={search} handleSearch={handleSearch} />
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
          {filteredStocks.map(s => (
            <StockComponent key={filteredStocks.indexOf(s)} stock={s} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  stocks: state.stocks,
  search: state.search,
});

const mapDispatchToProps = {
  showStocks,
  searchStock,
};

HomePageContainer.propTypes = {
  stocks: PropTypes.instanceOf(Array).isRequired,
  showStocks: PropTypes.func.isRequired,
  searchStock: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
