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
  it('should render the stock', () => {
    const { getByText } = render(
      <BrowserRouter>
        <table>
          <tbody>
            <StockComponent stock={stock} handleDelete={handleDelete} />
          </tbody>
        </table>
      </BrowserRouter>,
    );
    expect(getByText(/AAPL/)).toBeInTheDocument();
    expect(getByText(/Apple/)).toBeInTheDocument();
    expect(getByText(/112/)).toBeInTheDocument();
    expect(getByText(/1996.00/)).toBeInTheDocument();
  });

  it('should render the button in the dom', () => {
    const { queryAllByTestId } = render(
      <BrowserRouter>
        <table>
          <tbody>
            <StockComponent stock={stock} handleDelete={handleDelete} />
          </tbody>
        </table>
      </BrowserRouter>,
    );
    expect(queryAllByTestId('button')).toBeTruthy();
  });
});
