import React from 'react'

const Header = () => {
  return (
    <nav className="bg-gray-900 shadow-xl sticky top-0 z-50 border-b-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 tracking-tight drop-shadow-lg">
            🍔 Burger Bliss
          </h1>
        </div>
        <ul className="flex gap-8 items-center">
          <li className="text-white text-lg font-semibold hover:text-yellow-200 cursor-pointer transition-colors duration-200 hover:scale-110 transform">
            Home
          </li>
          <li className="text-white text-lg font-semibold hover:text-yellow-200 cursor-pointer transition-colors duration-200 hover:scale-110 transform">
            About
          </li>
          <li className="bg-yellow-500 text-gray-900 font-bold text-lg px-6 py-2 rounded-full hover:bg-yellow-400 cursor-pointer transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-105">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header