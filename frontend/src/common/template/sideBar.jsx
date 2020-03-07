import React from 'react';
import Menu from './menu';
import UserPanel from './userPanel';
import Logo from './logo';

export default props => (
  <aside className='main-sidebar sidebar-light-primary elevation-4'>
    {/* <!-- Logo --> */}
    <Logo text="My Warden" icon="coins" />
    <section className='sidebar'>
      <UserPanel name="Teste" />
      <Menu />
    </section>
  </aside>
);