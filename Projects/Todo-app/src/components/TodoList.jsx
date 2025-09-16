import React from 'react'
import ToDoItems from './ToDoItems'

const TodoList = ({tasks}) => {
  return (
    <>
        {
            tasks.map((task) => (<ToDoItems todoName={task.task} todoDate = {task.dueDate}/>) )
        }
    </>
  )
}

export default TodoList
