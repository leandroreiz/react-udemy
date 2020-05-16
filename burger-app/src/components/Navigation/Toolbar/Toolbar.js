import React from 'react';

import style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const toolbar = (props) => (
  <header className={style.Toolbar}>
    <HamburgerMenu toggleSideDrawer={props.toggleSideDrawer}/>
    <div className={style.Logo}>
      <Logo />
    </div>
    <nav className={style.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
