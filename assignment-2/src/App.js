import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharsCard from './CharsCard/CharsCard';

class App extends Component {

  // state
  state = {
    inputValue: '',
    charCounter: 0
  }

  // handlers
  charCounterHandler = (event) => {
    const counter = event.target.value.length;
    this.setState({
      inputValue: event.target.value,
      charCounter: counter
    });
  }

  deleteCharHandler = (index) => {
    let newInputValue = this.state.inputValue.split('');
    newInputValue.splice(index, 1);
    newInputValue = newInputValue.join('');
    this.setState({
      inputValue: newInputValue,
      charCounter: this.state.charCounter - 1
    });
  }

  render() {

    let cards = null;

    if (this.state.inputValue) {
      cards = (
        <div>
          {this.state.inputValue.split('').map((char, index) => {
            return <CharsCard
              char={char}
              delete={this.deleteCharHandler.bind(this, index)}
              key={index} />
          })}
        </div>
      );
    }

    // return JSX
    return (
      <div className="App">
        <h1>Assignment 2 - Lists & Conditionals</h1>
        <div className="input-container">
          <input 
            className="input-text" 
            type="text" 
            placeholder="Enter your text here..." 
            onChange={this.charCounterHandler} 
            value={this.state.inputValue} />
          <span className="counter">{this.state.charCounter}</span>
        </div>
        <Validation textLength={this.state.charCounter} />
        {cards}
      </div>
    );
  }
}

export default App;
