// First we import `useState` with React so that we can take advantage of the hook
import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // To set a state variable using `useState`, we give our variable a name of `count`.
  // We also set the name of the function that will update `count`. We called it `setCount`.
  // useState accepts only one argument - the initial value of the state variable.
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // This is a handler that we will reference in our `increment` attribute later
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // This is a handler that we will reference in our `decrement` attribute later
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/*This is the count increment and decrement we pass to the CardBody.js file */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
