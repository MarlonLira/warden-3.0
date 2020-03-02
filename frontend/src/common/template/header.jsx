import React from 'react';

export default props =>(
  <header className='main-header navbar navbar-expand navbar-white navbar-light'>
    <a href='/#/' className='logo'>
      <span className='logo-mini'><b>My</b>W</span>
      <span className='logo-lg'>
        <i className='fa fa-money'></i>
        <b>My</b>Warden
      </span>
    </a>
    <nav className='navbar navbar-static-top'>
      <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
    </nav>
  </header>
);