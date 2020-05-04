import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const persons = props => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, index) => {
    return (
    <ErrorBoundary key={person.id}>
      <Person
        clickMe={props.clickMe.bind(this, index)}
        name={person.name}
        age={person.age}
        changed={event => props.changed(event, person.id)} />
    </ErrorBoundary>
    );
  });
};

export default persons;
