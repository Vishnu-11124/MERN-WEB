import { FaSearch, FaUserCircle } from "react-icons/fa"

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              ✍️ Blog
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex items-center bg-gray-100 rounded-full px-6 py-3 hover:bg-gray-200 transition-colors duration-200 border-2 border-transparent focus-within:border-purple-500 focus-within:bg-white">
              <FaSearch className="text-gray-400 text-xl mr-4"/>

              <input
                type="text"
                placeholder="Use me dude..."
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 font-medium text-lg"
              />
            </div>
          </div>

          {/* User Profile */}
          <section className="flex items-center gap-4">
            <button className="p-2 hover:bg-purple-50 rounded-full transition-colors duration-200 group">
              <FaUserCircle className="text-purple-600 text-4xl group-hover:text-purple-700 transition-colors duration-200"/>
            </button>
          </section>
        </div>
      </div>
    </nav>
  )
}

export default Navigation