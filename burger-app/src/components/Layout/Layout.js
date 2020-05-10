import React from 'react';

import style from './Layout.module.css';

import Auxiliary from '../../hoc/Auxiliary';

const layout = ( props ) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={style.Content}>
        {props.children}
    </main>
  </Auxiliary>
);

export default layout;
