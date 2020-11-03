import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import StockInfoComponent from '../../components/StockInfoComponent';

const stock = {
  symbol: 'AAPL',
  open: 116,
  dayHigh: 121,
  dayLow: 112,
  yearHigh: 125,
  yearLow: 102,
  volume: 126000000,
  avgVolume: 76000000,
  marketCap: 1996000000000,
  pe: 23.36,
  previousClose: 114,
};

describe('Test StockInfoComponent', () => {
  it('should render the stock symbol', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/AAPL/)).toBeInTheDocument();
  });

  it('should render the open value', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/116/)).toBeInTheDocument();
  });

  it('should render the day high value', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/121/)).toBeInTheDocument();
  });

  it('should render the day low value', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/112/)).toBeInTheDocument();
  });

  it('should render the year high value', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/125/)).toBeInTheDocument();
  });

  it('should render the year low value', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/102/)).toBeInTheDocument();
  });
  it('should render the volume', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/126/)).toBeInTheDocument();
  });

  it('should render the average volume', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/76/)).toBeInTheDocument();
  });

  it('should render the year high value', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/125/)).toBeInTheDocument();
  });

  it('should render the year low value', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/23.36/)).toBeInTheDocument();
  });

  it('should render the year low value', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockInfoComponent stockInfo={stock} />
      </BrowserRouter>,
    );
    expect(getByText(/114/)).toBeInTheDocument();
  });
});
