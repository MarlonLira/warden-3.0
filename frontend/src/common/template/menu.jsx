import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <MenuTree path='#' label='Dashboard' icon='tachometer-alt' />
      <MenuTree label='Componentes' icon='archive' path='#'>
        <MenuItem label='Acessar' icon='angle-right' path='#components' />
        <MenuItem label='Teste' icon='angle-right' path='#components' />
      </MenuTree>
      <MenuTree label='Dashboard2' icon='tachometer-alt' >
        <MenuItem label='Acessar' icon='circle' path='#' />
      </MenuTree>
    </ul>
  </nav>
);