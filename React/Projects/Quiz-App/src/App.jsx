import React from 'react'
import Quiz from './components/quiz/Quiz'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="container mx-auto p-2">
        {/* <div className="text-center mb-3">
          <h1 className="text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
            Quiz Master
          </h1>
          <p className="text-white text-lg opacity-90">
            Test your knowledge and challenge yourself
          </p>
        </div> */}
        <Quiz />
      </div>
    </div>
  )
}

export default App