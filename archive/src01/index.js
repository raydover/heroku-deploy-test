import React from 'react';
// Connect to react and hmtl
import ReactDOM from 'react-dom';
// Write in app component
import App from './App';

// The ReactDOM.render method is used to render a react element into the actual DOM
// The first argument is the component we want to render, and the second is the container element on the page
// All React components have first letter UPPERCASE, ( pair  , values )??
ReactDOM.render(<App />, document.getElementById('root'));
