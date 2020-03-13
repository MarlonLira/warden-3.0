import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom'
import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import Product from '../product/product';
import Client from '../client/client';
import Components from '../component/components';
import Login from '../login/login';
import AuthOrApp from '../auth/authOrApp';

// export default props => (
//   <Router history={hashHistory}>
//     <Route path='/' component={Dashboard} />
//     <Route path='/billingCycles' component={BillingCycle} />
//     <Route path='/products' component={Product} />
//     <Route path='/clients' component={Client} />
//     <Route path='/components' component={Components} /> 
//     <Route path='/login' component={Login} /> 
//     <Redirect from='*' to='/' />
//   </Router>
// );
export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
      <Route path='/products' component={Product} />
      <Route path='/clients' component={Client} />
      <Route path='/components' component={Components} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);