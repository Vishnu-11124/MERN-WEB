import Card from "./components/Card.tsx"
import Counter from "./components/Counter.tsx"
import List from "./components/List.tsx"
import OrderForm from "./components/OrderForm.tsx"
import type { CarList } from "./types.ts"

const carData: CarList[] =  [
        {
            id: 1,
            name: "Sedan X",
            basePrice: 25000,
            color: "black",
            model: "2022"
        },
        {
            id: 2,
            name: "SUV Pro",
            basePrice: 35000,
            color: "red",
            model: "2023"
        },
        {
            id: 3,
            name: "Coupe Z",
            basePrice: 28000,
            color: "white",
            model: "2021"
        },
        {
            id: 4,
            name: "Convertible V",
            basePrice: 42000,
            color: "blue",
            model: "2024"
        },
        {
            id: 5,
            name: "Truck T",
            basePrice: 40000,
            color: "gray",
            model: "2022"
        }
]



const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-b-4 border-purple-400">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%),
                               radial-gradient(circle at 40% 20%, rgba(255,255,255,0.25) 0%, transparent 50%)`
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-8xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
            ⚛️ React + TypeScript
          </h1>
          <p className="text-white/90 text-2xl font-semibold">
            Modern E-Commerce & Automotive Platform
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-sm border border-white/30">
              🛍️ Products
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-sm border border-white/30">
              🚗 Vehicles
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold text-sm border border-white/30">
              ☕ Orders
            </span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-3">
            👟 Featured Products
          </h2>
          <p className="text-gray-400 text-xl">Premium footwear collection</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card name="Nike Shoe" price={7200} />
          <Card name="Adidas Shoe" price={5200} isSpecial={true}/>
        </div>
      </section>

      {/* Counter Section */}
      <section className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border-y border-purple-800/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-3">
              ☕ Order Counter
            </h2>
            <p className="text-gray-400 text-xl">Track your orders in real-time</p>
          </div>
          <Counter/>
        </div>
      </section>

      {/* Car Listings Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text mb-3">
            🏎️ Vehicle Inventory
          </h2>
          <p className="text-gray-400 text-xl">Browse our premium automotive collection</p>
        </div>
        <List items={carData}/>
      </section>

      {/* Order Form Section */}
      <section className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-y border-orange-800/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text mb-3">
              📋 Place Your Order
            </h2>
            <p className="text-gray-400 text-xl">Fill out the form below to order</p>
          </div>
          <OrderForm/>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg mb-3">
            Built with <span className="text-red-500">❤️</span> using React + TypeScript
          </p>
          <div className="flex justify-center gap-6 text-gray-500 text-sm">
            <span>⚛️ React 18</span>
            <span>•</span>
            <span>📘 TypeScript</span>
            <span>•</span>
            <span>🎨 Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App