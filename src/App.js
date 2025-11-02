import './App.css';
import Home from "./Home"
import AboutMe from"./AboutMe"
import {Routes, Route, Link} from 'react-router-dom';
import React from "react";
import ReactPlayer from "react-player";


function App() {
  return (
    <div className='App'>
      <nav className='nav-bar'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about-me" className='nav-item'>About Me</Link>
      </nav>
      <h1>React Player Video</h1>
      <div className='App'>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        controls={true} 
        playing={true}
        muted={true}
        width="640px"
        height="360px"
      />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}


export default App;