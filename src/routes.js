import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Stores from './pages/Stores';
import RegisterStore from './pages/RegisterStore';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/stores" component={Stores} />
      <Route exact path="/register-store" component={RegisterStore} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
