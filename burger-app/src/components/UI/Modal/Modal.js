import React from 'react';

import style from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <Auxiliary>
    <Backdrop show={props.show} hide={props.modalClosed}/>
    <div
      className={style.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Auxiliary>
);

export default modal;
