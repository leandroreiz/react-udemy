import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }

  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }

  return initialInputState;
};

const useInputValidation = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const inputClasses = `form-control ${hasError ? 'invalid' : ''}`;

  const valueChangeHandler = (e) => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const resetInputValue = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    inputClasses,
    valueChangeHandler,
    inputBlurHandler,
    resetInputValue,
  };
};

export default useInputValidation;
