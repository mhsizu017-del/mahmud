import React, { useState } from 'react';
import { OWNER_NAME, OWNER_CONTACT } from '../constants';
import { Terminal, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 border-t border-forge-primary/20 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-cinzel text-xl text-white font-bold tracking-widest">
              BANG<span className="text-forge-primary">FORGE</span>
            </h3>
            <p className="text-gray-500 font-rajdhani text-sm max-w-xs">
              Where creation has consequences. Join us and shape your reality in a world that listens.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-rajdhani text-lg text-forge-primary font-bold uppercase tracking-wider">
              Server Owner
            </h4>
            <div className="flex items-center space-x-2 text-gray-300">
              <ShieldCheck className="w-5 h-5 text-forge-primary" />
              <span className="font-bold">{OWNER_NAME}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Terminal className="w-4 h-4" />
              <span>{OWNER_CONTACT}</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-rajdhani text-lg text-forge-primary font-bold uppercase tracking-wider">
              Legal & Info
            </h4>
            <ul className="space-y-2 font-rajdhani text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rules & Guidelines</a></li>
              <li><span className="text-gray-600">© 2024 BangForge</span></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;