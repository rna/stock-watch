const stockDetail = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STOCK_INFO':
      return { ...state, stockInfo: action.payload };
    case 'FETCH_STOCK_NEWS':
      return { ...state, stockNews: action.payload };
    case 'FETCH_COMPANY_INFO':
      return { ...state, companyInfo: action.payload };
    default:
      return state;
  }
};

export default stockDetail;
