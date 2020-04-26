import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Leandro', age: 36 },
      { name: 'Chelem', age: 34 },
      { name: 'Nina', age: 6 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: 'Chelem Rodrigues', age: 34 },
        { name: 'Nina Rodrigues Reis', age: 6 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h4>The paragraph below is a functional component</h4>
        <button onClick={this.switchNameHandler.bind(this, 'theVacili')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          clickMe={() => this.switchNameHandler('Lion')} >My hobbies: Reading</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
