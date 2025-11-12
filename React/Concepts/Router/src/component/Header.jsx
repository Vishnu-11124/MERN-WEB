import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User, Heart } from 'lucide-react';
import {Link, useNavigate} from "react-router-dom"
import Cart from '../Pages/Cart';


export default function ClothStoreHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateCart = useNavigate();
  const navigateLogin = useNavigate();


  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">URBANWEAR</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Men</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Women</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Kids</a>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={() => navigateLogin("/login")} className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={()=> navigateCart("/cart")} className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">New Arrivals</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">Men</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">Women</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">Kids</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">Sale</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}