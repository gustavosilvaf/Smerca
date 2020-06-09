import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Maintenance from './pages/Maintenance';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Maintenance} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
