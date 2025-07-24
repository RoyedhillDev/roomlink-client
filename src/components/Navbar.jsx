import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import logo from '../images/roomlink_logo_white.png';
import { FaHome, FaSearch, FaPlusCircle, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-700 text-white px-8 py-3 flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Roomlink Logo" className="h-10" />
      </Link>

      {/* Desktop Navigation + User */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/browse" className="hover:text-blue-200">Browse</Link>
        <Link to="/postaroom" className="hover:text-blue-200">Post a Room</Link>
        <Link to="/about" className="hover:text-blue-200">About</Link>
        {/* User/Login Section */}
        <div className="flex items-center gap-2">
          <FaUserCircle size={24} />
          <Link to="/login" className="hover:text-blue-200">Login</Link>
        </div>
      </div>

      {/* Hamburger Icon - Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-2xl md:hidden ml-auto"
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Sidebar Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-50 text-yellow-600 px-6 py-4 z-50 shadow-[4px_0_6px_-1px_rgba(0,0,0,0.3)] transition-transform duration-300">
          {/* Close icon inside */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-semibold">Menu</div>
            <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          </div>

          <hr className="my-4 border-gray-200" />

          {/* Menu Items */}
          <div className="flex flex-col gap-4">
{/* Menu Items */}
<div className="flex flex-col gap-4">
  <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 hover:text-blue-200 text-base"><FaHome className="text-gray-400 text-lg" /> Home</Link>
  <Link to="/browse" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 hover:text-blue-200 text-base"><FaSearch className="text-gray-400 text-lg" /> Browse</Link>
  <Link to="/postaroom" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 hover:text-blue-200 text-base"><FaPlusCircle className="text-gray-400 text-lg" /> Post a Room</Link>
  <Link to="/login" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 hover:text-blue-200 text-base"><FaSignInAlt className="text-gray-400 text-lg" /> Login</Link>
</div>

<hr className="my-4 border-gray-200" />

<div className="mt-4">
  <h3 className="text-md font-semibold mb-2">Get more updates…</h3>
  <p className="text-xs text-blue-400 mb-3">
    Subscribe to get notified when new rooms or features are added.
  </p>
  <form className="flex flex-col gap-2 text-xs">
    <input
      type="email"
      placeholder="Your email address..."
      className="px-3 py-2 rounded-md text-black outline-none"
    />
    <button
      type="submit"
      className="bg-yellow-600 text-white font-semibold py-2 rounded-md hover:bg-blue-100 transition"
    >
      Subscribe
    </button>
    <p className="text-xs text-gray-400 mt-1">
      By subscribing, you agree to our{' '}
      <a href="wa.me/256782130086" className="underline text-blue-500 hover:text-blue-200">Terms</a> and{' '}
      <a href="wa.me/256782130086" className="underline text-blue-500 hover:text-blue-200">Privacy Policy</a>.
    </p>
  </form>
</div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
