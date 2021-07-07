import React from "react";
// import logo from './logo.svg';
// import './App.css';
import AddUser from "./components/users/AddUser";
import AddPost from "./components/posts/AddPost";

function App() {
  return (
    <div>
      <AddUser />
      <AddPost />
    </div>
  );
}

export default App;

// OLD CODE INSIDE APP RETURN
// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
