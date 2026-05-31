import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          NextJs
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-blue-600 transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">
            Learning
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;