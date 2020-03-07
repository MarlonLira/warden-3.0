import React from 'react';

export default props => (
  <div className='card card-primary card-outline card-outline-tabs'>
    <div className='nav-tabs-custom'>
      {props.children}
    </div>
  </div>
)