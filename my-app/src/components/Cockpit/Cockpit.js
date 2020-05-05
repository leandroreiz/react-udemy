import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('[Cockpit.js] How to control the flow of useEffect');
    } ,1000)
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] Clean up 2nd useEffect');
    }
  });

  // Dynamically adding classes
  const assignedClasses = [];

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.blue);
  }

  const btnClasses = [classes.button];

  if (props.showPersons) {
    btnClasses.push(classes.btnRed);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <h4 className={assignedClasses.join(' ')}>This text is being dynamically stylized</h4>
      <button className={btnClasses.join(' ')} onClick={props.clickMe}>
        Toggle Persons
      </button>

    </div>
  );
}

export default Cockpit;
