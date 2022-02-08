import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import { useState } from 'react';

const AddUsers = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [errorHandler, setErrorHandler] = useState();

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (!username.trim() || !age) {
      setErrorHandler({
        header: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    } else if (+age < 1) {
      setErrorHandler({
        header: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    } else {
      props.onAddUser(username, +age);
      setUsername('');
      setAge('');
    }
  };

  const closeModal = () => {
    setErrorHandler(null);
  };

  return (
    <div>
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
            value={username}
            id="username"
            className={styles.input}
            type="text"
            onChange={changeUsernameHandler}
          />
          <label className={styles.label}>Age (Years)</label>
          <input
            value={age}
            id="age"
            className={styles.input}
            type="text"
            onChange={changeAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
