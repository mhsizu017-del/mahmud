
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Forge from './pages/Forge';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-forge-primary selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lore" element={<Lore />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
