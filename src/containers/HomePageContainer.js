import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockComponent from '../components/StockComponent';
import { fetchStocks, searchStock } from '../actions/index';
import SearchComponent from '../components/SearchComponent';

const HomePageContainer = ({
  stocks, fetchStocks, searchStock, search,
}) => {
  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  let filteredStocks = stocks;
  if (search === '') {
    filteredStocks = stocks;
  } else {
    filteredStocks = stocks.filter(e => e.companyName.toLowerCase().includes(search.toLowerCase()));
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
  stocks: state.stocks.stocks,
  search: state.search,
});

const mapDispatchToProps = {
  fetchStocks,
  searchStock,
};

HomePageContainer.propTypes = {
  stocks: PropTypes.instanceOf(Array).isRequired,
  fetchStocks: PropTypes.func.isRequired,
  searchStock: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
