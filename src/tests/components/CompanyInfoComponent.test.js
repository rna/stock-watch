import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CompanyInfoComponent from '../../components/CompanyInfoComponent';

const profile = {
  image: 'https://imgur.com',
  symbol: 'AAPL',
  companyName: 'Apple',
  description: 'Apple is a Trillion Dollar Company',
  ceo: 'Timothy Cook',
  industry: 'technology',
  website: 'www.apple.com',
  fullTimeEmployees: 14652,
  address: 'Apple Park',
  city: 'CS',
  state: 'California',
  country: 'US',
  exchange: 'NASDAQ',
};

describe('Test CompanyInfoComponent', () => {
  it('should render the image in the dom', () => {
    const { queryAllByTestId } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(queryAllByTestId('img')).toBeTruthy();
  });

  it('should render the description', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/Apple is a Trillion Dollar Company/i)).toBeInTheDocument();
  });

  it('should render the ceo name', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/Timothy Cook/)).toBeInTheDocument();
  });

  it('should render the industry', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/technology/)).toBeInTheDocument();
  });

  it('should render the website', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/www.apple.com/)).toBeInTheDocument();
  });
  it('should render the no. of fulltime employees', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/14652/)).toBeInTheDocument();
  });

  it('should render the address', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/Apple Park/)).toBeInTheDocument();
  });

  it('should render the city', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/CS/)).toBeInTheDocument();
  });

  it('should render the state', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/California/)).toBeInTheDocument();
  });

  it('should render the country', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/US/)).toBeInTheDocument();
  });

  it('should render the exchange', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CompanyInfoComponent profile={profile} />
      </BrowserRouter>,
    );
    expect(getByText(/NASDAQ/)).toBeInTheDocument();
  });
});
