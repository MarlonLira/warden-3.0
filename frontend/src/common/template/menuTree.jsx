import React from 'react';

export default props => (
  <li className='nav-item has-treeview menu menu-open'>
    <a href='' className='nav-link'>
      <i className={`nav-icon fa fa-${props.icon}`}></i>
      <p> {props.label}
        <i className={`right fas fa-angle-left`}></i>
      </p>
    </a>
    <ul className='nav nav-treeview'>
      {props.children}
    </ul>
  </li>
);