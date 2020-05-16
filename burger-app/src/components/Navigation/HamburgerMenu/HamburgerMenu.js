import React from 'react';

import style from './HamburgerMenu.module.css'

const hamburgerMenu = (props) => {
  return (
    <button
        className={style.HamburgerMenu}
        type="button"
        onClick={props.toggleSideDrawer}>
        <span className={style.HamburgerMenuBox}>
            <span className={style.HamburgerMenuInner}></span>
        </span>
    </button>
  );
}

export default hamburgerMenu;
