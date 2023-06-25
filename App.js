import './App.css';
import Navbar from './components/NavBar';
import SignIn from './components/pages/SignIn';
import TaskList from './components/pages/TaskList';
import { TodoWrapper } from './components/TodoWrapper';
import React, {useState} from 'react';
import HomePage from './components/pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import FlightOptions from './components/pages/FlightOptions';

function App() {
 
    // let Component 
    // // eslint-disable-next-line default-case
    // switch (window.location.pathname) {
    //   case "/" :
    //     Component = App
    //     break 
    //   case "homepage":
    //     Component = HomePage
    //     break
    //   case "listpage":
    //     Component = TaskList
    //     break 
    // }

  return (
    
    
    <>
  <Routes>
   <Route path="/" element={ <SignIn />} /> 
   <Route path="/homepage" element={ <HomePage />} />
   <Route path="/listpage" element={ <TaskList />} />
   <Route path="/listpage" element={ <FlightOptions />} />
   <Route path="/community" element={ <FlightOptions />} />
   </Routes>
  
  
 
   
     </>
   
  

  );
}

export default App;
// <Route exact path="/" component={HomePage} />
   // <Route path="/about" component={TaskList} />