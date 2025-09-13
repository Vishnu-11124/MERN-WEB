import React from 'react'

const AddToDos = () => {
  return (
    <div>
        <div className="container text-center">
            <div className="row m-3">
            <div className="col-6"><input className="form-control" type="text" placeholder="Enter ToDo here.." aria-label="default input example"/></div>
            <div className="col-4"><input className="form-control" type="date" placeholder="Select Date" aria-label="default input example"/></div>
            <div className="col-2"><button type="button" className="btn btn-success px-4">Add</button></div>
            </div>
        </div>
    </div>
  )
}

export default AddToDos
