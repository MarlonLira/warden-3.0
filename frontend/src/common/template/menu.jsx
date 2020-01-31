import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='#' label='Dashboard' icon='dashboard' />
    <MenuTree label='Cadastro' icon='edit'>
      <MenuItem path='#billingCycles'
        label='Ciclos de Pagamentos' icon='usd' />
    <MenuItem path='#products'
        label='Produtos' icon='cube' />
      <MenuItem path='#clients'
        label='Clientes' icon='users' />
    </MenuTree>
    <MenuTree label='Componentes' icon='archive'>
      <MenuItem label='Acessar' icon='angle-right' path='#components'/>
    </MenuTree>
  </ul>
);