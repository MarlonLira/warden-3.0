import React from 'react';
import Menu from './menu';
import UserPanel from './userPanel';

export default props => (
  <aside className='main-sidebar sidebar-dark-primary elevation-4'>
    <section className='sidebar'>
      {/* <!-- Logo --> */}
      <UserPanel />
      <Menu/>
    </section>
  </aside>
);