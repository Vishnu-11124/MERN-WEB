import { useState, type FormEvent } from "react"

interface OrderData {
    name: string
    cups: number
    price: number
}

const OrderForm = () => {

    const [name, setName] = useState<string>('')
    const [cups, setCups] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)
    const [order, setOrder] = useState<OrderData[]>([])




    const handleForm = (e: FormEvent) => {
        e.preventDefault()
        let newOrder: OrderData = {
            name,
            cups,
            price
        }
        setOrder([...order, newOrder])
        console.log(order)
        setName('')
        setCups(0)
        setPrice(0)
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black text-center mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-transparent bg-clip-text">
          ☕ Order Form
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg font-medium">Place your chai order below</p>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-orange-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Enter item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 font-medium"
              />
            </div>
            
            <div>
              <label htmlFor="cups" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Cups
              </label>
              <input 
                type="number" 
                id="cups" 
                name="cups"
                value={cups}
                onChange={(e) => setCups(+e.target.value)}
                min="1"
                max="10"
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 outline-none transition-all duration-200 text-gray-800 font-medium"
              />
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                Price
              </label>
              <input 
                type="number" 
                id="price" 
                name="price"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                min="10"
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 outline-none transition-all duration-200 text-gray-800 font-medium"
              />
            </div>
          </div>
          
          <button 
            type="submit"
            onClick={handleForm}
            className="w-full mt-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 hover:from-amber-600 hover:via-orange-600 hover:to-red-600"
          >
            🛒 Place Order
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            📋 Order Summary
          </h2>
          <div className="space-y-4">
            {order.length === 0 ? (
              <p className="text-center text-gray-400 py-12 text-lg">No orders yet. Place your first order above!</p>
            ) : (
              order.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all duration-200 hover:shadow-lg"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Item</p>
                      <p className="text-lg font-bold text-gray-800">{item.name}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Cups</p>
                      <p className="text-lg font-bold text-orange-600">{item.cups}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Price</p>
                      <p className="text-lg font-bold text-green-600">₹{item.price}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {order.length > 0 && (
            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-700">Total Orders:</span>
                <span className="text-2xl font-black text-orange-600">{order.length}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold text-gray-700">Total Amount:</span>
                <span className="text-2xl font-black text-green-600">
                  ₹{order.reduce((sum, item) => sum + item.price, 0)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrderForm