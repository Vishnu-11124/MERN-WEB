import React, { useReducer, useState } from 'react'
import { initialState, counterReducer} from '../counterReducer.js'

const Counter = () => {

  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease"})}>-</button>
      <button onClick={() => dispatch({ type: "reset"})}>Reset</button>
      <h2>Count : {state.count}</h2>

      <div>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={()=> dispatch({ type: "incrementByValue", value: Number(inputValue)})}>Add</button>
        <button onClick={()=> dispatch({ type: "decrementByValue", value: Number(inputValue)})}>Subtract</button>
      </div>
    </div>
  )
}

export default Counter
