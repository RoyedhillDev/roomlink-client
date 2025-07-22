import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import logo from '../images/logo-cutout.png'; // ✅ adjust if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Roomlink Logo" className="h-10" />
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/browse" className="hover:text-blue-200">Browse</Link>
        <Link to="/post" className="hover:text-blue-200">Post a Room</Link>
      </div>

      {/* User/Login Section (always visible on right) */}
      <div className="flex items-center gap-2 ml-auto md:ml-0">
        <FaUserCircle size={24} />
        <Link to="/login" className="hover:text-blue-200 hidden md:inline-block">Login</Link>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-2xl md:hidden ml-4"
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-600 text-white px-4 py-4 flex flex-col gap-4 md:hidden z-10">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/browse" onClick={() => setMenuOpen(false)}>Browse</Link>
          <Link to="/post" onClick={() => setMenuOpen(false)}>Post a Room</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
