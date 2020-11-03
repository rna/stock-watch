import axios from 'axios';
import { fetchStockNews } from '../actions/index';

function getStockNewsRequest(symbol) {
  return dispatch => {
    const url = `https://financialmodelingprep.com/api/v3/stock_news?tickers=${symbol}&limit=50&apikey=6317b1f8dbeb19711e595a3a9e6da059`;
    axios.get(url)
      .then(res => {
        const stockNews = res.data;
        dispatch(fetchStockNews(stockNews));
      });
  };
}

export default getStockNewsRequest;
