import React, { Component } from 'react';

import style from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
      return this.props.show !== nextProps.show || this.props.children !== nextProps.children;
  }

  componentDidUpdate() {
    // console.log('[Modal.js] componentDidUpdate');
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} hide={this.props.modalClosed}/>
        <div
          className={style.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Auxiliary>
    );
  };
}

export default Modal;
