import React, { Component } from 'react';
import Select from '../common/widget/select/select';
import Card from '../common/widget/card';
import Form from '../client/clientForm';
import ContentHeader from '../common/template/contentHeader';

class Components extends Component {

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
      </div>
      
    );
  }
}


export default Components;