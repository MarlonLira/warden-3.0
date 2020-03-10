import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import Product from '../product/product';
import Client from '../client/client';
import Components from '../component/components';
import Login from '../login/login';

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/billingCycles' component={BillingCycle} />
    <Route path='/products' component={Product} />
    <Route path='/clients' component={Client} />
    <Route path='/components' component={Components} /> 
    <Route path='/login' component={Login} /> 
    <Redirect from='*' to='/' />
  </Router>
);