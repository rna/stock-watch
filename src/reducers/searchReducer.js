const search = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_STOCK': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default search;
