import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './billingCycleActions';
import labelAndInput from '../common/form/labelAndInput';
import Card from '../common/widget/card';
import ClientList from '../client/clientList';
import inputAndLabel from '../common/form/InputAndLabel';


class BillingCycleForm extends Component {
  constructor(props) {
    super(props);
  }

  Submit(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <Card label='Pesquisa de Clientes'>
          <ClientList isSelectable='true' />
        </Card>
        <div className='row'>
          <Field name='clientId' component={inputAndLabel}
            label='Cliente ID' cols='12 4' val={this.props.client.id}
            placeholder='Informe o id do Cliente' type='number' readOnly='true'
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