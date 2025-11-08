import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Bite Into 
              <span className="text-yellow-400"> Perfection</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Handcrafted burgers made with premium ingredients. Every bite tells a delicious story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Order Now
              </button>
              <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105">
                View Menu
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" 
              alt="Delicious Burger" 
              className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-yellow-400">500+</p>
            <p className="text-gray-400 text-sm md:text-base">Happy Customers</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-yellow-400">50+</p>
            <p className="text-gray-400 text-sm md:text-base">Burger Varieties</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-yellow-400">100%</p>
            <p className="text-gray-400 text-sm md:text-base">Fresh Ingredients</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl md:text-5xl font-bold text-yellow-400">24/7</p>
            <p className="text-gray-400 text-sm md:text-base">Service Available</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home