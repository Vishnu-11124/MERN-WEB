interface CardProps {
  name: string
  price: number
  isSpecial?: boolean
}

const Card = ({name, price, isSpecial = false}: CardProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 p-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 m-1 p-10 rounded-3xl shadow-2xl border-2 border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30 max-w-sm w-full">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{isSpecial ? '⭐' : '🎁'}</div>
        </div>
        
        <h2 className="text-4xl font-black text-white mb-6 text-center bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          Name: {name}
        </h2>
        
        <p className="text-3xl font-bold text-center mb-4">
          <span className="text-gray-400 text-lg uppercase tracking-wide block mb-2">Price:</span>
          <span className="text-green-400 font-black">${price.toLocaleString()}</span>
        </p>
        
        <p className="text-center">
          <span className="text-gray-400 text-sm uppercase tracking-wide block mb-3">Special:</span>
          <span className="text-5xl">{isSpecial ? '⭐' : '❌'}</span>
          <span className={`block mt-3 text-lg font-bold ${isSpecial ? 'text-yellow-400' : 'text-gray-500'}`}>
            {isSpecial ? 'Premium Item' : 'Standard Item'}
          </span>
        </p>
        
        {isSpecial && (
          <div className="mt-6 pt-6 border-t-2 border-gray-700">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-600/50">
              <p className="text-yellow-400 text-center font-bold text-sm uppercase tracking-wide">
                ✨ Exclusive Special Offer ✨
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card