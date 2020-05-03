import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Leandro', age: 36 },
      { id: 2, name: 'Chelem', age: 34 },
      { id: 3, name: 'Nina', age: 6 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  // receives the event and the id as parameters
  namechangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // same as splice() but using the ES6 spread operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clickMe={this.deletePersonHandler}
            changed={this.namechangeHandler} />
        </div>
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            persons={this.state.persons}
             />
          {persons}
        </div>
    );
  }
}

export default App;
