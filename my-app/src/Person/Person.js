import React from 'react';

const person = (props) => {
    return (
      <div>
        <p onClick={props.clickMe}>I'm {props.name} and I'm {props.age} years old!</p>
      </div>
    )
};

export default person;