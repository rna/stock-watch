import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import StockComponent from '../../components/StockComponent';

const stock = {
  symbol: 'AAPL',
  companyName: 'Apple',
  price: 112,
  marketCap: 1996000000000,
};

const handleDelete = () => null;

describe('Test StockComponent', () => {
  it('should render the stock symbol', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockComponent stock={stock} handleDelete={handleDelete} />
      </BrowserRouter>,
    );
    expect(getByText(/AAPL/)).toBeInTheDocument();
  });

  it('should render the stock companyName', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockComponent stock={stock} handleDelete={handleDelete} />
      </BrowserRouter>,
    );
    expect(getByText(/Apple/)).toBeInTheDocument();
  });

  it('should render the stock price', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockComponent stock={stock} handleDelete={handleDelete} />
      </BrowserRouter>,
    );
    expect(getByText(/112/)).toBeInTheDocument();
  });

  it('should render the marketCap', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StockComponent stock={stock} handleDelete={handleDelete} />
      </BrowserRouter>,
    );
    expect(getByText(/1996.00/)).toBeInTheDocument();
  });

  it('should render the button in the dom', () => {
    const { queryAllByTestId } = render(
      <BrowserRouter>
        <StockComponent stock={stock} handleDelete={handleDelete} />
      </BrowserRouter>,
    );
    expect(queryAllByTestId('button')).toBeTruthy();
  });
});
