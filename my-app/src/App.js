import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    // this is also known as JSX
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <h4>The paragraph below is a functional component</h4>
      <Person name='Leandro' age='36' />
      <Person name='Chelem' age='34'>My hobbies: Reading</Person>
      <Person name='Nina' age='6'/>
    </div>
  );
  // the code above compiles to something similar to the code below, so at the end this is JavaScript
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Element created through React'));
}

export default App;
