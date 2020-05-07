import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import Auxiliar from '../../../hoc/Auxiliar';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  // testing error management
  // const rnd = Math.random();
  // if (rnd >= 0.7) {
  //   throw new Error('An error was caught!');
  // }
  
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliar>
        { (this.context.authenticated) ? <p>Authenticated!</p> : <p>Please, log in.</p> }
        <p onClick={this.props.clickMe}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <input
          // ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </Auxiliar>
    )
  }
};

Person.propTypes = {
  clickMe: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  chenged: PropTypes.func
}
/* Output if the age is passed as a string, for example:
 * "Warning: Failed prop type: Invalid prop `age` of type `string` supplied to `Person`, expected `number`."
*/

export default withClass(Person, classes.Person);
