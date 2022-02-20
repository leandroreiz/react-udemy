import useInput from '../hooks/use-input';

const SimpleInput = () => {
  ///////////////////////////////////
  // Name input state and validations
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const nameInputClasses = `form-control ${nameInputHasError ? 'invalid' : ''}`;

  ///////////////////////////////////
  // Email input state and validations
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== '' && value.includes('@'));

  const emailInputClasses = `form-control ${
    emailInputHasError ? 'invalid' : ''
  }`;

  ///////////////////////////////////
  // Form validation
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  ///////////////////////////////////
  // Form submission
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) return;

    console.log(enteredName, enteredEmail);

    resetNameInput();
    resetEmailInput();
  };

  ///////////////////////////////////
  // Render
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email address.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
