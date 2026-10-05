import { useState, useMemo } from 'react';
import { 
  MapPin, 
  Compass, 
  Sparkles, 
  Star, 
  Heart, 
  ChevronRight, 
  Calendar, 
  ArrowUpRight, 
  Search, 
  Layers, 
  X,
  Eye,
  Users,
  Activity
} from 'lucide-react';
import { 
  ODISHA_REGIONS, 
  DISTRICT_MAP_DATA, 
  getDistrictAttractions 
} from '../data/districtMapData';

/**
 * Helper to compute Crowd Meter level for any destination
 * Returns: 🟢 Low | 🟡 Moderate | 🔴 High
 */
export function getDestinationCrowd(dest) {
  if (!dest) {
    return {
      level: 'low',
      indicator: '🟢',
      label: 'Low Crowd',
      badgeClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
      bars: 1
    };
  }

  const raw = (dest.crowdLevel || '').toLowerCase();
  
  if (
    raw.includes('very high') || 
    raw.includes('high crowd') || 
    raw.includes('heavy') || 
    raw.includes('popular classic') || 
    raw.includes('state spiritual') || 
    raw.includes('coastal hub') || 
    raw.includes('tourist magnet') ||
    raw.includes('permit lines') ||
    raw.includes('city center')
  ) {
    return {
      level: 'high',
      indicator: '🔴',
      label: 'High Crowd',
      badgeClass: 'bg-rose-500/15 border-rose-500/30 text-rose-300',
      bars: 3
    };
  }

  if (
    raw.includes('moderate') || 
    raw.includes('resort') || 
    raw.includes('scenic icon') || 
    (dest.reviews && dest.reviews > 800 && !dest.isUnderrated)
  ) {
    return {
      level: 'moderate',
      indicator: '🟡',
      label: 'Moderate Crowd',
      badgeClass: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
      bars: 2
    };
  }

  return {
    level: 'low',
    indicator: '🟢',
    label: 'Low Crowd',
    badgeClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    bars: 1
  };
}

/**
 * Helper to compute general Crowd Meter density for a district
 */
export function getDistrictCrowd(districtName) {
  const norm = (districtName || '').toLowerCase();
  const highDistricts = ['puri', 'khurda', 'cuttack'];
  const modDistricts = ['mayurbhanj', 'keonjhar', 'balasore', 'ganjam', 'sambalpur', 'dhenkanal', 'angul', 'jajpur', 'koraput', 'jagatsinghpur'];

  if (highDistricts.includes(norm)) {
    return {
      level: 'high',
      indicator: '🔴',
      label: 'High Crowd',
      badgeClass: 'bg-rose-500/15 border-rose-500/30 text-rose-300',
      desc: 'Peak footfall with bustling visitor traffic'
    };
  }

  if (modDistricts.includes(norm)) {
    return {
      level: 'moderate',
      indicator: '🟡',
      label: 'Moderate Crowd',
      badgeClass: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
      desc: 'Balanced tourist footfall and comfortable access'
    };
  }

  return {
    level: 'low',
    indicator: '🟢',
    label: 'Low Crowd',
    badgeClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    desc: 'Secluded, serene & quiet nature exploration'
  };
}

export default function InteractiveOdishaMap({
  onSelectDestination,
  onBookDestination,
  onToggleWishlist,
  wishlist = [],
  onFilterByDistrict
}) {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDistrictName, setSelectedDistrictName] = useState('Puri');
  const [hoveredDistrictName, setHoveredDistrictName] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [crowdFilter, setCrowdFilter] = useState('all'); // 'all' | 'low' | 'moderate' | 'high'

  // Filter districts based on region & search
  const filteredDistricts = useMemo(() => {
    return DISTRICT_MAP_DATA.filter((d) => {
      const matchRegion = selectedRegion === 'all' || d.region === selectedRegion;
      const matchSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.famousFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchRegion && matchSearch;
    });
  }, [selectedRegion, searchQuery]);

  // Data for the active selected district
  const activeDistrictData = useMemo(() => {
    return getDistrictAttractions(selectedDistrictName);
  }, [selectedDistrictName]);

  const activeDistrict = activeDistrictData.district;
  const activeAttractions = activeDistrictData.destinations;

  // Filter attractions based on Crowd Meter selection
  const displayedAttractions = useMemo(() => {
    if (crowdFilter === 'all') return activeAttractions;
    return activeAttractions.filter(d => getDestinationCrowd(d).level === crowdFilter);
  }, [activeAttractions, crowdFilter]);

  const isSaved = (destId) => wishlist.some((item) => item.id === destId);

  const activeDistrictCrowd = useMemo(() => {
    return getDistrictCrowd(activeDistrict.name);
  }, [activeDistrict.name]);

  return (
    <section id="odisha-map" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden select-none">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
            <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>Geographic Discovery & Crowd Density</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Interactive <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">Odisha Map</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Click on any district to inspect its top attractions, UNESCO marvels, and live <strong className="text-white">Crowd Meter</strong> (🟢 Low • 🟡 Moderate • 🔴 High) to plan crowd-free visits.
          </p>

          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {ODISHA_REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedRegion === region.id
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-700/20 scale-105 border border-emerald-400/40'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map Explorer Grid: Visual SVG Map (Left) & District Top Attractions Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map Viewport (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl relative">
            
            {/* Top Toolbar in Map Box */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Selected District</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1.5">
                    {selectedDistrictName}
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${activeDistrictCrowd.badgeClass}`}>
                      {activeDistrictCrowd.indicator} {activeDistrictCrowd.label}
                    </span>
                  </span>
                </div>
              </div>

              {/* District Search inside map */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search 30 districts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-48 pl-8 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* SVG Visual Odisha Map Canvas */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950/80 border border-white/5 overflow-hidden flex items-center justify-center p-2">
              
              {/* Subtle Grid Lines & Compass Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
              
              {/* Ocean / Bay of Bengal Label on the East */}
              <div className="absolute right-4 bottom-8 flex flex-col items-end pointer-events-none select-none text-right">
                <span className="text-[11px] font-bold tracking-widest text-sky-400/50 uppercase">Bay of Bengal</span>
                <span className="text-[9px] text-sky-400/30">485 km Scenic Coastline</span>
                <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-sky-400/30 mt-1" />
              </div>

              {/* Northern Hills Label */}
              <div className="absolute left-6 top-6 pointer-events-none select-none">
                <span className="text-[10px] font-bold tracking-widest text-emerald-400/40 uppercase">Eastern Ghats &amp; Valleys</span>
              </div>

              <svg
                viewBox="100 60 600 580"
                className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] select-none"
              >
                {/* Odisha Geographic Outline Silhouette (Stylized Boundary) */}
                <path
                  d="M 290 80 
                     C 350 70, 520 80, 600 110 
                     C 630 130, 640 180, 630 220 
                     C 610 260, 600 290, 595 330 
                     C 570 380, 540 430, 460 470 
                     C 420 500, 390 530, 350 540 
                     C 300 560, 240 600, 180 620 
                     C 150 630, 140 590, 160 550 
                     C 180 500, 190 460, 210 420 
                     C 170 390, 160 340, 170 300 
                     C 190 250, 210 210, 250 160 
                     Z"
                  fill="#064e3b"
                  fillOpacity="0.18"
                  stroke="#10b981"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="transition-all duration-700"
                />

                {/* Major River Tributaries: Mahanadi Arc */}
                <path
                  d="M 220 280 Q 360 290 490 315 T 580 340"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  strokeOpacity="0.35"
                  strokeLinecap="round"
                />
                <text x="360" y="285" fill="#38bdf8" fillOpacity="0.3" fontSize="8" fontStyle="italic">
                  Mahanadi River
                </text>

                {/* District Pins & Nodes */}
                {DISTRICT_MAP_DATA.map((district) => {
                  const isSelected = district.name.toLowerCase() === selectedDistrictName.toLowerCase();
                  const isHovered = district.name.toLowerCase() === hoveredDistrictName?.toLowerCase();
                  const isRegionMatched = selectedRegion === 'all' || district.region === selectedRegion;
                  const hasCatalog = district.popularAttractionIds && district.popularAttractionIds.length > 0;
                  const districtCrowd = getDistrictCrowd(district.name);

                  return (
                    <g
                      key={district.name}
                      transform={`translate(${district.mapX}, ${district.mapY})`}
                      onClick={() => setSelectedDistrictName(district.name)}
                      onMouseEnter={() => setHoveredDistrictName(district.name)}
                      onMouseLeave={() => setHoveredDistrictName(null)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse Wave for Selected Pin */}
                      {isSelected && (
                        <circle
                          r="18"
                          fill="none"
                          stroke={districtCrowd.level === 'high' ? '#f43f5e' : districtCrowd.level === 'moderate' ? '#fbbf24' : '#34d399'}
                          strokeWidth="1.5"
                          className="animate-ping opacity-60"
                        />
                      )}

                      {/* Outer Ring on Hover or Select */}
                      <circle
                        r={isSelected ? 14 : isHovered ? 12 : isRegionMatched ? 8 : 6}
                        fill={isSelected ? '#059669' : isHovered ? '#047857' : isRegionMatched ? '#064e3b' : '#1e293b'}
                        fillOpacity={isRegionMatched ? 0.9 : 0.4}
                        stroke={isSelected ? '#34d399' : isHovered ? '#fbbf24' : isRegionMatched ? '#10b981' : '#475569'}
                        strokeWidth={isSelected ? 2.5 : isHovered ? 2 : 1}
                        className="transition-all duration-300"
                      />

                      {/* Center Point Icon/Dot */}
                      <circle
                        r={isSelected ? 5 : isHovered ? 4 : 2.5}
                        fill={isSelected ? '#ffffff' : hasCatalog ? '#fbbf24' : '#e2e8f0'}
                        className="transition-all duration-300"
                      />

                      {/* Crowd Meter Status Bead on Pin */}
                      <circle
                        cx="-7"
                        cy="-7"
                        r="2.8"
                        fill={districtCrowd.level === 'high' ? '#ef4444' : districtCrowd.level === 'moderate' ? '#f59e0b' : '#10b981'}
                        stroke="#0f172a"
                        strokeWidth="0.8"
                      />

                      {/* District Text Label */}
                      <text
                        x="0"
                        y={isSelected ? 26 : 20}
                        textAnchor="middle"
                        fill={isSelected ? '#ffffff' : isHovered ? '#fbbf24' : isRegionMatched ? '#cbd5e1' : '#64748b'}
                        fontSize={isSelected ? "11" : isHovered ? "10" : "8.5"}
                        fontWeight={isSelected || isHovered ? "bold" : "500"}
                        className="pointer-events-none transition-all duration-200 select-none drop-shadow-sm"
                      >
                        {district.name}
                      </text>

                      {/* Small Star Indicator for Key Hubs */}
                      {hasCatalog && (
                        <circle
                          cx="7"
                          cy="-6"
                          r="2.5"
                          fill="#f59e0b"
                          className="animate-pulse"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Bottom Quick Legend with Crowd Meter */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex flex-wrap items-center gap-3 text-[10px] text-slate-300 shadow-lg">
                <span className="flex items-center gap-1 font-bold text-white">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  <span>Crowd Meter:</span>
                </span>
                <span className="flex items-center gap-1 text-emerald-300">
                  <span>🟢</span>
                  <span>Low</span>
                </span>
                <span className="flex items-center gap-1 text-amber-300">
                  <span>🟡</span>
                  <span>Moderate</span>
                </span>
                <span className="flex items-center gap-1 text-rose-300">
                  <span>🔴</span>
                  <span>High</span>
                </span>
                <span className="opacity-40 hidden sm:inline">•</span>
                <span className="text-slate-400 hidden sm:inline">Click pin to explore</span>
              </div>
            </div>

            {/* Quick District Grid Chips (Filterable) */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Browse All 30 Districts ({filteredDistricts.length})</span>
                <span className="text-emerald-400 font-semibold text-[11px]">Click to inspect</span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1 custom-scrollbar">
                {filteredDistricts.map((d) => (
                  <button
                    key={d.name}
                    onClick={() => setSelectedDistrictName(d.name)}
                    className={`px-2.5 py-1 rounded-lg text-xs transition-all cursor-pointer ${
                      d.name.toLowerCase() === selectedDistrictName.toLowerCase()
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                        : 'bg-white/5 hover:bg-white/15 text-slate-300 border border-white/5'
                    }`}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: District Top Attractions Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* District Header Card */}
            <div className="bg-gradient-to-br from-slate-900/90 to-emerald-950/40 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Layers className="w-3 h-3" />
                    <span>{activeDistrict.regionLabel}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {activeDistrict.name} District
                  </h3>
                  <p className="text-emerald-300/90 text-xs font-semibold mt-0.5">
                    Famous for: {activeDistrict.famousFor}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Best Season</span>
                  <span className="text-xs font-bold text-amber-300 flex items-center justify-end gap-1 mt-0.5">
                    <Calendar className="w-3 h-3" />
                    {activeDistrict.bestSeason}
                  </span>
                </div>
              </div>

              {/* District Live Crowd Meter Status */}
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${activeDistrictCrowd.badgeClass}`}>
                  <span>{activeDistrictCrowd.indicator}</span>
                  <span>{activeDistrictCrowd.label}</span>
                  {/* Visual 3-bar indicator */}
                  <div className="flex items-center gap-0.5 ml-1">
                    <span className={`w-1.5 h-3 rounded-xs ${activeDistrictCrowd.level === 'low' ? 'bg-emerald-400' : activeDistrictCrowd.level === 'moderate' ? 'bg-amber-400' : 'bg-rose-400'}`} />
                    <span className={`w-1.5 h-3 rounded-xs ${activeDistrictCrowd.level === 'moderate' ? 'bg-amber-400' : activeDistrictCrowd.level === 'high' ? 'bg-rose-400' : 'bg-white/20'}`} />
                    <span className={`w-1.5 h-3 rounded-xs ${activeDistrictCrowd.level === 'high' ? 'bg-rose-400' : 'bg-white/20'}`} />
                  </div>
                </div>
                <span className="text-[11px] text-slate-400 italic">
                  {activeDistrictCrowd.desc}
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                {activeDistrict.tagline}
              </p>

              {/* Curated Highlights Badges */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Key District Highlights
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeDistrict.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200 text-xs font-medium"
                    >
                      ✦ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Attractions List with Crowd Meter Filter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Top Attractions ({displayedAttractions.length})</span>
                </h4>
                {activeAttractions.length > 0 && onFilterByDistrict && (
                  <button
                    onClick={() => onFilterByDistrict(activeDistrict.name)}
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 group cursor-pointer"
                  >
                    <span>View all in directory</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>

              {/* Crowd Meter Quick Filter Buttons */}
              {activeAttractions.length > 0 && (
                <div className="flex items-center gap-1.5 p-1 bg-slate-950/70 rounded-xl border border-white/10 text-xs overflow-x-auto">
                  <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 pl-2 pr-1 shrink-0">
                    <Users className="w-3 h-3 text-emerald-400" />
                    <span>Crowd:</span>
                  </span>

                  <button
                    onClick={() => setCrowdFilter('all')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 ${
                      crowdFilter === 'all'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    All ({activeAttractions.length})
                  </button>

                  <button
                    onClick={() => setCrowdFilter('low')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                      crowdFilter === 'low'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🟢</span>
                    <span>Low</span>
                  </button>

                  <button
                    onClick={() => setCrowdFilter('moderate')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                      crowdFilter === 'moderate'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🟡</span>
                    <span>Moderate</span>
                  </button>

                  <button
                    onClick={() => setCrowdFilter('high')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                      crowdFilter === 'high'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🔴</span>
                    <span>High</span>
                  </button>
                </div>
              )}

              {displayedAttractions.length > 0 ? (
                <div className="space-y-3">
                  {displayedAttractions.map((dest) => {
                    const saved = isSaved(dest.id);
                    const crowd = getDestinationCrowd(dest);

                    return (
                      <div
                        key={dest.id}
                        className="group bg-slate-900/80 hover:bg-slate-800/90 rounded-2xl p-3.5 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-lg flex gap-3.5 items-center"
                      >
                        {/* Attraction Thumbnail Image */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0">
                          <img
                            src={dest.image}
                            alt={dest.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <span className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${
                            dest.isUnderrated
                              ? 'bg-amber-400 text-slate-950 shadow-sm'
                              : 'bg-emerald-600 text-white shadow-sm'
                          }`}>
                            {dest.isUnderrated ? '💎 Gem' : '🔥 Iconic'}
                          </span>
                        </div>

                        {/* Attraction Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                              {dest.category}
                            </span>
                            <span className="text-slate-600 text-[10px]">•</span>
                            <div className="flex items-center gap-0.5 text-amber-300 text-xs font-bold">
                              <Star className="w-3 h-3 fill-current text-amber-400" />
                              <span>{dest.rating}</span>
                            </div>
                            <span className="text-slate-600 text-[10px]">•</span>

                            {/* CROWD METER BADGE */}
                            <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold border ${crowd.badgeClass}`}>
                              <span>{crowd.indicator}</span>
                              <span>{crowd.label}</span>
                              {/* 3-bar meter visualization */}
                              <div className="flex items-center gap-0.5 ml-0.5">
                                <span className={`w-1 h-2 rounded-xs ${crowd.level === 'low' ? 'bg-emerald-400' : crowd.level === 'moderate' ? 'bg-amber-400' : 'bg-rose-400'}`} />
                                <span className={`w-1 h-2 rounded-xs ${crowd.level === 'moderate' ? 'bg-amber-400' : crowd.level === 'high' ? 'bg-rose-400' : 'bg-white/20'}`} />
                                <span className={`w-1 h-2 rounded-xs ${crowd.level === 'high' ? 'bg-rose-400' : 'bg-white/20'}`} />
                              </div>
                            </div>
                          </div>

                          <h5 className="text-sm sm:text-base font-bold text-white truncate group-hover:text-emerald-300 transition-colors">
                            {dest.title}
                          </h5>

                          <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                            {dest.shortDesc}
                          </p>

                          {/* Quick Action Buttons */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => onSelectDestination && onSelectDestination(dest)}
                              className="px-2.5 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer border border-emerald-500/30"
                            >
                              <Eye className="w-3 h-3" />
                              <span>Details</span>
                            </button>

                            <button
                              onClick={() => onBookDestination && onBookDestination(dest)}
                              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <span>Book Tour</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </button>

                            <button
                              onClick={() => onToggleWishlist && onToggleWishlist(dest)}
                              aria-label="Save to favorites"
                              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                saved 
                                  ? 'bg-rose-500 text-white' 
                                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-rose-400'
                              }`}
                            >
                              <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Fallback when crowd filter has 0 results or district has no catalog items */
                <div className="bg-slate-900/60 rounded-2xl p-5 border border-white/10 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      {crowdFilter !== 'all' ? `No ${crowdFilter.toUpperCase()} Crowd Spots Found` : `Discovering ${activeDistrict.name}`}
                    </h5>
                    <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto leading-relaxed">
                      {crowdFilter !== 'all'
                        ? `There are no attractions currently matching '${crowdFilter}' crowd in ${activeDistrict.name}. Click 'All' above to view all destinations.`
                        : `This district features spectacular heritage sites including ${activeDistrict.highlights.slice(0, 2).join(' & ')}.`}
                    </p>
                  </div>
                  {crowdFilter !== 'all' ? (
                    <button
                      onClick={() => setCrowdFilter('all')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      <span>Show All Attractions ({activeAttractions.length})</span>
                    </button>
                  ) : (
                    onFilterByDistrict && (
                      <button
                        onClick={() => onFilterByDistrict(activeDistrict.name)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md cursor-pointer transition-all"
                      >
                        <span>Filter Directory by {activeDistrict.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Quick Circuit Shortcut */}
            <div className="bg-slate-950/70 border border-emerald-500/20 rounded-2xl p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs text-slate-300">
                  Planning a route through <strong className="text-white">{activeDistrict.name}</strong>?
                </span>
              </div>
              <button
                onClick={() => {
                  if (onFilterByDistrict) onFilterByDistrict(activeDistrict.name);
                }}
                className="text-xs font-bold text-amber-300 hover:text-amber-200 cursor-pointer shrink-0"
              >
                Search Tours →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
