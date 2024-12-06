import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">Renaiz Farms</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-green-700 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none md:flex space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0`}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block text-gray-800 hover:text-blue-700 transition cursor-pointer px-6 md:px-0"
            onClick={() => setIsMenuOpen(false)} 
          >
            About
          </Link>
          <Link
            to="product"
            smooth={true}
            duration={500}
            className="block text-gray-800 hover:text-blue-700 transition cursor-pointer px-6 md:px-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block text-gray-800 hover:text-blue-700 transition cursor-pointer px-6 md:px-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
