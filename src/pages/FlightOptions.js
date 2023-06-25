import React, {useState} from "react";
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import logo from "../airplane-png.png";
import '../cheapFlights.css';
import Flights from "../Flights";
import '../Flights.css';
import Navbar from '../NavBar';


function FlightOptions() {
  return (
    <>
     <Navbar/>

    <div className="FlightApp">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />         
          <Routes>
              <Route path="/" element={<Flights />} />
          </Routes>

    </header>
  </div>
  </>
  )
}

export default FlightOptions