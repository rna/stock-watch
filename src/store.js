import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import stocks from './api/stocks';

const initialState = {
  stocks,
};

const store = createStore(rootReducer, initialState);

export default store;
