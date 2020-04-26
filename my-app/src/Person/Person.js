import React from 'react';
import './Person.css'

const person = (props) => {
    return (
      <div className="Person">
        <p onClick={props.clickMe}>I'm {props.name} and I'm {props.age} years old!</p>
        <input type="text" onChange={props.changeName} value={props.name} />
      </div>
    )
};

export default person;
