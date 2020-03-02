import '../common/template/dependenciesv2';
import React from 'react';

import Header from '../common/template/header';
import SideBar from '../common/template/sideBar';
import SideBar2 from '../common/template/sideBar2';
import Footer from '../common/template/footer';
import Routes from './routes';
import Messages from '../common/msg/messages';
import Header2 from '../common/template/header2';

export default props => (
  <div className='wrapper'>
    <Header2 />
      <SideBar2 />
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer />
    <Messages />
  </div>
)
