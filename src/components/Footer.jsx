import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-10">
      &copy; {new Date().getFullYear()} Roomlink — Find your long-term space.
    </footer>
  );
};

export default Footer;
