import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './billingCycleActions';
import labelAndInput from '../common/form/labelAndInput';
import CreditList from './creditList';
import Card from '../common/widget/card';
import ClientList from '../client/clientList';
import inputAndLabel from '../common/form/InputAndLabel';


class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    const clientId = this.props.client.id || 0;
    console.log('---> BillingCycleForm');
    console.log(this.props);
    console.log('<--- BillingCycleForm');
    return (
      <form role='form' onSubmit={handleSubmit}>
        <Card label='Pesquisa de Clientes'>
          <ClientList />
        </Card>
        <div className='row'>
          <Field name='clientId' component={labelAndInput}
            label='Cliente ID' cols='12 4' val={clientId}
            placeholder='Informe o id do Cliente' type='number'
          />
          <Field name='credit' component={labelAndInput}
            label='Credito' cols='12 4' readOnly={readOnly}
            placeholder='Informe o credito' type='number'
          />
          <Field name='debit' component={labelAndInput}
            label='Debito' cols='12 4' readOnly={readOnly}
            placeholder='Informe o Debito' type='number'
          />
          <Field name='date' component={labelAndInput}
            label='Data' cols='12 4' readOnly={readOnly}
            placeholder='Informe a Data' type='date'
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

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const mapStateToProps = state => ({ client: state.client.selectedClient });
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);