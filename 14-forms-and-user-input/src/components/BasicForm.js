import useInputValidation from '../hooks/use-input-validation';

const BasicForm = () => {
  ///////////////////////////////////
  // First and last name inputs validation
  const isValidName = (inputValue) => inputValue !== '';

  const {
    enteredValue: enteredFirstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputClasses: firstNameClasses,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInputValue: resetFirstNameValue,
  } = useInputValidation(isValidName);

  const {
    enteredValue: enteredLastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputClasses: lastNameClasses,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInputValue: resetLastNameValue,
  } = useInputValidation(isValidName);

  ///////////////////////////////////
  // Email input Validation
  const isValidEmail = (inputValue) => inputValue.includes('@');

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputClasses: emailClasses,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInputValue: resetEmailValue,
  } = useInputValidation(isValidEmail);

  ///////////////////////////////////
  // Form Validation
  let formIsValid = false;
  formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  ///////////////////////////////////
  // Form Submission
  const formSubmission = (e) => {
    e.preventDefault();

    // Guard clause
    if (!formIsValid) return;

    console.log(
      `Full name: ${enteredFirstName} ${enteredLastName}, Email: ${enteredEmail}`
    );

    resetFirstNameValue();
    resetLastNameValue();
    resetEmailValue();
  };

  ///////////////////////////////////
  // Render Components
  return (
    <form onSubmit={formSubmission}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First name invalid.</p>
          )}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Last name invalid.</p>}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Email invalid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
