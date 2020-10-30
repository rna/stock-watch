import axios from 'axios';
import { fetchTrendingNews } from '../actions/index';

function getTrendingNewsRequest() {
  return dispatch => {
    const url = 'https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=6317b1f8dbeb19711e595a3a9e6da059';
    axios.get(url)
      .then(res => {
        const trendingNews = res.data;
        dispatch(fetchTrendingNews(trendingNews));
      });
  };
}

export default getTrendingNewsRequest;
