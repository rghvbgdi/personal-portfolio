import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import './styles/index.css';
import './styles/App.css';

function App() {
  const [activePage, setActivePage] = useState('about');

  return (
    <div className="App">
      <main className="flex min-h-screen gap-8">
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
        
        <div className="main-content flex-1 min-w-0 ml-[280px] px-[30px] py-10">
          {activePage === 'about' && <About />}
          {activePage === 'resume' && <Resume />}
        </div>
      </main>
    </div>
  );
}

export default App;
