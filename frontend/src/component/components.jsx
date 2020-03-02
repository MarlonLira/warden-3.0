import React, { Component } from 'react';
import Select from '../common/widget/select/select';

class Components extends Component {

  render() {
    return (
      <div>
        <h1>Componentes</h1>
        <Select name='Teste' cols='6 4' />
        <Select name='Teste 2' cols='12 6' list={0} />
      </div>
    );
  }
}

export default Components;