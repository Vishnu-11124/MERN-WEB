import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BurgerList = () => {
    const [burgers, setBurgers] = useState([])

    useEffect(() => {
        axios.get('https://free-food-menus-api-two.vercel.app/burgers')
        .then(data => {
            setBurgers(data.data)
        })
        .catch(error => {
            console.log(error)
        })
        
    }, [])
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-4">
        Crush the Burger
      </h1>
      <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
        Choose from our delicious selection of handcrafted burgers
      </p>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {
            burgers.map(({id, img, name, price}) => (
                <div key={id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                    <div className="relative overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
                     <img 
                        src={img} 
                        alt={name}  
                        width={160}
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                     />
                    </div>
                    <div className="p-5">
                        <p className="font-bold text-xl text-gray-800 mb-2 line-clamp-2">{name}</p>
                        <p className="text-yellow-600 font-bold text-2xl mb-4">Price: ${price}</p>
                        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
                            Select
                        </button>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default BurgerList