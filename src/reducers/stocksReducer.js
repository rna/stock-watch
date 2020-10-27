const initialState = {
  stocks: [],
};

const stocks = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STOCKS':
      return { ...state, stocks: action.payload };
    default:
      return state;
  }
};

export default stocks;
