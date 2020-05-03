import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  
  // testing error management
  // const rnd = Math.random();
  // if (rnd >= 0.7) {
  //   throw new Error('An error was caught!');
  // }

  return (
    <div className={classes.Person}>
      <p onClick={props.clickMe}>I'm {props.name} and I'm {props.age} years old!</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;
