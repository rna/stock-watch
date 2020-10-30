const initialState = {
  stocks: '',
};

const stocks = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STOCKS':
      return { ...state, stocks: action.payload };
    case 'DELETE_STOCK': {
      const revised = state.stocks.filter(stock => stock.symbol !== action.symbol);
      return { ...state, stocks: revised };
    }
    default:
      return state;
  }
};

export default stocks;
