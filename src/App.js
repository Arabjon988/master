import React from 'react';
import './App.css';
import Book from './Components/Books/Book';
import Home from './Components/Home/home';


function App() {
  return (
    <div className="App">
<Home/>
<Book/>
    </div>
    
  );
}

export default App;
 
// <>
//       {/* </div> */}
//       <div>
//         <img src="./logo192.png"></img>
//         <h2>React Js</h2>
//         <ul>
//           <li>About</li>
//           <li>Home</li>
//           <li>Product</li>
//           <li>Services</li>
//           <li>Support</li>
//           <li>Log In</li>
//           <li>Sign In</li>
//           <li>We are works</li>
//         </ul>
//         <input type="text" name="" id="" placeholder="Search someone" />
//       </div>
//     </>


// function App() {
//   const{name, job, age}= user;
//   const text = `${name} is ${age} years old ${job}`
//   return (
//     // <div className="App">
//     <>
//       <h1>hello world JSX {12+90}</h1>
//       <p>{text}</p>
//       <input type="text" className="input-react" id="" />
//     {/* </div> */}
//     </>
//   );
// }

// export default App;


// function App() {
//   const{name, job, age}= user;
//   return (
//     <div className="App">
//       <h1>hello world JSX {12+90}</h1>
//       <p>{`${name} is ${age} years old ${job}`}</p>
//       <input type="text" className="input-react" id="" />
//     </div>
//   );
// }

// export default App;



// function App() {
//   const{name, job, age}= user;
//   return (
//     <div className="App">
//       <h1>hello world JSX {12+90}</h1>
//       <p>{name} is {age} years old {job}</p>
//       <input type="text" className="input-react" id="" />
//     </div>
//   );
// }

// export default App;



// function App() {
//   return (
//     <div className="App">
//       <h1>hello world JSX {12+90}</h1>
//       <p>{user.name} is {user.age} years old {user.job}</p>
//       <input type="text" className="input-react" id="" />
//     </div>
//   );
// }

// export default App;


// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>