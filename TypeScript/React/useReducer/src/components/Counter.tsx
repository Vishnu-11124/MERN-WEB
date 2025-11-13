import { useReducer } from "react"
import { initialValue, reducer } from "../reducer/CountReducer"

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>Counter</h1>
      <div>{state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
