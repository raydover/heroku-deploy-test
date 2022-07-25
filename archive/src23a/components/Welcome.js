import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  if (loggedIn) {
    return (
      <div>
        <span role="img" aria-label="tada">
          🎉
        </span>
        <h3>You are signed in!</h3>
        <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <div>
      <span role="img" aria-label="stopsign">
        🛑
      </span>
      <h3>You are currently logged out</h3>
      <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
        Log in
      </button>
    </div>
  );
}



// import React from 'react';

// Here we destructure our props into their own distinct variables
// export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
//   if (loggedIn) {
//     return (
//       <div>
//         <span role="img" aria-label="tada">
//           🎉
//         </span>
//         <h3>You are signed in!</h3>
//         <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
//           Log out
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <span role="img" aria-label="stopsign">
//         🛑
//       </span>
//       <h3>You are currently logged out</h3>
//       <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
//         Log in
//       </button>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import Nav from './Nav';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Resume from '../pages/Resume';

// Here we destructure our props into their own distinct variables
// export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  // console.log('Welcome -> loggedIn', loggedIn);
  // const [page, setPage] = useState('home');

  // let CurrectPage;

  // if (page === 'home') CurrectPage = Home;
  // if (page === 'about') CurrectPage = About;
  // if (page === 'contact') CurrectPage = Contact;
  // if (page === 'resume') CurrectPage = Resume;

  // If we are loggedIn render one set of elements, and if not we render another
//   return (
//     <>
//       <Nav setPage={setPage} />
//       <CurrectPage />
//     </>
//   );
// }