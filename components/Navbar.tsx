
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Disc, Copy, Check } from 'lucide-react';
import { SERVER_IP, DISCORD_LINK } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path 
    ? "text-forge-primary drop-shadow-[0_0_5px_rgba(255,26,26,0.5)]" 
    : "text-gray-400 hover:text-white";

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo - Using SVG Component */}
          <div className="flex-shrink-0 flex items-center h-full py-2">
            <Link to="/" className="h-full flex items-center">
              <div className="relative group h-full w-24 flex items-center justify-center">
                <div className="absolute -inset-4 bg-forge-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Logo className="h-full w-auto transition-transform duration-300 group-hover:scale-105" />
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-xs font-rajdhani font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${isActive('/')}`}>
              Home
            </Link>
            
            <button 
              onClick={handleCopyIp}
              className="group flex items-center gap-2 text-xs font-rajdhani font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span>Server IP</span>
              {copied ? <Check className="w-3 h-3 text-forge-primary" /> : <Copy className="w-3 h-3 group-hover:text-forge-primary" />}
            </button>

            <Link to="/lore" className={`text-xs font-rajdhani font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${isActive('/lore')}`}>
              The BangForge
            </Link>

            <div className="h-4 w-px bg-white/10 mx-2"></div>

            <a 
              href={DISCORD_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-rajdhani font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-[#5865F2] transition-colors duration-300"
            >
              <Disc className="w-4 h-4" />
              <span>Discord</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-4 text-center text-sm font-rajdhani font-bold uppercase tracking-widest text-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button 
              onClick={handleCopyIp}
              className="w-full block px-3 py-4 text-center text-sm font-rajdhani font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5"
            >
              {copied ? "IP Copied!" : "Copy Server IP"}
            </button>
            <Link 
              to="/lore" 
              className="block px-3 py-4 text-center text-sm font-rajdhani font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              The BangForge
            </Link>
            <a 
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-4 text-center text-sm font-rajdhani font-bold uppercase tracking-widest text-[#5865F2] hover:bg-white/5"
            >
              Join Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
