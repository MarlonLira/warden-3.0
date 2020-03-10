import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AccountValidation } from './loginActions';
import LoginForm from './loginForm';

class Login extends Component {
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
              <LoginForm onSubmit={this.props.AccountValidation} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ AccountValidation }, dispatch);
export default connect(null, mapDispatchToProps)(Login);