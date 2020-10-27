import stocks from '../api/stocks';

export const fetchStocks = () => ({
  type: 'FETCH_STOCKS',
  payload: stocks,
});

export const searchStock = value => ({
  type: 'SEARCH_STOCK',
  payload: value,
});

export const deleteStock = stock => ({
  type: 'DELETE_STOCK',
  symbol: stock.symbol,
});
