import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Stores from './pages/Stores';
import RegisterStore from './pages/RegisterStore';
import FaqPage from './pages/FaqPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/stores" component={Stores} />
      <Route exact path="/register-store" component={RegisterStore} />
      <Route exact path="/faqs" component={FaqPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
