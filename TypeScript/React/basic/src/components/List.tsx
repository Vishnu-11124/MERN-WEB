import type { CarList } from "../types"

export interface Car{
    items: CarList[]
}

const List = ({items}:Car) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl font-black text-center mb-16 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
          🚗 Car details
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            items.map((item) => (
              <div 
                key={item.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border-2 border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20"
              >
                {/* Card Header with Car Emoji */}
                <div className="relative h-48 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    🏎️
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h1 className="text-3xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.name}
                  </h1>
                  
                  <div className="space-y-4 mb-8">
                    <p className="flex items-center justify-between text-lg">
                      <span className="text-gray-400 font-bold uppercase tracking-wide text-sm">Model:</span>
                      <span className="text-white font-bold text-xl">{item.model}</span>
                    </p>
                    <p className="flex items-center justify-between text-lg">
                      <span className="text-gray-400 font-bold uppercase tracking-wide text-sm">Color:</span>
                      <span className="text-white font-bold text-xl">{item.color}</span>
                    </p>
                    <p className="flex items-center justify-between text-lg">
                      <span className="text-gray-400 font-bold uppercase tracking-wide text-sm">Base Price:</span>
                      <span className="text-cyan-400 font-black text-2xl">${item.basePrice.toLocaleString()}</span>
                    </p>
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-black rounded-xl shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-[1.02] uppercase tracking-wide">
                    🏁 Order now
                  </button>
                </div>
              </div>     
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default List