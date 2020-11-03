export const fetchStocks = data => ({
  type: 'FETCH_STOCKS',
  payload: data,
});

export const fetchTrendingNews = data => ({
  type: 'FETCH_TRENDING_NEWS',
  payload: data,
});

export const searchStock = value => ({
  type: 'SEARCH_STOCK',
  payload: value,
});

export const deleteStock = stock => ({
  type: 'DELETE_STOCK',
  symbol: stock.symbol,
});

export const fetchStockInfo = data => ({
  type: 'FETCH_STOCK_INFO',
  payload: data,
});

export const fetchStockNews = data => ({
  type: 'FETCH_STOCK_NEWS',
  payload: data,
});

export const fetchCompanyInfo = data => ({
  type: 'FETCH_COMPANY_INFO',
  payload: data,
});
