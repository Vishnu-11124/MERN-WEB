import { useState } from "react"

const Counter = () => {
    let [count, setCount] = useState<number>(0)
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full border-4 border-purple-200">
        <div className="text-center mb-8">
          <div className="text-6xl mb-6">☕</div>
          <p className="text-5xl font-black text-gray-800 mb-4">
            Cups Ordered: <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">{count}</span>
          </p>
        </div>
        
        <button
          onClick={() => setCount(count+1)}
          className="w-full py-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white text-2xl font-black rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700"
        >
          ➕ Add Order
        </button>
      </div>
    </div>
  )
}

export default Counter