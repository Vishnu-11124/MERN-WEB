import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../app/features/counterSlice.js'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
