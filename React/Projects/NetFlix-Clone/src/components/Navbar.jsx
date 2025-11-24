import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">

        {/* Logo */}
        <div className="text-red-600 text-3xl font-bold tracking-wide cursor-pointer">
          Netflix
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Language Selector */}
          <select
            className="bg-transparent border border-gray-400 text-sm px-2 py-1 rounded-md focus:outline-none"
          >
            <option className="text-black">English</option>
            <option className="text-black">Hindi</option>
          </select>

          {/* Sign In Button */}
          <button className="bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition">
            Sign In
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
