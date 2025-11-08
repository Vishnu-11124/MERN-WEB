import React from 'react'

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center text-lg mb-12">
          Don't just take our word for it - hear from burger lovers like you!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                SM
              </div>
              <div className="ml-4">
                <p className="font-bold text-gray-900 text-lg">Sarah Miller</p>
                <div className="text-yellow-500 text-xl">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Best burgers in town! The quality is outstanding and the flavors are incredible. I'm a regular customer now!"
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                JD
              </div>
              <div className="ml-4">
                <p className="font-bold text-gray-900 text-lg">John Davis</p>
                <div className="text-yellow-500 text-xl">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Absolutely delicious! Fresh ingredients, perfectly cooked, and amazing taste. Worth every penny!"
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                EM
              </div>
              <div className="ml-4">
                <p className="font-bold text-gray-900 text-lg">Emily Martinez</p>
                <div className="text-yellow-500 text-xl">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "These burgers are next level! Great service, amazing food. My whole family loves this place!"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials