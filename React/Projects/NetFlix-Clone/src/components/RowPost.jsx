import React from 'react'

const RowPost = () => {
  return (
    <div className="px-6 -mt-20 absolute">
      <h2 className="text-2xl font-bold text-white mb-4">Trending Now</h2>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        <img
          className="w-48 h-60 object-cover rounded-md hover:scale-105 transition duration-300 cursor-pointer"
          src="https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"
          alt="Movie"
        />
      </div>
    </div>
  )
}

export default RowPost