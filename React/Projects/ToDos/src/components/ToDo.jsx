import React from 'react'
import { useState } from 'react'

const ToDo = () => {

    const [task, setTask] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => setInputValue(event.target.value)

    const handleTask = () => {
        if(inputValue === '') return alert('Please enter a Task')

        const newTask = {
            _id: Date.now(),
            task: inputValue   
        }    

        setTask([...task, newTask])
        setInputValue('')
       
    }

    const handleDeleteTask = (id) => {
        setTask(task.filter((item) => item._id !== id))
        
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-8 tracking-tight">
          ToDos List
        </h1>
        
        <div className="mb-8">
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder='Add your Task'
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all mb-4"
          />
          <button 
            onClick={handleTask}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg px-6 py-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl active:scale-98"
          >
            Add Task
          </button>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6 min-h-[200px]">
          {
            (task.length > 0) 
            ?
            <ul className="space-y-3">
              {task.map((item) => {
                return (
                  <li 
                    key={item._id}
                    className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-between group"
                  >
                    <span className="text-gray-700 text-lg flex-1">{item.task}</span>
                    <button 
                      onClick={() => handleDeleteTask(item._id)}
                      className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold w-10 h-10 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center justify-center"
                    >
                      X
                    </button>
                  </li>
                )
              })}
            </ul>
            :
            <div className="flex items-center justify-center h-full">
              <h3 className="text-2xl text-gray-400 font-medium">No Tasks Pending</h3>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ToDo