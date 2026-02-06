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
      <main className="flex min-h-screen gap-8">
        <Sidebar
          activePage={activePage}
          onPageChange={setActivePage}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((v) => !v)}
        />
        
        <div
          className={`main-content flex-1 min-w-0 px-[30px] py-10 ${isSidebarCollapsed ? 'ml-[72px]' : 'ml-[280px]'}`}
        >
          {activePage === 'about' && <About />}
          {activePage === 'resume' && <Resume />}
        </div>
      </main>
    </div>
  );
}

export default App;
