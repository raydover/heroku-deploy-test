// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  return (
    <div className="container">
      <h1>Hello! My name is Raymond Dover</h1>
      <p>My interests are:</p>
      <ul className="parent">
        <li>Dirt Biking</li>
        <li>Baketball</li>
        <li>Coaching</li>
        <li>Farming</li>
        <li>AVL Produciton</li>
        <li>Coding</li>
      </ul>
    </div>
  );
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
