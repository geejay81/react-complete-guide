import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Greg', age: 37 },
      { name: 'Callum', age: 34 },
      { name: 'Nick', age: 31 }
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
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
      </div>
    );
  }
}

export default App;
