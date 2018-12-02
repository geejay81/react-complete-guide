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
    return <h1>I'm the person component!</h1>
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
        <h1>Hi, I'm a React App</h1>
        <Person />
      </div>
    );
  }
}
```