import { useState } from "react"


const Counter = () => {
    const [value, setValue] = useState <number> (0)
  return (
    <div className="bg-black text-white p-3 flex flex-col justify-center items-center w-[350px] m-4">
      <h1 className="text-3xl font-bold">Counter</h1>
      <div className="my-4 flex items-center justify-center gap-4">
        <button
         onClick={() => setValue(value + 1)}
         className="py-2 px-4 bg-green-700 rounded-md cursor-pointer">+</button>
        <h1 className="text-3xl">{value}</h1>
        <button
         onClick={() => setValue(value - 1)}
        className="py-2 px-4 bg-green-700 rounded-md cursor-pointer">-</button>
      </div>
      <button
       onClick={() => setValue(0)}
      className="py-2 px-4 bg-violet-700 rounded-md cursor-pointer">Reset</button>
    </div>
  )
}

export default Counter
