import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t-4 border-yellow-500 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start gap-8 mb-6">
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-3">🍔 Burger Bliss</h3>
            <p className="text-gray-400 text-sm">
              Serving the best burgers in town since 2024. Quality ingredients, amazing taste!
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 +1 (555) 123-4567</li>
              <li>📧 info@burgerbuy.com</li>
              <li>📍 123 Burger Street, Food City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Burger Buy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer