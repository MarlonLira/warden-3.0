import React, { Component } from 'react';
import Select from '../common/widget/select/select';
import Card from '../common/widget/card';
import Form from '../client/clientForm';
import ContentHeader from '../common/template/contentHeader';
import InputAndLabel from '../common/form/InputAndLabel';
import LabelAndInput from '../common/form/labelAndInput';

class Components extends Component {

  constructor(props) {
    super(props);
    this.state = {
      val: 10
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ ...this.state, val: event.target.value });
  }

  render() {
    return (
      <div>
        <ContentHeader title='Clientes' small='Cadastro' />
        <Card label='Teste'>
          <div>
            <Form onSubmit={() => alert("Foi !")}
              submitLabel='Incluir' submitClass='primary' />
          </div>
        </Card>
        <InputAndLabel label='Debito' cols='12 4' placeholder='Informe o Debito' type='text' val={this.state.val} handleChange={this.handleChange} />
      </div>
    );
  }
}


export default Components;