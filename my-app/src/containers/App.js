import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliar from '../hoc/Auxiliar';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Leandro', age: 36 },
      { id: 2, name: 'Chelem', age: 34 },
      { id: 3, name: 'Nina', age: 6 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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

  toggleCockpitHandler = () => {
    const doesShow = this.state.showCockpit;
    this.setState({ showCockpit: !doesShow });
  }

  render() {
    console.log('[App.js] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clickMe={this.deletePersonHandler}
        changed={this.namechangeHandler} />;
    }

    let cockpit = null;
    let btnMessage = '';
    if (this.state.showCockpit) {
      btnMessage = 'Hide Cockpit';
      cockpit = <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clickMe={this.togglePersonsHandler} />;
    } else {
      btnMessage = 'Show Cockpit';
    }

    return (
        <Auxiliar>
          <button
            className={classes.toggleCockpitBtn} 
            onClick={this.toggleCockpitHandler}>{ btnMessage }
          </button>
          { (this.state.showCockpit) ? cockpit : null }
          {persons}
        </Auxiliar>
    );
  }
}

export default withClass(App, classes.App);
