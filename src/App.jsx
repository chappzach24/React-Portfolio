import { Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './components/CustomNavbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      
      <Navbar />
      <Outlet />

      <main>
        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;