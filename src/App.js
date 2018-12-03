import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    persons: [
      { name: 'Greg', age: 37 },
      { name: 'Callum', age: 34 },
      { name: 'Nick', age: 31 }
    ],
    username: 'Greg'
  }

  switchNameHandler = () => {
    // console.log('button was clicked')
    this.setState({
      persons: [
        { name: 'Gregory', age: 37 },
        { name: 'Callum', age: 34 },
        { name: 'Nick', age: 31 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Gregory', age: 37 },
        { name: event.target.value, age: 34 },
        { name: 'Nick', age: 31 }
      ]
    });
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My hobbies are: Cricket</Person>
        <UserInput change={this.updateUsername} username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
