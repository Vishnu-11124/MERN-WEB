import React, {useState} from 'react'
import './App.css'

function App() {
  // Using useState to manage the count state
  const [count, setCount] = useState(0);

  // Function to increment the count
  const addCount = () => {
    setCount(count + 1);
  }

  // Function to reset the count
  const reset = () => {
    setCount(0);
  }

  return (
    <>
    <h1>Counter Function</h1>
    <h3>Count: {count}</h3>
    <button onClick={addCount}>Increment</button>
    <button style={{ marginLeft: '10px' }} onClick={reset}>Reset</button>
    </>
  )
}

export default App
