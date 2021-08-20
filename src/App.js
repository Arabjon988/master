import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Bonus from './Components/Bonus/Bonus';
import Book from './Components/Books/Book';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/home';
import Navbar from './Page/Navbar';


function App() {
  return (
    <Router>
      <div className="app">
      <Navbar/>
        <Switch>
        <Route exact path="/home" component={() => <Home />}/>
        <Route exact path="/book" component={() => <Book />}/>
        <Route exact path="/bonus" component={() => <Bonus />}/>
          <Route exact path ="/contact" component = {() => <Contact />} />
        </Switch>
      </div>
    </Router>
    
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