import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer';
import StockPageContainer from './containers/StockPageContainer';
import SideNavComponent from './components/SideNavComponent';

function App() {
  return (
    <div className="main-container">
      <div className="left-container">
        <SideNavComponent />
      </div>
      <div className="right-container">
        <Switch>
          <Route exact path="/">
            <HomePageContainer />
          </Route>
          <Route path="/stock/:symbol">
            <StockPageContainer />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
