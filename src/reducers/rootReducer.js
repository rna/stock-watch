import { combineReducers } from 'redux';
import stocks from './stocksReducer';
import search from './searchReducer';
import stockDetail from './stockDetailReducer';

const rootReducer = combineReducers({ stocks, search, stockDetail });

export default rootReducer;
