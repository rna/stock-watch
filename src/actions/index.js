// import demoStocks from '../api/demoStocks';
import demoStockInfo from '../api/demoStockInfo';
import demoStockNews from '../api/demoStockNews';

export const fetchStocks = data => ({
  type: 'FETCH_STOCKS',
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

export const fetchStockInfo = () => ({
  type: 'FETCH_STOCK_INFO',
  payload: demoStockInfo,
});

export const fetchStockNews = () => ({
  type: 'FETCH_STOCK_NEWS',
  payload: demoStockNews,
});

export const fetchCompanyInfo = data => ({
  type: 'FETCH_COMPANY_INFO',
  payload: data,
});
