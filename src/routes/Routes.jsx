import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <div className='flex min-h-screen flex-col pt-14'>
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
