import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import './styles/index.css';

function App() {
  const [activePage, setActivePage] = useState('about');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="App">
      <main className="flex min-h-screen gap-8">
        <Sidebar 
          expanded={sidebarExpanded}
          onToggle={() => setSidebarExpanded(!sidebarExpanded)}
        />
        
        <div className="main-content flex-1 min-w-0 ml-[280px] px-[30px] py-10">
          <Navbar 
            activePage={activePage}
            onPageChange={setActivePage}
          />
          
          {activePage === 'about' && <About />}
          {activePage === 'resume' && <Resume />}
        </div>
      </main>
    </div>
  );
}

export default App;
