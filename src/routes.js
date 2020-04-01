import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ImCustomer from './pages/ImCustomer';
import ImMarketer from './pages/ImMarketer';
import Maintenance from './pages/Maintenance';


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