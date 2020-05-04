import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

  const btnClasses = [classes.button];

  if (props.showPersons) {
    btnClasses.push(classes.btnRed);
  }

  // Dynamically adding classes
  const assignedClasses = [];

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.blue);
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

export default cockpit;
