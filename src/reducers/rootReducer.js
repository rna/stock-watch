import { combineReducers } from 'redux';
import stocks from './stocksReducer';
import search from './searchReducer';

const rootReducer = combineReducers({ stocks, search });

export default rootReducer;
