import React from 'react';
import './UserInput.css';

// 1. create a new component called UserInput
// 2. UserInput should hold an input element
// 7. (App.js) ...and bind it to the input-change event
// 9. add two-way-binding to your input to also display the starting username
export default function UserInput(props) {
  return (
    <div> 
      <input className="UserInput" type="text" placeholder="Enter User Name" onChange={props.changeUserName} value={props.userName} />
    </div>
  );
}
