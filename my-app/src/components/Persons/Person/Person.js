import React, { Component } from 'react';
import classes from './Person.module.css';
import Auxiliar from '../../../hoc/Auxiliar';

class Person extends Component {
  // testing error management
  // const rnd = Math.random();
  // if (rnd >= 0.7) {
  //   throw new Error('An error was caught!');
  // }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliar>
        <p onClick={this.props.clickMe}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Auxiliar>
    )
  }
};

export default Person;
