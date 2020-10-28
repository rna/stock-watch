import React from 'react';
import PropTypes from 'prop-types';

const CompanyInfoComponent = ({ profile }) => (
  <table>
    <thead>
      <th>
        <td><img src={profile.image} alt={profile.symbol} /></td>
        <td>{profile.companyName}</td>
      </th>
    </thead>
    <tbody>
      <tr>
        <td>Description</td>
        <td>{profile.description}</td>
      </tr>
      <tr>
        <td>CEO</td>
        <td>{profile.ceo}</td>
      </tr>
      <tr>
        <td>Industry</td>
        <td>{profile.industry}</td>
      </tr>
      <tr>
        <td>Website</td>
        <td>{profile.website}</td>
      </tr>
      <tr>
        <td>Full-time Employees</td>
        <td>{profile.fullTimeEmployees}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>
          {profile.address}
          ,
          {' '}
          {profile.city}
          ,
          {' '}
          {profile.state}
          ,
          {' '}
          {profile.country}
        </td>
      </tr>
      <tr>
        <td>Trade Exchange</td>
        <td>{profile.exchange}</td>
      </tr>
    </tbody>
  </table>
);

CompanyInfoComponent.propTypes = {
  profile: PropTypes.shape({
    image: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ceo: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    fullTimeEmployees: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
  }).isRequired,
};

export default CompanyInfoComponent;
