import '../common/template/dependencies';
import React from 'react';

import Navbar from '../common/template/navbar/navbar';
import NavbarItem from '../common/template/navbar/navItem';
import NavbarItems from '../common/template/navbar/navItems';
import NavbarSearch from '../common/template/navbar/navSearch';
import SideBar from '../common/template/sideBar';
import Footer from '../common/template/footer';
import Routes from './routes';
import Messages from '../common/msg/messages';
import Login from '../login/login';

import If from '../common/operator/if';

const isUser = true;
export default props => (
  <div className='wrapper'>
    <If test={isUser == true}>
      <div>
        <Navbar>
          <NavbarItems>
            <NavbarItem label="Inicio" source="#" />
            <NavbarItem label="Contato" source="#contato" />
          </NavbarItems>
          <NavbarSearch />
        </Navbar>
        <SideBar />
        <div className='content-wrapper'>
          <Routes />
        </div>
        <Footer />
      </div>
    </If>
    <If test={isUser == false}>
      <Login />
    </If>
    <Messages />
  </div >
)
