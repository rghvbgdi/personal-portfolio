import React from 'react';

const Navbar = ({ activePage, onPageChange }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <nav className="fixed top-0 right-0 left-[280px] z-20 backdrop-blur-xl bg-gradient-onyx border-b border-jet">
      {/* subtle yellow glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-yellow-crayola/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative px-6 py-4 flex items-center gap-4">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
              border border-jet bg-gradient-jet
              hover:border-orange-yellow-crayola/40
              hover:text-orange-yellow-crayola
              hover:-translate-y-0.5
              ${
                activePage === item.id
                  ? 'text-orange-yellow-crayola shadow-shadow-2'
                  : 'text-light-gray-70'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
