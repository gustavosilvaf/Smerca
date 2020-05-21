import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Maintenance from './pages/Maintenance';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Maintenance} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
