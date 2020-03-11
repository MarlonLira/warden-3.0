import '../common/template/dependencies';
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../main/app';
import Auth from './auth';
import { validateToken } from './authActions';

class AuthOrApp extends Component {
  componentWillMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token);
    }
    console.log(this.props.auth.user);
  }

  render() {

    return <Auth />;
    // const { user, validToken } = this.props.auth;

    // if (User && validToken) {
    //   return <App />;
    // } else if (!user && !validToken) {
    //   return <Auth />;
    // }

    // const { user, validToken } = this.props.auth;
    // if (User && validToken) {
    //   console.log('if')
    //   axios.defaults.headers.common['authorization'] = user.token;
    //   return <App>{this.props.children}</App>;
    // } else if (!user && !validToken) {
    //   console.log('else');
    //   return <Auth />;
    // } else {
    //   return false;
    // }

  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);