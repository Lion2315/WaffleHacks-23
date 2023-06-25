import React, {useState} from "react";
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import logo from "././Assets/airplane-png.png";
import './App.css';
import Flights from "./Flights";
import './Flights.css';
import Hotels from "./Hotels";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />         
         <Router>
            <Routes>
                <Route path="/" element={<Flights />} />
                <Route path="/hotels" element={<Hotels />} />
            </Routes>
 
          </Router>
      </header>
    </div>
  );
}


export default App;
