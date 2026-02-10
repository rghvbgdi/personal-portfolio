import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import './styles/index.css';
import './styles/App.css';

function App() {
  const [activePage, setActivePage] = useState('about');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="App">
      <main className="flex min-h-screen items-stretch gap-8 px-6 py-8 md:px-10 md:py-12">
        <Sidebar
          activePage={activePage}
          onPageChange={setActivePage}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((v) => !v)}
        />
        
        <div
          className={`main-content flex-1 min-w-0 transition-[margin] duration-500 ease-[cubic-bezier(0.2,0.9,0.2,1)] ${
            isSidebarCollapsed ? 'ml-[72px]' : 'ml-[280px]'
          }`}
        >
          <div
            key={activePage}
            className="page-shell"
          >
            {activePage === 'about' && <About />}
            {activePage === 'resume' && <Resume />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
