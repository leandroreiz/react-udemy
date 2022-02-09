import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

import React, { useState, Fragment } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (username, age) => {
    const newUser = {
      id: (Math.random() * username.length).toString(),
      username: username,
      age: age,
    };

    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUser} />
      <UsersList users={users} />
    </Fragment>
  );
}

export default App;
