import React, { PureComponent } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends PureComponent {
  
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // using a PureComponent is the same as running the shouldComponentUpdate to check all props

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.clickMe !== this.props.clickMe ||
  //     nextProps.changed !== this.props.changed
  //     ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] ComponentDidUpdate');
    console.log(snapshot);

  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
      <ErrorBoundary key={person.id}>
        <Person
          isAuth={this.props.isAuthenticated}
          clickMe={this.props.clickMe.bind(this, index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)} />
      </ErrorBoundary>
      );
    });
  }
};

export default Persons;
