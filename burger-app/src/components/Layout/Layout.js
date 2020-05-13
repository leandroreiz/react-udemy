import React from 'react';

import style from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
  <Auxiliary>
    <Toolbar />
    <main className={style.Content}>
        {props.children}
    </main>
  </Auxiliary>
);

export default layout;
