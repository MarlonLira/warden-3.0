import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { AccountValidation } from './loginActions';
import labelAndInput from '../common/form/labelAndInput';


class Login extends Component {
  render() {
    const result = this.props;
    return (
      <div className='hold-transition login-page'>
        <div className='login-box'>
          <div className="login-logo">
            <a href="#"><b>My</b>Warden</a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Faça o login para iniciar sua sessão.</p>
              <form role='form' onSubmit={this.props.AccountValidation} >
                <div className='row'>
                  <Field name='email' component={labelAndInput} required='true'
                    label='Login' cols='12 12' maxLength='30'
                    placeholder='Informe seu email ou cpf' type='email'
                  />
                  <Field name='password' component={labelAndInput}
                    label='Senha' cols='12 12' required='true'
                    placeholder='Informe sua senha' type='password'
                  />
                </div>
                <div className='row'>
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        Lembrar-Me
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button type='submit' className='btn btn-block btn-primary '>
                      Entrar
                  </button>
                  </div>
                </div>
                <p className="mb-1">
                  <a href="forgot-password.html">Esqueci minha senha</a>
                </p>
                <p className="mb-0">
                  <a href="register.html" className="text-center">Registrar-se</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login = reduxForm({ form: 'loginForm' })(Login);
const mapDispatchToProps = dispatch => bindActionCreators({ AccountValidation }, dispatch);
export default connect(null, mapDispatchToProps)(Login);