import stocks from '../api/stocks';

export const showStocks = () => ({
  type: 'SHOW_STOCKS',
  payload: stocks,
});

export const searchStock = value => ({
  type: 'SEARCH_STOCK',
  payload: value,
});
