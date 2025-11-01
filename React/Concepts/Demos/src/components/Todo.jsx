import React, { useState } from 'react'

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        if(task.trim() === ''){
            alert('Please enter a task')
            return
        }
        else{
            e.preventDefault();
            setTodos([...todos, task])
            setTask('')
        }
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

   return (
    <div>
        <h1>ToDO List</h1>
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder='Enter your task!' value={task} onChange={handleChange} />
            <button type='submit'>Add Task</button>
        </form>

        <h3>Task List</h3>
        {
            todos.map((todo,index) => (
                <li key={index}>{todo}</li>
            ))
        }

      
    </div>
  )
}

export default Todo
