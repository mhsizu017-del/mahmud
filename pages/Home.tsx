import React from 'react';
import { ExternalLink, ArrowRight, Box, Zap, Crown } from 'lucide-react';
import { DISCORD_LINK } from '../constants';
import CopyIp from '../components/CopyIp';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top Red Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[90vw] h-[50vw] bg-forge-primary/10 blur-[120px] rounded-full mix-blend-screen"></div>
        {/* Bottom Dark Red/Orange Glow */}
        <div className="absolute bottom-[-20%] right-0 w-[60vw] h-[60vw] bg-forge-secondary/10 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mb-24">
            
            {/* Logo Image - The centerpiece */}
            <div className="relative mb-8 group w-full max-w-[500px] aspect-[5/6] flex items-center justify-center">
              <div className="absolute -inset-10 bg-gradient-to-t from-forge-secondary/20 via-forge-primary/10 to-forge-primary/30 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
              {/* Using SVG Logo Component */}
              <Logo className="w-full h-full drop-shadow-[0_0_35px_rgba(255,26,26,0.3)] animate-float" />
            </div>

            {/* Subtitle only - Title is in the logo */}
            <p className="font-rajdhani text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-medium tracking-wide">
              Long before the first player spawned, the world was silent. <br/>
              <span className="text-forge-metal text-lg mt-2 block opacity-80">Now, it waits for you.</span>
            </p>

            {/* CTA Section */}
            <div className="w-full max-w-xl space-y-6">
              <CopyIp />
            </div>
          </div>

          {/* Features Grid (From Screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            
            {/* Card 1: Shape Reality */}
            <div className="group bg-[#0a0a0a] border border-white/5 p-8 rounded-sm hover:border-forge-primary/50 transition-colors duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(255,26,26,0.1)]">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-sm group-hover:bg-forge-primary/10 transition-colors">
                <Box className="w-8 h-8 text-forge-primary" />
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-4 uppercase tracking-wider">
                Shape Reality
              </h3>
              <p className="text-gray-400 font-rajdhani leading-relaxed">
                Biomes shift unnaturally. Structures appear where no builder existed. The land reshapes around your decisions.
              </p>
            </div>

            {/* Card 2: The Glitch */}
            <div className="group bg-[#0a0a0a] border border-white/5 p-8 rounded-sm hover:border-forge-secondary/50 transition-colors duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(128,0,0,0.3)]">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-sm group-hover:bg-forge-secondary/10 transition-colors">
                <Zap className="w-8 h-8 text-forge-secondary" />
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-4 uppercase tracking-wider">
                The Glitch
              </h3>
              <p className="text-gray-400 font-rajdhani leading-relaxed">
                The world is unfinished. Left to decay, glitch, regenerate, and rewrite itself endlessly.
              </p>
            </div>

            {/* Card 3: Become The Hammer */}
            <div className="group bg-[#0a0a0a] border border-white/5 p-8 rounded-sm hover:border-forge-metal/50 transition-colors duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-sm group-hover:bg-white/10 transition-colors">
                <Crown className="w-8 h-8 text-forge-metal" />
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-4 uppercase tracking-wider">
                Become The Hammer
              </h3>
              <p className="text-gray-400 font-rajdhani leading-relaxed">
                BangForge is not just a realm. It is a forge. And you are the newest Hammer.
              </p>
            </div>

          </div>

          {/* Bottom Quote */}
          <div className="text-center pb-20">
             <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-forge-secondary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <h2 className="relative text-4xl md:text-5xl font-rajdhani font-bold text-white tracking-wide">
                  "Creation has <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge-primary to-orange-600">Consequences</span>"
                </h2>
                <div className="h-1 w-1/3 bg-gradient-to-r from-forge-primary to-transparent mx-auto mt-4 rounded-full"></div>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;