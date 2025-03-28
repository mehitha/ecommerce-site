// import React from "react";
// import Nav from "./nav";


// function App() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind in React!</h1>
//     </div>
//   );
// }

// export default App;



// src/App.js
import React from "react";
import Nav from "./nav"; // ✅ Use lowercase "n" to match nav.js

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <Nav /> {/* Use the Nav component */}
      {/* <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind in React!</h1>
      </div> */}
    </div>
  );
}

export default App;

