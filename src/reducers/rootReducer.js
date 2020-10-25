import { combineReducers } from 'redux';
import stocks from './stocksReducer';

const rootReducer = combineReducers({ stocks });

export default rootReducer;
