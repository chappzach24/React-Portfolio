import { Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';

import Navbar from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />

      <Footer />

    </div>
  );
}

export default App;