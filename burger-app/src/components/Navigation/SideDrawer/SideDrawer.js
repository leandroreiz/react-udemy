import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import style from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
  
  let attachedStyles = [style.SideDrawer, style.Close];
  if (props.open) {
    attachedStyles = [style.SideDrawer, style.Open];
  }

  return (
    <Auxiliary>
      <Backdrop show={props.open} hide={props.closed}/>
      <div className={attachedStyles.join(' ')}>
        <div className={style.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
