import { useState } from "react"

const Todo = () => {
    const [task, setTask] = useState<string[]> ([])
    const [value, setValue] = useState<string> ('')

    const handleTask = () => {
        setTask([...task, value])
        setValue('')
    }

    const handleDelete = (index: number) => {
        const newTask = task.filter((_, i) => {
            return i !== index
        })
        setTask(newTask)
    }


  return (
    <div className="bg-red-400 p-3">
        <div className="bg-black text-white p-3 flex flex-col w-[400px] items-center justify-center m-4">
        <h1 className="text-2xl">ToDos List</h1>

        <input 
        className="my-3 bg-white text-black p-2 w-[300px] rounded-xl"
        type="text" 
        placeholder="Enter your Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />

        <button
        onClick={handleTask}
        className="p-2 bg-green-600 rounded-md">Add Task</button>   
        </div>
        <div className="my-4  p-2">
        <ul>
            {
                task.map((item, index) => {
                    return(
                            <li key={index} className="bg-black text-white p-2 m-2 rounded-md text-lg flex items-center justify-between">{item} <span onClick={() => handleDelete(index)} className="bg-green-700 text-black w-[40px] pl-4  mx-2 rounded-[20px] cursor-pointer">x</span></li>
                    )
                })
            }
          
            
        </ul>
      </div>
    </div>
  )
}

export default Todo
