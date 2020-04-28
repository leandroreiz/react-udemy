import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    // retrieves the index of the person targeted
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    // creates a copy of that person (to not directly mutate the state)
    const person = {...this.state.persons[personIndex]};
    // changes the name for that person
    person.name = event.target.value;
    // copies the array of persons
    const persons = [...this.state.persons];
    // update the targeted person with the object created above
    persons[personIndex] = person;
    // set the new state
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; // creates a pointer to the persons array [not recommended]
    // const persons = this.state.persons.slice(); // copies the array into the persons variable [vanilla JavaScript]
    const persons = [...this.state.persons]; // same as splice() but using the ES6 spread operator
    // remove the person on that specific index
    persons.splice(personIndex, 1);
    // update the state
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              clickMe={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.namechangeHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h4>The paragraph below is a functional component</h4>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
