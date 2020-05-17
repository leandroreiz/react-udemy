import React, { Component } from 'react';

import style from './Layout.module.css';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerStateHandler = () => {
    const doesShow = this.state.showSideDrawer;
    this.setState({ showSideDrawer: !doesShow });
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar toggleSideDrawer={this.sideDrawerStateHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerStateHandler} />
        <main className={style.Content}>
            {this.props.children}
        </main>
      </Auxiliary>
    );
  }
}

export default Layout;
