import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguagePrompt from '@/components/LanguagePrompt';

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <LanguagePrompt />
      <div className='flex min-h-screen flex-col pt-14'>
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* Old links such as /about lead to the single page. */}
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
