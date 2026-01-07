import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

interface Product {
    id: number;
    title: string;
    rating: number;
    description: string;
    price: number;
    images: string;
}


const ProductPage = () => {

    const { id } = useParams<{ id: string }>()

    const navigate = useNavigate()

    const [ product, setProduct ] = useState<null | Product>(null)

    useEffect(() => {
        if(id) {
            axios.get<Product>(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setProduct(res.data)
            })
            .catch((err) => {
                console.error('Error fetching product data', err)
            })
        }
    },[id])

    if(!product) {
        return <div className="flex justify-center items-center h-screen text-gray-600 text-lg">Loading...</div>
    }


  return (
    <div className="w-[60%]  p-8 bg-white min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors text-gray-700 font-medium">Back</button> 

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
        <img src={product.images[0]} alt="" className="w-full h-96 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
      <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
      <div className="flex gap-6 items-center">
        <p className="text-2xl font-bold text-gray-900">Price: ${product.price}</p>
        <p className="text-lg text-gray-700">Rating: <span className="font-semibold text-yellow-600">{product.rating}</span></p>
      </div>
      </div>
      <div className="flex gap-4">
        <button className="flex-1 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium">Add to Cart</button>
        <button className="flex-1 bg-gray-200 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-medium">Add to Wishlist</button>
      </div>
    </div>
  )
}

export default ProductPage