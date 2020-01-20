import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import labelAndInput from '../common/form/labelAndInput';

class ProductForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name='name' component={labelAndInput}
            label='Produto' cols='12 4'
            placeholder='Informe o nome do produto' type='text'
          />
          <Field name='code' component={labelAndInput}
            label='Codigo' cols='12 4'
            placeholder='Informe o codigo do produto' type='text'
          />
          <Field name='amount' component={labelAndInput}
            label='Quantidade' cols='12 4'
            placeholder='Informe a quantidade do produto' type='number'
          />
          <Field name='date' component={labelAndInput}
            label='Data' cols='12 4' readOnly='true'
            placeholder='Informe a data de cadastro do produto' type='date'
          />
          <Field name='validity' component={labelAndInput}
            label='Validade' cols='12 4'
            placeholder='Informe a validade do produto' type='date'
          />
          <Field name='obs' component={labelAndInput}
            label='Obs' cols='12 4'
            placeholder='Observações sobre o produto' type='text'
          />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'productForm' })(ProductForm);