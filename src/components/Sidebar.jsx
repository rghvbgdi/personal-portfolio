import React from 'react';

const Sidebar = ({ expanded, onToggle }) => {
  return (
    <aside className="sidebar fixed top-0 left-0 bottom-0 w-70 bg-gradient-jet border-r border-jet px-5 py-7.5 overflow-y-auto z-10 transition-all duration-500" data-sidebar>
      <div className="sidebar-info text-center mb-7.5">
        <figure className="avatar-box relative w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-onyx overflow-hidden">
          <img src="/assets/images/my-avatar.png" alt="Raghav Bagdi" width="80" className="w-full h-full object-cover" />
        </figure>

        <div className="info-content">
          <h1 className="name text-white-1 text-fs-2 font-fw-600 mb-1.25" title="Raghav Bagdi">Raghav Bagdi</h1>
          <p className="title text-light-gray-70 text-fs-6 font-fw-400">Software Developer</p>
        </div>

        <button 
          className="info_more-btn w-full text-orange-yellow-crayola text-fs-6 font-fw-500 mt-5 px-2.5 py-2.5 border border-jet rounded-lg bg-gradient-onyx transition-all duration-250 hover:bg-gradient-jet hover:border-onyx relative overflow-hidden group" 
          data-sidebar-btn 
          onClick={onToggle}
        >
          <span className="flex items-center justify-center gap-2">{expanded ? 'Hide Contacts' : 'Show Contacts'}</span>
          <ion-icon name="chevron-down" className="text-lg transition-transform duration-250 group-hover:rotate-180"></ion-icon>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gradient-yellow-1 rounded-full opacity-0 transition-opacity duration-250 group-hover:opacity-10"></div>
        </button>
      </div>

      <div
        className={`sidebar-info_more ${expanded ? 'active max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-500`}
      >
        <div className="separator w-full h-px bg-jet my-5"></div>

        <ul className="contacts-list grid gap-3.75">
          <li className="contact-item flex items-center gap-3.75">
            <div className="icon-box w-10 h-10 flex items-center justify-center bg-gradient-onyx border border-jet rounded-lg text-orange-yellow-crayola text-lg">
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-light-gray-70 text-fs-7 font-fw-400 mb-0.5">LinkedIn</p>
              <a href="https://linkedin.com/in/raghavbagdi" className="contact-link text-white-2 text-fs-6 font-fw-500 transition-colors duration-250 hover:text-orange-yellow-crayola" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </li>

          <li className="contact-item flex items-center gap-3.75">
            <div className="icon-box w-10 h-10 flex items-center justify-center bg-gradient-onyx border border-jet rounded-lg text-orange-yellow-crayola text-lg">
              <ion-icon name="logo-github"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-light-gray-70 text-fs-7 font-fw-400 mb-0.5">GitHub</p>
              <a href="https://github.com/raghavbagdi" className="contact-link text-white-2 text-fs-6 font-fw-500 transition-colors duration-250 hover:text-orange-yellow-crayola" target="_blank" rel="noopener noreferrer">
                View Projects
              </a>
            </div>
          </li>

          <li className="contact-item flex items-center gap-3.75">
            <div className="icon-box w-10 h-10 flex items-center justify-center bg-gradient-onyx border border-jet rounded-lg text-orange-yellow-crayola text-lg">
              <ion-icon name="code-slash-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title text-light-gray-70 text-fs-7 font-fw-400 mb-0.5">LeetCode</p>
              <a href="https://leetcode.com/raghavbagdi" className="contact-link text-white-2 text-fs-6 font-fw-500 transition-colors duration-250 hover:text-orange-yellow-crayola" target="_blank" rel="noopener noreferrer">
                Coding Profile
              </a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
