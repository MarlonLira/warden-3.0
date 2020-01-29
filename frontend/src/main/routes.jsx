import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import Product from '../product/product';
import Client from '../client/client';

export default props => (
  <Router history ={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/billingCycles' component={BillingCycle} />
    <Route path='/products' component={Product} />
    <Route path='/clients' component={Client} />
    <Redirect from='*' to='/' />
  </Router>
);