import React from 'react';

const Navbar = ({ activePage, onPageChange }) => {
  return (
    <nav className="navbar sticky top-0 bg-gradient-jet border border-jet rounded-2.5 px-5 py-3.75 mb-7.5 backdrop-blur-lg z-5">
      <ul className="navbar-list flex gap-2.5">
        <li className="navbar-item flex-1">
          <button 
            className={`navbar-link w-full text-light-gray-70 text-fs-6 font-fw-500 px-3.75 py-2.5 rounded-lg text-center transition-all duration-250 hover:bg-gradient-onyx hover:text-white-1 ${activePage === 'about' ? 'active bg-gradient-yellow-1 text-smoky-black' : ''}`} 
            onClick={() => onPageChange('about')}
          >
            About
          </button>
        </li>

        <li className="navbar-item flex-1">
          <button 
            className={`navbar-link w-full text-light-gray-70 text-fs-6 font-fw-500 px-3.75 py-2.5 rounded-lg text-center transition-all duration-250 hover:bg-gradient-onyx hover:text-white-1 ${activePage === 'resume' ? 'active bg-gradient-yellow-1 text-smoky-black' : ''}`} 
            onClick={() => onPageChange('resume')}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
