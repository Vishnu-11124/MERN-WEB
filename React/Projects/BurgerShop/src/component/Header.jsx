import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-gray-900 shadow-xl sticky top-0 z-50 border-b-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-4xl font-bold text-yellow-400 tracking-tight drop-shadow-lg">
            🍔 Burger Bliss
          </h1>

          {/* Menu Icon (Always visible now) */}
          <button className="text-white" onClick={toggleSidebar}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* SIDEBAR (VISIBLE ON ALL SCREEN SIZES) */}
      <div
        className={`fixed top-0 right-0 h-full w-68 bg-gray-900 border-r-4 border-yellow-500 shadow-xl transform 
        ${isOpen ? "-translate-x-0" : "translate-x-full"} 
        transition-transform duration-300 z-[999]`}
      >
        <div className="py-6">
          <h2 className="text-3xl font-bold text-yellow-400">
            🍔 Burger Bliss
          </h2>

          <ul className="mt-10 space-y-6 flex flex-col items-center">
            <li
              className="
    relative overflow-hidden text-white text-2xl px-24 py-3 font-semibold
    cursor-pointer transition-all duration-300
    before:content-[''] before:absolute before:left-0 before:bottom-0
    before:w-full before:h-0 before:bg-yellow-300 before:transition-all before:duration-300
    hover:before:h-full hover:text-gray-900
  "
            >
              Home
            </li>

            <li className="text-white text-lg font-semibold hover:text-yellow-300 cursor-pointer transition-all duration-200">
              About
            </li>
            <li className="bg-yellow-500 text-gray-900 font-bold text-lg px-6 py-2 rounded-full hover:bg-yellow-400 cursor-pointer transition-all duration-200 shadow-md">
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
        ></div>
      )}
    </>
  );
};

export default Header;
