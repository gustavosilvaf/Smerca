import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Maintenance from './pages/Maintenance';
import Home from './pages/Home';
import Stores from './pages/Stores';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Maintenance} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/stores" component={Stores} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
