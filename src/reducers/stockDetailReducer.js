const stockDetail = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STOCK_INFO':
      return { ...state, stockInfo: action.payload };
    default:
      return state;
  }
};

export default stockDetail;
