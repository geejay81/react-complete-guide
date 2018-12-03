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