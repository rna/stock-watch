import axios from 'axios';
import { fetchStocks } from '../actions/index';

function getStocksRequest() {
  return dispatch => {
    const url = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=6317b1f8dbeb19711e595a3a9e6da059';
    axios.get(url)
      .then(res => {
        const stockslist = res.data;
        dispatch(fetchStocks(stockslist));
      });
  };
}

export default getStocksRequest;
