import React from 'react'
import Accordion from './components/Accordion'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Accordion
      </h1>

      <div className="w-full max-w-2xl">
        <Accordion />
      </div>

    </div>
  )
}

export default App
