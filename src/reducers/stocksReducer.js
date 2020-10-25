const stocks = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_STOCKS':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default stocks;
