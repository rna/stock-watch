import stocks from '../api/stocks';

const showStocks = () => ({
  type: 'SHOW_STOCKS',
  payload: stocks,
});

export default showStocks;
