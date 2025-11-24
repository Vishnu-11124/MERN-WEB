import React from 'react'

const Banner = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-[url('https://imgs.search.brave.com/DhvHwTSKWkUazaIa_aiCmH5w8-8JzrjLm8NYJF-OD8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHZndWlkZS5jb20v/YS9pbWcvcmVzaXpl/L2JjZTg3ODExYmRi/NmUwMmFlZjFlYTA3/NTNlYjZjMTc5YjI2/NDA1NjcvaHViLzIw/MTkvMDYvMTQvNzNi/ZDNjOGUtYjM2ZS00/MDg4LWEzOWEtOThk/MWQyMDc2YTc3LzE5/MDYxMy1kYXJrNi5q/cGc_YXV0bz13ZWJw/JmZpdD1jcm9wJmhl/aWdodD0xMDgwJndp/ZHRoPTE5MjA')] text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 max-w-xl px-24 pt-60">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">Movie Name</h1>

        <div className="flex gap-4 mt-4">
          <button className="bg-red-600 text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">Play</button>
          <button className="bg-red-600/70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition">My List</button>
        </div>

        <p className="mt-4 text-lg text-gray-200 drop-shadow-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam inventore natus, beatae vitae odio
          perferendis minima recusandae mollitia similique ipsam quas nihil aspernatur cum! Iusto aspernatur unde
          pariatur reiciendis?
        </p>
      </div>
    </div>
  )
}

export default Banner
