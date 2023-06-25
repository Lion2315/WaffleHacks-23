import React from 'react'
import { TodoWrapper } from '../TodoWrapper';
import Navbar from '../NavBar';

function TaskList() {
  return (
    <>
    <Navbar/>
    <div className="App">
          

      <div className="spacer" />

      <TodoWrapper name="To-do" />
      <div className="spacer" />
      <TodoWrapper name="Essentials" />
      <div className="spacer" />
      <TodoWrapper name="Clothes" />
      <div className="spacer" />
      <TodoWrapper name="Expenses" />
      
    </div>
    </>
  )
}

export default TaskList