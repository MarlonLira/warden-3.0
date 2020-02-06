import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import Product from '../product/product';
import Client from '../client/client';
import Components from '../component/components';

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/billingCycles' component={BillingCycle} />
    <Route path='/products' component={Product} />
    <Route path='/clients' component={Client} />
    <Route path='/components' component={Components} />
    <Redirect from='*' to='/' />
  </Router>
);