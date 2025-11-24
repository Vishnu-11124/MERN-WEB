import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to the Dashboard App
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Manage your tasks, track analytics and stay organized with our powerful dashboard.
      </p>

      <Link 
        href="/dashboard" 
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all"
      >
        Go to Dashboard
      </Link>

    </div>
  )
}

export default Home
