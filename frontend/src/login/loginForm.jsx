import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import labelAndInput from '../common/form/labelAndInput';
import { init } from './loginActions';


class LoginForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit} >
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
    );
  }
}

LoginForm = reduxForm({ form: 'loginForm' })(LoginForm);
const mapDispatchToProps = dispatch => bindActionCreators(init, dispatch);
export default connect(null, mapDispatchToProps)(LoginForm);