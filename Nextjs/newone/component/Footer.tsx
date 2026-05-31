import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-white">NextJs</h2>

        <p className="text-sm text-center">
          © {new Date().getFullYear()} NextJs. All rights reserved.
        </p>

        {/* <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Learning
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;