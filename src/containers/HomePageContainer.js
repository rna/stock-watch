import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockComponent from '../components/StockComponent';
import { fetchStocks, searchStock, deleteStock } from '../actions/index';
import SearchComponent from '../components/SearchComponent';

const HomePageContainer = ({
  stocks, fetchStocks, searchStock, search, deleteStock,
}) => {
  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  let filtered = stocks;
  if (search === '') {
    filtered = stocks;
  } else {
    filtered = stocks.filter(e => e.companyName.toLowerCase().includes(search.toLowerCase()));
  }

  const handleSearch = e => {
    searchStock(e.target.value);
  };

  const handleDelete = stock => {
    deleteStock(stock);
  };

  return (
    <div className="sub-container">
      <div className="left-sub-container">
        <SearchComponent value={search} handleSearch={handleSearch} />
        <table className="stock-list">
          <thead>
            <tr>
              <th>SYMBOL</th>
              <th>COMPANY NAME</th>
              <th>PRICE (USD)</th>
              <th>MARKET CAP.(Billions)</th>
              <th>Action(s)</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <StockComponent key={filtered.indexOf(s)} stock={s} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="right-sub-container">
        <h1>News Section</h1>
      </div>
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
  deleteStock,
};

HomePageContainer.propTypes = {
  stocks: PropTypes.instanceOf(Array).isRequired,
  fetchStocks: PropTypes.func.isRequired,
  searchStock: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  deleteStock: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
