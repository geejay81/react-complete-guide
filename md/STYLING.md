# Styling

[README](../README.md)

## Using stylesheets

- We can create css sheets for each component, but the classes will all be global styles, they are not restricted to that component
- We can import the css stylesheet at the top of the component where we would like to use it
``` js
import './Person.css';
```
- When adding classes to elements, we need to use className attribute instead of class, as class is reserved in react
- Auto-prefixing takes place so we do not need to add these

## Inline styling

- We can add styles as a Javascript variable, e.g.
``` js
const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
};
```
- Then we can include this on elements with the style attribute, e.g.
``` jsx
<button style={style}>
```
## Radium
### Using Radium
- Install Radium
```
npm install radium --save
```
- Import Radium to project
``` js
import Radium from 'radium';
```
- Amend the export of the component to be a parameter of Radium higher order function
``` js
export default Radium(App);
```
- Now can add seudo styles to style javascript objects
``` js
const style =  {
    ':hover': {
        backgroundColor: 'green'
    }
};

style[':hover'].backgroundColor = 'salmon';
```
### Using Radium with Media Queries
- Import Radium and export component as parameter of Radium as section above
- Additionally in parent component we need to import StyleRoot
``` js
import Radium, { StyleRoot } from 'radium';
```
- Create media query as JavaScript object
``` js
const style = {
    '@media (min-width: 500px)': {
        width: '450px'
    }
}
```
- Attach JavaScript object to component output
``` js
<div style={style}>
```
- Wrap parent component with the StyleRoot tag
``` js
<StyleRoot>
    <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
    </div>
</StyleRoot>
```
## Scoping CSS files with CSS Modules
