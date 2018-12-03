# React Components

- We will create our comonents in the src folder created by Create React App routine
- We will create each component in its own subfolder, with capitalised name, e.g.
```
cd src
mkdir Person
cd Person
touch Person.js
```
- The scaffold of the component is setup as below
``` js
import React from 'react';

const person = () => {
    return <h1>I\'m the person component!</h1>
};

export default person;
```
- You can now import this in to a parent component to use, e.g. the App component (App.js)
``` js
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I\'m a React App</h1>
        <Person />
      </div>
    );
  }
}
```

## Dynamic Content
- Wrap anything dynamic in braces {} and this tells react to not render the content verbatim, e.g. ..
``` js
const person = () => {
    return <h1>I am a person and I am { Math.floor(Math.random() * 30) } years old</h1>
};

```
### Props - used to pass data between components
- We can pass data between components using props, the props parameter is passed in, then each prop can be called from this
``` js
const person = (props) => {
    return <h1>My name is {props.name} and I am {props.age} years old!</h1>
};
```
- And we pass this to the component from the parent like this...
``` js
<Person name="Greg" age="37" />
```
### props.children Property
- The children property is a reserved property of props, and will be used to pass anything between the opening and closing tags of the component to the component, e.g. in App.js
``` js
<Person name="Nick" age="31">My hobbies are:</Person>
```
- The string 'My hobbies are:' can be accessed in the component using props.children

### Component state
#### Initialising and using state
- Only available in functions that extend Component
- Initialise by assigning a value, e.g.
``` js
state = {
  persons: [
    { name: 'Greg', age: 37 },
    { name: 'Callum', age: 33 },
    { name: 'Nick', age: 31 }
  ]
}
```
- This can then be called using this.state
``` js
<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
<Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
<Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies are:</Person>
```
### Handling events
- Adding onClick listener to button, the uppercase C is important in onClick. Also, do not add the open/close brackets to the end of the method name as this will call the function immediately - only pass the name as a reference, e.g.
``` js
<button onClick={this.switchNameHandler}>Switch Name</button>
```
- Adding the method to the component class, ES6 way of adding the function
``` js
switchNameHandler = () => {
    console.log('button was clicked')
    // this will do something else later.
  }
```
### Changing the state
- Component state is immutable so we need to use the setState method
``` js
switchNameHandler = () => {
  this.setState({
    persons: [
      { name: 'Gregory', age: 37 },
      { name: 'Callum', age: 34 },
      { name: 'Nick', age: 31 }
    ]
  })
}
```
### Passing method references between components
- We can pass the method reference from the parent to the child in props
``` js
<Person 
  name={this.state.persons[0].name} 
  age={this.state.persons[0].age}
  click={this.switchNameHandler} />
```
- Then call it from the child by referring to props.click
``` js
<h2 onClick={props.click}>My name is {props.name} and I am {props.age} years old!</h2>
```
### Two way binding
- We can create a method to handle a change in the parent component
``` js
nameChangedHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Gregory', age: 37 },
      { name: event.target.value, age: 34 },
      { name: 'Nick', age: 31 }
    ]
  });
}
```
- Then pass this through in props, in this case called 'changed'
``` js
<Person 
  name={this.state.persons[1].name} 
  age={this.state.persons[1].age}
  changed={this.nameChangedHandler} />
```
- Then in the child component, Person, we can add a text box with onChanged calling this changed prop, we can also bind the value to the state so that it starts with the correct value
``` js
<input type="text" onChange={props.changed} value={props.name} />
```
