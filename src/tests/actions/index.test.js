import {
  fetchStocks,
  fetchTrendingNews,
  searchStock,
  deleteStock,
  fetchStockInfo,
  fetchStockNews,
  fetchCompanyInfo,
} from '../../actions/index';

describe('Test fetchStocks action', () => {
  it('should return an object', () => {
    const data = { id: 1, name: 'Apple' };
    const result = fetchStocks(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Apple' };
    const expectedResult = {
      type: 'FETCH_STOCKS',
      payload: data,
    };
    expect(fetchStocks(data)).toEqual(expectedResult);
  });
});

describe('Test fetchTrendingNews action', () => {
  it('should return an object', () => {
    const data = [{ id: 1, name: 'Apple' }];
    const result = fetchTrendingNews(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Apple' };
    const expectedResult = {
      type: 'FETCH_TRENDING_NEWS',
      payload: data,
    };
    expect(fetchTrendingNews(data)).toEqual(expectedResult);
  });
});

describe('Test searchStock action', () => {
  it('should return an object', () => {
    const data = 'Apple';
    const result = searchStock(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = 'something';
    const expectedResult = {
      type: 'SEARCH_STOCK',
      payload: data,
    };
    expect(searchStock(data)).toEqual(expectedResult);
  });
});

describe('Test deleteStock action', () => {
  it('should return an object', () => {
    const data = { id: 1, symbol: 'AAPL' };
    const result = deleteStock(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, symbol: 'AAPL' };
    const expectedResult = {
      type: 'DELETE_STOCK',
      symbol: data.symbol,
    };
    expect(deleteStock(data)).toEqual(expectedResult);
  });
});

describe('Test fetchStockInfo action', () => {
  it('should return an object', () => {
    const data = { id: 1, name: 'Apple' };
    const result = fetchStockInfo(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Apple' };
    const expectedResult = {
      type: 'FETCH_STOCK_INFO',
      payload: data,
    };
    expect(fetchStockInfo(data)).toEqual(expectedResult);
  });
});

describe('Test fetchStockNews action', () => {
  it('should return an object', () => {
    const data = { id: 1, name: 'Apple' };
    const result = fetchStockNews(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Apple' };
    const expectedResult = {
      type: 'FETCH_STOCK_NEWS',
      payload: data,
    };
    expect(fetchStockNews(data)).toEqual(expectedResult);
  });
});

describe('Test fetchCompanyInfo action', () => {
  it('should return an object', () => {
    const data = { id: 1, name: 'Apple' };
    const result = fetchCompanyInfo(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Apple' };
    const expectedResult = {
      type: 'FETCH_COMPANY_INFO',
      payload: data,
    };
    expect(fetchCompanyInfo(data)).toEqual(expectedResult);
  });
});
