import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

    const focusInput = () => {
      (inputRef.current) ? inputRef.current.focus() : null
    }
    
  return (
    <div>
      <input type="text" ref={inputRef} placeholder='Click the button to focus'/>
      <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default FocusInput
