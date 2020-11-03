import axios from 'axios';
import { fetchCompanyInfo } from '../actions/index';

function getCompanyInfoRequest(symbol) {
  return dispatch => {
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=6317b1f8dbeb19711e595a3a9e6da059`;
    axios.get(url)
      .then(res => {
        const companyInfo = res.data;
        dispatch(fetchCompanyInfo(companyInfo));
      });
  };
}

export default getCompanyInfoRequest;
