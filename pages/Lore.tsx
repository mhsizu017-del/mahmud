import React from 'react';
import { LORE_TEXT } from '../constants';
import { Scroll, Flame } from 'lucide-react';

const Lore: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-forge-primary/10 mb-4 border border-forge-primary/20">
            <Scroll className="w-8 h-8 text-forge-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-4">
            The Legend of <span className="text-forge-primary">Veilforge</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-forge-primary to-transparent mx-auto"></div>
        </div>

        {/* Content Container */}
        <div className="relative bg-black/60 border border-white/10 rounded-xl p-8 md:p-12 backdrop-blur-sm shadow-[0_0_50px_rgba(255,26,26,0.1)]">
          
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-forge-primary rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-forge-primary rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-forge-secondary rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-forge-secondary rounded-br-lg"></div>

          {/* Text Content */}
          <div className="space-y-6 text-lg md:text-xl text-gray-300 font-rajdhani leading-relaxed text-justify">
            {LORE_TEXT.map((paragraph, index) => {
              // Styling specific paragraphs for emphasis
              const isHeader = paragraph.includes("Veilforge") || paragraph.includes("BangForge");
              const isEmphasis = paragraph.includes("Vanished") || paragraph.includes("consequence");
              
              if (paragraph.startsWith("Welcome to BangForge")) {
                 return (
                    <div key={index} className="pt-8 text-center">
                        <p className="text-2xl md:text-3xl font-cinzel font-bold text-white drop-shadow-[0_0_10px_rgba(255,26,26,0.5)]">
                            {paragraph}
                        </p>
                    </div>
                 )
              }

              return (
                <p 
                  key={index} 
                  className={`
                    ${isHeader ? 'text-forge-primary font-bold text-xl md:text-2xl' : ''} 
                    ${isEmphasis ? 'italic text-white' : ''}
                  `}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
             <Flame className="w-8 h-8 text-forge-primary animate-pulse-slow opacity-50" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Lore;