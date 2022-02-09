import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import { useState, useRef } from 'react';
import Wrapper from '../Helpers/Wrapper';

const AddUsers = (props) => {
  // Hooks
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [errorHandler, setErrorHandler] = useState();

  // Add users
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (!enteredUsername || !enteredAge) {
      setErrorHandler({
        header: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    } else if (+enteredAge < 1) {
      setErrorHandler({
        header: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    } else {
      props.onAddUser(enteredUsername, +enteredAge);

      // It is not recommended to use Refs to manipulate the DOM
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  };

  // Closes the modal error window
  const closeModal = () => {
    setErrorHandler(null);
  };

  return (
    <Wrapper>
      {errorHandler && (
        <Modal
          header={errorHandler.header}
          message={errorHandler.message}
          onClose={closeModal}
        />
      )}
      <Card>
        <form className={styles.form} onSubmit={addUserHandler}>
          <label className={styles.label}>Username</label>
          <input
            id="username"
            className={styles.input}
            type="text"
            ref={nameInputRef}
          />
          <label className={styles.label}>Age (Years)</label>
          <input
            id="age"
            className={styles.input}
            type="text"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
