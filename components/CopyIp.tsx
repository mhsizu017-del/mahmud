import React, { useState } from 'react';
import { Copy, Check, Server } from 'lucide-react';
import { SERVER_IP } from '../constants';

const CopyIp: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group max-w-md mx-auto w-full">
      <div className="absolute -inset-1 bg-gradient-to-r from-forge-secondary via-red-500 to-forge-primary rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <button
        onClick={handleCopy}
        className="relative w-full bg-black ring-1 ring-white/10 rounded-lg p-4 flex items-center justify-between hover:bg-slate-900 transition-all duration-300 group-hover:ring-forge-primary/50"
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-md bg-white/5 transition-colors duration-300 ${copied ? 'bg-forge-primary/20' : 'group-hover:bg-forge-primary/10'}`}>
             <Server className={`w-6 h-6 transition-colors duration-300 ${copied ? 'text-forge-primary' : 'text-gray-400 group-hover:text-forge-primary'}`} />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 font-rajdhani uppercase tracking-widest font-bold">Server Address</p>
            <p className="text-xl md:text-2xl text-white font-rajdhani font-bold tracking-wider">{SERVER_IP}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 pr-2">
          <span className={`text-sm font-rajdhani font-bold uppercase transition-opacity duration-300 ${copied ? 'text-forge-primary opacity-100' : 'text-gray-500 opacity-0 md:group-hover:opacity-100'}`}>
            {copied ? 'Copied!' : 'Click to Copy'}
          </span>
          {copied ? (
            <Check className="w-5 h-5 text-forge-primary" />
          ) : (
            <Copy className="w-5 h-5 text-gray-400 group-hover:text-white" />
          )}
        </div>
      </button>
    </div>
  );
};

export default CopyIp;