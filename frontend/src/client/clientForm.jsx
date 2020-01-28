import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './clientActions';
import labelAndInput from '../common/form/labelAndInput';

class ClientForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={labelAndInput} required='true'
            label='Nome' cols='12 4' readOnly={readOnly} maxLength='30'
            placeholder='Informe o nome do cliente' type='text'
          />
          <Field name='registryCode' component={labelAndInput}
            label='CPF' cols='12 4' readOnly={readOnly} maxLength='12'
            placeholder='Informe o CPF do cliente' type='text'
          />
          <Field name='phone' component={labelAndInput}
            label='Telefone' cols='12 4' readOnly={readOnly} required='true'
            placeholder='Informe o telefone do cliente' type='number'
          />
          <Field name='email' component={labelAndInput}
            label='Email' cols='12 4' readOnly={readOnly}
            placeholder='Informe o email do cliente' type='text'
          />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className='btn btn-default'
            onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

ClientForm = reduxForm({ form: 'ClientForm' })(ClientForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(ClientForm);