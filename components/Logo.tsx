
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  animateFire?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-full h-full", showText = true, animateFire = false }) => {
  return (
    <svg
      viewBox="0 0 500 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="flameBodyGradient" x1="250" y1="100" x2="250" y2="350" gradientUnits="userSpaceOnUse">
          <stop offset="10%" stopColor="#FF1A1A" />
          <stop offset="90%" stopColor="#D90000" />
        </linearGradient>
        <linearGradient id="shieldGradient" x1="250" y1="50" x2="250" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#800000" />
        </linearGradient>
      </defs>

      {/* Shield Outline - Sharp Heater Style */}
      <path
        d="M 120 120 L 380 120 L 370 200 C 370 350 250 440 250 440 C 250 440 130 350 130 200 L 120 120 Z"
        stroke="url(#shieldGradient)"
        strokeWidth="18"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        className="drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]"
      />

      {/* Anvil Base - Flat Top, Curved Sides */}
      <path
        d="M 160 310 H 340 L 330 325 C 330 325 335 360 360 375 H 140 C 165 360 170 325 170 325 L 160 310 Z"
        fill="#050505"
        stroke="#D90000"
        strokeWidth="4"
      />
      {/* Anvil Rim */}
      <rect x="158" y="310" width="184" height="12" fill="#000000" />
      
      {/* Flame - Outer Body (The "Spade/Heart" Shape) */}
      <path
        d="M 250 80 
           C 250 80 200 150 210 200 
           C 180 180 160 210 175 260 
           C 190 310 250 310 250 310 
           C 250 310 310 310 325 260 
           C 340 210 320 180 290 200 
           C 300 150 250 80 250 80 Z"
        fill="url(#flameBodyGradient)"
        className={animateFire ? "origin-bottom animate-flame-wave" : ""}
      />

      {/* Flame - Inner Core (Negative Space / Detail) */}
      <path
        d="M 250 160
           C 250 160 235 200 240 230
           C 230 220 220 230 225 250
           C 230 270 250 280 250 280
           C 250 280 270 270 275 250
           C 280 230 270 220 260 230
           C 265 200 250 160 250 160 Z"
        fill="#990000"
        className={animateFire ? "origin-center animate-core-pulse" : ""}
      />

      {/* Typography */}
      {showText && (
        <g transform="translate(0, 430)">
          {/* Text is centered based on the graphic center (x=250) */}
          <text x="245" y="50" fontFamily="Rajdhani" fontWeight="700" fontSize="65" fill="white" letterSpacing="0.05em" textAnchor="end">BANG</text>
          <text x="255" y="50" fontFamily="Rajdhani" fontWeight="700" fontSize="65" fill="#FF1A1A" letterSpacing="0.05em" textAnchor="start">FORGE</text>
        </g>
      )}
    </svg>
  );
};

export default Logo;
