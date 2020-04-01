import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ImCustomer from './pages/imCustomer';
import ImMarketer from './pages/imMarketer';
import Maintenance from './pages/Maintenance';

import Main from './pages/main';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Maintenance} />
            <Route path='/sou-cliente' component={ImCustomer} />
            <Route path='/sou-mercado' component={ImMarketer} />
        </Switch>
    
    </BrowserRouter>
);

export default Routes;