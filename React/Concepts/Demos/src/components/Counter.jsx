import React, { useState } from 'react'

const Counter = () => {

    const [counterValue, setCounterValue] = useState(0);

    const increment = () => {
        setCounterValue(counterValue + 1);
    }

    const decrement = () => {
        setCounterValue(counterValue - 1);
    }

  return (
    <div style={{backgroundColor: "orange", padding: "5px", marginTop:"5px"}}>
      <h1>Counter using UseState Hook</h1>
      <h3>Counter value: {counterValue}</h3>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </div>
  )
}

export default Counter
