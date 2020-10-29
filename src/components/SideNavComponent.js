import React from 'react';
import logo from '../images/arrow-clipart.png';

const SideNavComponent = () => (
  <div className="sidenav">
    <div className="logo">
      <img src={logo} alt="stock-watch" />
      <h2>Stock Watch</h2>
    </div>

    <a href="/">Overview</a>
    <a href="/">Explore</a>
    <a href="/">Notifications</a>
  </div>
);

export default SideNavComponent;
