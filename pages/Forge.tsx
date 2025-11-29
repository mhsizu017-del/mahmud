import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Image as ImageIcon, Zap, AlertTriangle, Download, Lock, Key, Flame } from 'lucide-react';
import Logo from '../components/Logo';

const Forge: React.FC = () => {
  const [hasKey, setHasKey] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    if (window.aistudio && window.aistudio.hasSelectedApiKey) {
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    }
  };

  const handleSelectKey = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      await window.aistudio.openSelectKey();
      await checkKey();
    }
  };

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      // Initialize AI with the environment key (injected after selection)
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            imageSize: imageSize,
            aspectRatio: aspectRatio,
          },
        },
      });

      // Extract image
      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64String = part.inlineData.data;
            setGeneratedImage(`data:image/png;base64,${base64String}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        throw new Error("No image generated. The Forge was silent.");
      }

    } catch (err: any) {
      console.error(err);
      setError(err.message || "The Forge rejected your request. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[#050505] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header with Glowing Logo */}
        <div className="text-center mb-12">
          <div className="relative inline-block w-48 h-auto mb-6">
            {/* Ambient Heat Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-forge-primary/20 blur-[60px] rounded-full mix-blend-screen animate-heat-pulse"></div>
            
            {/* Logo Container */}
            <div className="relative z-10 w-full flex justify-center items-center">
               <Logo 
                 className="w-full h-auto drop-shadow-[0_0_25px_rgba(255,26,26,0.6)] filter brightness-110" 
                 showText={false} 
                 animateFire={true}
               />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-2">
            Forge <span className="text-forge-primary">Visions</span>
          </h1>
          <p className="text-gray-400 font-rajdhani text-lg tracking-wide">
            Shape reality with your words. The Forge awaits your command.
          </p>
        </div>

        {/* API Key Gate */}
        {!hasKey ? (
          <div className="max-w-md mx-auto bg-black/80 border border-forge-primary/30 rounded-xl p-8 text-center backdrop-blur-md shadow-[0_0_30px_rgba(255,26,26,0.1)]">
            <Lock className="w-12 h-12 text-forge-primary mx-auto mb-4" />
            <h2 className="text-2xl font-rajdhani font-bold text-white mb-4">Forge Locked</h2>
            <p className="text-gray-400 mb-6 font-rajdhani">
              To access the visualizer, you must present a valid API Key from the Google AI Studio order.
            </p>
            <button
              onClick={handleSelectKey}
              className="inline-flex items-center gap-2 px-6 py-3 bg-forge-primary/10 hover:bg-forge-primary/20 border border-forge-primary/50 text-forge-primary font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,26,26,0.3)] font-rajdhani uppercase tracking-widest"
            >
              <Key className="w-5 h-5" />
              Unlock The Forge
            </button>
            <p className="mt-4 text-xs text-gray-500">
              <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-white">
                Requires a paid project key for Image Generation
              </a>
            </p>
          </div>
        ) : (
          /* Generator Interface */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Controls */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-black/80 border border-white/10 rounded-xl p-6 backdrop-blur-md">
                <label className="block text-forge-primary font-rajdhani font-bold uppercase tracking-wider mb-2 text-sm">
                  Aspect Ratio
                </label>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {['1:1', '16:9', '9:16', '4:3', '3:4'].map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setAspectRatio(ratio)}
                      className={`py-2 px-1 text-xs font-rajdhani font-bold rounded border transition-all duration-200 ${
                        aspectRatio === ratio
                          ? 'bg-forge-primary text-white border-forge-primary shadow-[0_0_10px_rgba(255,26,26,0.4)]'
                          : 'bg-white/5 text-gray-400 border-transparent hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>

                <label className="block text-forge-primary font-rajdhani font-bold uppercase tracking-wider mb-2 text-sm">
                  Resolution
                </label>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {['1K', '2K', '4K'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setImageSize(size as any)}
                      className={`py-2 px-1 text-xs font-rajdhani font-bold rounded border transition-all duration-200 ${
                        imageSize === size
                          ? 'bg-forge-primary text-white border-forge-primary shadow-[0_0_10px_rgba(255,26,26,0.4)]'
                          : 'bg-white/5 text-gray-400 border-transparent hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <label className="block text-forge-primary font-rajdhani font-bold uppercase tracking-wider mb-2 text-sm">
                  Vision Prompt
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the artifact you wish to forge..."
                  className="w-full h-32 bg-black border border-white/20 rounded-lg p-3 text-white font-rajdhani placeholder-gray-600 focus:outline-none focus:border-forge-primary focus:ring-1 focus:ring-forge-primary resize-none transition-colors"
                />

                <button
                  onClick={handleGenerate}
                  disabled={loading || !prompt}
                  className={`w-full mt-6 py-4 rounded-lg font-rajdhani font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 ${
                    loading || !prompt
                      ? 'bg-gray-900 text-gray-600 cursor-not-allowed border border-gray-800'
                      : 'bg-gradient-to-r from-forge-secondary to-forge-primary text-white border border-forge-primary hover:shadow-[0_0_20px_rgba(255,26,26,0.4)]'
                  }`}
                >
                  {loading ? (
                    <>
                      <Zap className="w-5 h-5 animate-pulse" /> Forging...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" /> Ignite Forge
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Output */}
            <div className="lg:col-span-2">
              <div className="h-full min-h-[500px] bg-black/60 border border-white/10 rounded-xl p-4 backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden group">
                
                {/* Background Grid Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,26,26,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,26,26,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

                {generatedImage ? (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <img 
                      src={generatedImage} 
                      alt="Forged Result" 
                      className="max-h-[600px] w-auto object-contain rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-white/10"
                    />
                    <a
                      href={generatedImage}
                      download={`bangforge-vision-${Date.now()}.png`}
                      className="absolute bottom-6 right-6 bg-black/80 hover:bg-forge-primary text-white p-3 rounded-full backdrop-blur border border-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
                      title="Download Artifact"
                    >
                      <Download className="w-6 h-6" />
                    </a>
                  </div>
                ) : (
                  <div className="text-center p-8 opacity-50">
                    {loading ? (
                       <div className="flex flex-col items-center">
                         <div className="relative mb-4">
                           <div className="w-16 h-16 border-4 border-forge-primary/30 border-t-forge-primary rounded-full animate-spin"></div>
                           <Flame className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-forge-primary animate-pulse" />
                         </div>
                         <p className="font-rajdhani text-forge-primary animate-pulse">The Anvil Strikes...</p>
                       </div>
                    ) : error ? (
                        <div className="flex flex-col items-center text-red-500">
                           <AlertTriangle className="w-12 h-12 mb-2" />
                           <p className="font-rajdhani">{error}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-gray-500">
                           <ImageIcon className="w-16 h-16 mb-4" />
                           <p className="font-rajdhani text-xl">The canvas is void.</p>
                           <p className="font-rajdhani text-sm">Enter a prompt to begin creation.</p>
                        </div>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Forge;