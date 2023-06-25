import React from 'react'
import Navbar from '../NavBar';


function HomePage() {
  return (
    <>
      <Navbar/>
      <div className="HomePage">
        Welcome back Sarah!
       <h1>Recent trips: </h1> 
       <button className="search-button2" >
          + New Trip
        </button>
        <h3>New York to Vancouver (Process)&nbsp;     &nbsp;| Budget : $1,523</h3>


        <h3>New York to California (Complete)&nbsp;     &nbsp;| Budget : $1,300</h3>

        </div>
       
    
    </>
  )
}

export default HomePage