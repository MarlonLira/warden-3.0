import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, signup } from './authActions';

import Row from '../common/layout/row';
import Grid from '../common/layout/grid';
import If from '../common/operator/if';
import Messages from '../common/msg/messages';
import labelAndInput from '../common/form/labelAndInput';
import AuthForm from './authForm';

class Auth extends Component {
  render() {
    return (
      <div className='hold-transition login-page'>
        <div className='login-box'>
          <div className="login-logo">
            <a href="#"><b>My</b>Warden</a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Faça o login para iniciar sua sessão.</p>
              <AuthForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);