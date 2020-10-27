import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer';
import StockDetailContainer from './containers/StockDetailContainer';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePageContainer />
      </Route>
      <Route path="/stock/:symbol">
        <StockDetailContainer />
      </Route>
    </Switch>
  );
}

export default App;
