import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
 
 //after useState saves the value, it will be displayed based on this code   
    const handleSubmit = e => {
        //to prevent page reload on submit
        e.preventDefault();
        addTodo(value)

        //clears form 
        setValue("")
    }
  return (
    //form allows users to directly put data
    <form className='TodoForm'
    onSubmit={handleSubmit}>
        <input type="text" className='todo-input' 
        value={value}
        placeholder='List your items'
 //every time you make a change, the var e updates value in the useState
        onChange={ (e) => {
            setValue(e.target.value)

        }}/>
        <button type='submit' className='todo-btn'>
            Add Task
        </button>
    </form>
  )
}
