import './App.css';
import Home from "./Home"
import AboutMe from"./AboutMe"
import Profile from"./Profile"
import {Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player";
import List from './List';



//Array to store my books
/*const books = [
    {
    id: "1", 
    title: "Little Rabbit",
    description: "A story about Little Rabbit going on an adventure",
    price: "12.99",
  },
  {
    id: "2",
    title: "Peter The Dog",
    description: "Peter The Dog always jump in the puddle when it rains.",
    price: "15.99",
  },
];
*/
function App() {
  // const bookItems = books.map(book => {
    // const itemWords = ` ${book.id}. ${book.title}- ${book.description}`
    // return <h1>{itemWords}</h1>
  // })

  const [state, setState] = useState(0);
  
  function addOne(){
    setState(prevState => prevState + 1)
  }

  //useEffect is a hook that runs a function when a component renders
  useEffect(() => {
    console.log("The state has changed:", state);
  }, []);//dependency array listens to the state variable and do what is in the function when state changes

     const fruits = [{id: 1, fruit: "mango", color: "orange", calories: 90}, 
                    {id: 2, fruit: "banana", color: "yellow", calories: 100}, 
                    {id: 3, fruit: "pear", color: "peach", calories: 85}, 
                    {id: 4, fruit: "lychee", color: "white", calories: 76}, 
                    {id: 5, fruit: "cherry", color: "red", calories: 120} ];
  return (
    <div className='App'>
      <nav className='nav-bar'>
         <img src="Artboard 23.png" alt="logo" width="auto" height="40"/>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about-me" className='nav-item'>About us</Link>
        <Link to="/profile" className='nav-item'>Sign In</Link>
      </nav>
     
      <div>
           {/* { {bookItems}} */}
          {/* <List items={fruits} category="fruits"/> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <div>
        <h2>Count one at a time</h2>
        <button>-</button>
        <span>{state}</span>
        <button onClick={addOne}>+</button>
      </div>

    </div>
  );
}
export default App;