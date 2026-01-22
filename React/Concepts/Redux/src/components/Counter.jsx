import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../app/features/counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md">
            <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">Counter</h1>
            <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 shadow-inner">
                    <div className="text-8xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {count}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <button 
                        onClick={() => dispatch(increment())} 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 active:scale-95"
                    >
                        Increment
                    </button>
                    <button 
                        onClick={() => dispatch(reset())} 
                        className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 active:scale-95"
                    >
                        Reset
                    </button>
                    <button 
                        onClick={() => dispatch(decrement())} 
                        className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 active:scale-95"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter