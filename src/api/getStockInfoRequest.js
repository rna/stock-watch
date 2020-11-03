import axios from 'axios';
import { fetchStockInfo } from '../actions/index';

function getStockInfoRequest(symbol) {
  return dispatch => {
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=6317b1f8dbeb19711e595a3a9e6da059`;
    axios.get(url)
      .then(res => {
        const stockInfo = res.data;
        dispatch(fetchStockInfo(stockInfo));
      });
  };
}

export default getStockInfoRequest;
