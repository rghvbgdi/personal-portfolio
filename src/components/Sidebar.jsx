import React from 'react';

const Sidebar = ({ activePage, onPageChange, isCollapsed, onToggleCollapse }) => {
  return (
    <aside
      className={`sidebar fixed top-0 left-0 bottom-0 bg-gradient-onyx border-r border-jet backdrop-blur-xl overflow-y-auto z-10 ${isCollapsed ? 'w-[72px] sidebar--collapsed' : 'w-[280px]'}`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-yellow-crayola/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className={`relative py-8 ${isCollapsed ? 'px-3' : 'px-6'}`}>
        <button
          type="button"
          onClick={onToggleCollapse}
          className="sidebar-collapse-btn"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ion-icon name={isCollapsed ? 'chevron-forward-outline' : 'chevron-back-outline'}></ion-icon>
        </button>

        {/* Profile Section */}
        <div className={`text-center ${isCollapsed ? 'mb-5' : 'mb-8'}`}>
          <div className="relative inline-block mb-6">
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 opacity-75 blur-md animate-pulse"></div>
            
            {/* Avatar */}
            <figure className={`relative rounded-full mx-auto bg-gradient-jet p-1 shadow-shadow-2 ${isCollapsed ? 'w-12 h-12' : 'w-32 h-32'}`}>
              <img 
                src="/assets/images/my-avatar.png" 
                alt="Raghav Bagdi" 
                className="w-full h-full object-cover rounded-full border-2 border-jet"
              />
              {/* Online indicator */}
              <div className={`absolute bg-green-500 rounded-full border-2 border-onyx shadow-shadow-1 animate-pulse ${isCollapsed ? 'bottom-0 right-0 w-3 h-3' : 'bottom-2 right-2 w-4 h-4'}`}></div>
            </figure>
          </div>

          {/* Name and Title */}
          {!isCollapsed && (
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-1">
                Raghav Bagdi
              </h1>
              <p className="text-light-gray-70 text-sm font-medium tracking-wide">
                Software Developer
              </p>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-jet border border-jet rounded-full mt-3">
                <div className="w-2 h-2 bg-orange-yellow-crayola rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-orange-yellow-crayola">
                  SWE Intern @ Visa
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Elegant divider */}
        <div className="relative h-px my-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-jet to-transparent"></div>
        </div>

        <div className="sidebar-nav">
          {!isCollapsed && <p className="sidebar-nav-title">Navigation</p>}
          <div className="space-y-3">
          {[
            { key: 'about', label: 'About', icon: 'person-outline' },
            { key: 'resume', label: 'Resume', icon: 'document-text-outline' }
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => onPageChange?.(item.key)}
              aria-current={activePage === item.key ? 'page' : undefined}
              className={`sidebar-nav-btn ${activePage === item.key ? 'active' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <span className="sidebar-nav-icon">
                <ion-icon name={item.icon}></ion-icon>
              </span>
              {!isCollapsed && <span className="sidebar-nav-label">{item.label}</span>}
              {!isCollapsed && (
                <ion-icon
                  name="chevron-forward-outline"
                  className="sidebar-nav-arrow"
                ></ion-icon>
              )}
            </button>
          ))}
          </div>
        </div>

        {/* Contact Links */}
        <div className="space-y-3">
          {[
            {
              icon: 'logo-linkedin',
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/raghav-bagdi-6789b3261/',
              display: 'Open profile',
              subtext: '@raghav-bagdi-6789b3261',
              color: 'from-blue-500 to-blue-600',
              external: true
            },
            {
              icon: 'logo-github',
              label: 'GitHub',
              href: 'https://github.com/rghvbgdi',
              display: 'View GitHub',
              subtext: '@rghvbgdi',
              color: 'from-purple-500 to-purple-600',
              external: true
            },
            {
              icon: 'code-slash-outline',
              label: 'LeetCode',
              href: 'https://leetcode.com/u/raghavvbagdi/',
              display: 'View profile',
              subtext: '@raghavvbagdi',
              color: 'from-orange-500 to-orange-600',
              external: true
            },
            {
              icon: 'mail-outline',
              label: 'Email',
              href: 'mailto:rghvbgdi@gmail.com',
              display: 'Send email',
              subtext: 'rghvbgdi@gmail.com',
              color: 'from-pink-500 to-pink-600',
              external: false
            }
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className={`group flex items-center p-3 rounded-xl bg-gradient-jet border border-jet hover:border-orange-yellow-crayola/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-shadow-2 ${isCollapsed ? 'justify-center' : 'gap-4'}`}
              target={contact.external ? '_blank' : '_self'}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              title={isCollapsed ? contact.label : undefined}
            >
              <div className={`w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br ${contact.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <ion-icon name={contact.icon} className="text-white text-xl"></ion-icon>
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-light-gray-70 font-medium mb-0.5">{contact.label}</p>
                  <p className="text-sm text-white-2 font-medium truncate group-hover:text-orange-yellow-crayola transition-colors">{contact.display}</p>
                  <p className="text-xs text-light-gray-70/80 group-hover:text-light-gray-70 transition-colors">{contact.subtext}</p>
                </div>
              )}
              {!isCollapsed && (
                <ion-icon
                  name="arrow-forward-outline"
                  className="text-light-gray-70 group-hover:text-orange-yellow-crayola group-hover:translate-x-1 transition-all duration-300"
                ></ion-icon>
              )}
            </a>
          ))}
        </div>

        {/* Skills or Quick Stats (Optional Enhancement) */}
        
      </div>
    </aside>
  );
};

export default Sidebar;