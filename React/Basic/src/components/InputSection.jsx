import React from 'react'

const InputSection = ({handleKeyDown}) => {
  return (
    <>
      <input  type="text" className="form-control my-3" id="username" placeholder="Enter your item" onKeyDown={handleKeyDown}/>
    </>
  )
}

export default InputSection
