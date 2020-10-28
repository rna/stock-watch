import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer';
import StockPageContainer from './containers/StockPageContainer';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePageContainer />
      </Route>
      <Route path="/stock/:symbol">
        <StockPageContainer />
      </Route>
    </Switch>
  );
}

export default App;
