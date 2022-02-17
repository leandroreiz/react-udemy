import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [paragraphState, setParagraphState] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App running...');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) setParagraphState((prevState) => !prevState);
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={paragraphState} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
