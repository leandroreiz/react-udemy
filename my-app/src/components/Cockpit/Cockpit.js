import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('[Cockpit.js] How to control the flow of useEffect');
    // } ,1000)
    // toggleBtnRef.current.click();
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] Clean up 2nd useEffect');
    }
  });

  // Dynamically adding classes
  const assignedClasses = [];

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.blue);
  }

  const btnClasses = [classes.button];

  if (props.showPersons) {
    btnClasses.push(classes.btnRed);
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <h5 className={assignedClasses.join(' ')}>This text is being dynamically stylized</h5>
      <button
        ref={toggleBtnRef} 
        className={btnClasses.join(' ')} 
        onClick={props.clickMe}>Toggle Persons
      </button>
      <button
        className={classes.loginBtn}
        onClick={authContext.login}>Log In
      </button>
    </div>
  );
}

export default React.memo(Cockpit);
