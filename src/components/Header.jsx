import React, { useState } from "react";
import { Bars3BottomRightIcon, BoltIcon, BookOpenIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen]= useState(false)

  return (
    <div className="container mx-auto flex justify-between items-center py-4">
      <Link to="/" className="logo flex items-center">
        <BookOpenIcon className="w-6 h-6 text-blue-600"></BookOpenIcon>
        <span className=" text-xl font-bold text-gray-800 tracking-wide ml-2">
          Book Store
        </span>
      </Link>
      <div className="menu">
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => ( isActive ? 'active' : 'font-bold' )}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => ( isActive ? 'active' : 'font-bold' )}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => ( isActive ? 'active' : 'font-bold' )}
            >
              About us
            </NavLink>
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BoltIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className={({ isActive }) => ( isActive ? 'active' : 'font-bold' )}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/books"
                        className={({ isActive }) =>  ( isActive ? 'active' : 'font-bold') }
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className={({ isActive }) => ( isActive ? 'active' : 'font-bold' )} >About Us </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
