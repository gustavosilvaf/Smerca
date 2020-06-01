import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Maintenance from './pages/Maintenance';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/maitenance" component={Maintenance} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
