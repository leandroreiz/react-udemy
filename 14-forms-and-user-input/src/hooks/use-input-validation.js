import { useState } from 'react';

const useInputValidation = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputClasses = `form-control ${hasError ? 'invalid' : ''}`;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouched(true);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInputValue = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    enteredValue,
    valueIsValid,
    hasError,
    inputClasses,
    valueChangeHandler,
    inputBlurHandler,
    resetInputValue,
  };
};

export default useInputValidation;
