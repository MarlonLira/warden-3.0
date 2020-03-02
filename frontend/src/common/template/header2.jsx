import React from 'react';

export default props => (
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    
    <ul className="navbar-nav">
    
    <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Contact</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Help
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">FAQ</a>
          <a className="dropdown-item" href="#">Support</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Contact</a>
        </div>
      </li>
    </ul>
    
  </nav>
);