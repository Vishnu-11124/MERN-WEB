import React from 'react'

const ToDoItems = ({todoName, todoDate}) => {
    
  return (
    <div>
      <div className="container">
        <div className="row m-3 text-left">
          <div className="col-6"><h6>{todoName}</h6></div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2 text-center"><button type="button" className="btn btn-danger px-3">Delete</button></div>
        </div>
       </div> 
    </div>
  )
}

export default ToDoItems;
