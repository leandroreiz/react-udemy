import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changeText, setchangeText] = useState(false);

  const changeTextHandler = () => {
    setchangeText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>Original text.</Output>}
      {changeText && <Output>Text Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
