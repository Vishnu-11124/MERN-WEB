import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-green-400 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-8 tracking-tight">
          Counter
        </h1>
        
        <div className="bg-white rounded-2xl p-12 mb-8 shadow-2xl">
          <div className="text-8xl md:text-9xl font-bold text-gray-800 text-center tabular-nums">
            {count}
          </div>
        </div>
        
        <div style={{display: "flex"}} className="gap-4 flex-wrap justify-center">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold text-2xl px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl border-2 border-green-400 min-w-[80px]"
          >
            +
          </button>
          <button 
            onClick={() => setCount(0)}
            className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold text-xl px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl border-2 border-blue-400 min-w-[100px]"
          >
            Reset
          </button>
          <button 
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold text-2xl px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl border-2 border-red-400 min-w-[80px]"
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter