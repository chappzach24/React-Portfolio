import { Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './components/Nav';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />

    </div>
  );
}

export default App;