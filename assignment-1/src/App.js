import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  // 5. add state to the App component (username) and pass it to the UserOutput component
  state = {
    userName: 'theVacili'
  }

  // 6. add a method to manipulate the state
  userNameHandler = event => {
    this.setState({
      // 8. ensure that the new input entered by the user overwrites the old username passed to UserOutput
      userName: event.target.value
    });
  }

  // 3. Output multiple UserOutput components
  // 4. pass a username of your choice via props and display it there
  // 7. pass the event-handler method reference to the UserInput component... (head to UserInput.js)
  render () {
    return (
      <div className="App">
        <h1>Base Syntax - Assignment Problem</h1>
        <UserInput
          changeUserName={this.userNameHandler}
          userName={this.state.userName} />
        <div className="paragraphs">
          <UserOutput
            userName='chelem' />
          <UserOutput
            userName={this.state.userName} />
          <UserOutput />
        </div>
      </div>
    );
  }
}

export default App;
