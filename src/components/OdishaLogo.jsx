export function KonarkWheelIcon({ className = "w-6 h-6", animated = true }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animated ? 'group-hover:rotate-45 transition-transform duration-700 ease-out' : ''}`}
    >
      <defs>
        {/* Golden Sun & Royal Bronze Gradients */}
        <linearGradient id="konarkGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        <linearGradient id="templeEmerald" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>

        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </radialGradient>
      </defs>

      {/* Outer Rim Bands */}
      <circle cx="50" cy="50" r="46" stroke="url(#konarkGold)" strokeWidth="2.5" opacity="0.9" />
      <circle cx="50" cy="50" r="42" stroke="url(#konarkGold)" strokeWidth="1.2" opacity="0.75" />

      {/* 16 Decorative Solar Studs on Outer Rim */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const cx = 50 + 44 * Math.cos(rad);
        const cy = 50 + 44 * Math.sin(rad);
        return (
          <circle 
            key={`stud-${i}`} 
            cx={cx} 
            cy={cy} 
            r="1.6" 
            fill="#FEF08A" 
            stroke="#B45309" 
            strokeWidth="0.5" 
          />
        );
      })}

      {/* Inner Track Ring */}
      <circle cx="50" cy="50" r="28" stroke="url(#konarkGold)" strokeWidth="1.5" opacity="0.85" />
      <circle cx="50" cy="50" r="24" stroke="url(#konarkGold)" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

      {/* 8 Secondary Slender Spoke Rays */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 + 22.5) * (Math.PI / 180);
        const x1 = 50 + 15 * Math.cos(angle);
        const y1 = 50 + 15 * Math.sin(angle);
        const x2 = 50 + 42 * Math.cos(angle);
        const y2 = 50 + 42 * Math.sin(angle);
        return (
          <line
            key={`thin-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FDE047"
            strokeWidth="1.2"
            opacity="0.8"
          />
        );
      })}

      {/* 8 Primary Ornate Konark Spoke Beams with Medallions */}
      {[...Array(8)].map((_, i) => {
        const angleDeg = i * 45;
        const rad = (angleDeg * Math.PI) / 180;
        const x1 = 50 + 15 * Math.cos(rad);
        const y1 = 50 + 15 * Math.sin(rad);
        const x2 = 50 + 42 * Math.cos(rad);
        const y2 = 50 + 42 * Math.sin(rad);
        
        // Midpoint medallion on spoke
        const midX = 50 + 28 * Math.cos(rad);
        const midY = 50 + 28 * Math.sin(rad);

        return (
          <g key={`spoke-${i}`}>
            {/* Tapered Main Spoke */}
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#konarkGold)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Medallion bead on each spoke */}
            <circle
              cx={midX}
              cy={midY}
              r="3.2"
              fill="url(#hubGlow)"
              stroke="#78350F"
              strokeWidth="0.8"
            />
            <circle
              cx={midX}
              cy={midY}
              r="1.2"
              fill="#FFFFFF"
            />
          </g>
        );
      })}

      {/* Central Axle / Mandala Hub */}
      <circle cx="50" cy="50" r="14" fill="url(#hubGlow)" stroke="#78350F" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="9.5" fill="#78350F" opacity="0.3" />
      <circle cx="50" cy="50" r="7" fill="url(#konarkGold)" />

      {/* Central Sacred Sun & Temple Spire Symbol */}
      <path
        d="M 50 44 L 54 52 L 46 52 Z"
        fill="#FFFFFF"
      />
      <circle cx="50" cy="42" r="1.8" fill="#FEF08A" />
      <circle cx="50" cy="50" r="2.2" fill="#78350F" />
    </svg>
  );
}

export default function OdishaLogo({ 
  showText = true, 
  size = "md", 
  isScrolled = false
}) {
  const sizeClasses = {
    sm: "w-7 h-7",
    md: "w-7.5 h-7.5 sm:w-8.5 sm:h-8.5",
    lg: "w-9 h-9 sm:w-10 sm:h-10"
  };

  return (
    <div className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer select-none">
      {/* Ornate Konark Sun Chakra Badge */}
      <div className={`relative ${sizeClasses[size]} rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-emerald-500 p-[1.5px] shadow-md shadow-amber-950/20 group-hover:scale-105 group-hover:shadow-amber-500/20 transition-all duration-300 shrink-0`}>
        <div className="w-full h-full bg-slate-950/90 backdrop-blur-md rounded-[10px] flex items-center justify-center p-1">
          <KonarkWheelIcon className="w-full h-full" animated={true} />
        </div>
        {/* Subtle pulsating solar spark */}
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`text-sm sm:text-base lg:text-lg font-extrabold tracking-tight font-display transition-colors duration-300 truncate ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                ODISHA TOURISM
              </span>
            </span>
          </div>
          <p className={`text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase font-semibold transition-colors duration-300 mt-0.5 truncate hidden sm:block ${
            isScrolled ? 'text-emerald-700' : 'text-emerald-200'
          }`}>
            India&apos;s Best Kept Secret
          </p>
        </div>
      )}
    </div>
  );
}
