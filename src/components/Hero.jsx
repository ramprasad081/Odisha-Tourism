import { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Waves,
  Mountain,
  Droplets,
  Landmark,
  Bird
} from 'lucide-react';
import { HERO_SLIDES, DISTRICTS } from '../data/destinations';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  selectedDistrict, 
  setSelectedDistrict, 
  selectedCategory, 
  setSelectedCategory,
  onExploreClick,
  onExploreHiddenGems
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto rotate slides every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleChipClick = (catId) => {
    setSelectedCategory(catId);
    if (onExploreClick) {
      onExploreClick();
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 overflow-hidden bg-slate-950">
      {/* Background Image Carousel with Smooth Crossfade */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-7000`}
        >
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Luxury Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 via-transparent to-sky-950/40" />
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-2 sm:mt-4">
        
        {/* Top Floating Badge (Ensured Full Clearance Below Fixed Navbar) */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-xl animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-bold">{currentSlide.badge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span className="text-white/90 font-normal normal-case hidden sm:inline">{currentSlide.highlight}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight max-w-5xl leading-[1.1] mb-6 drop-shadow-md">
          Experience Odisha's{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            Majestic Peaks,
          </span>
          <br className="hidden sm:block" />
          {' '}Untamed Cascades &{' '}
          <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
            Sacred Shores
          </span>
        </h1>

        {/* Dynamic Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-200/90 max-w-3xl mb-8 sm:mb-10 font-normal leading-relaxed drop-shadow">
          {currentSlide.subtitle}
        </p>

        {/* Large Rounded Floating Luxury Search Bar */}
        <div className="w-full max-w-4xl glass-pill rounded-3xl p-3 sm:p-3.5 shadow-2xl border border-white/70 mb-8 transform hover:-translate-y-0.5 transition-transform duration-300">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (onExploreClick) onExploreClick();
            }}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-2 sm:gap-3"
          >
            {/* Keyword Search Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/80 rounded-2xl border border-slate-200/60 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <Search className="w-5 h-5 text-emerald-700 shrink-0" />
              <div className="w-full text-left">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                  Where to explore?
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Waterfalls, Deomali, Puri beaches, Konark..."
                  className="w-full bg-transparent text-sm text-slate-900 font-medium placeholder:text-slate-600 focus:outline-none"
                />
              </div>
            </div>

            {/* District Selector */}
            <div className="flex-1 w-full md:w-60 flex items-center gap-3 px-4 py-3 bg-white/80 rounded-2xl border border-slate-200/60 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
              <div className="w-full text-left">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600">
                  Region / District
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-900 font-medium focus:outline-none cursor-pointer"
                >
                  {DISTRICTS.map((district) => (
                    <option key={district} value={district} className="text-slate-800">
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Bold Explore Now Button */}
            <button
              type="submit"
              onClick={onExploreClick}
              className="relative group overflow-hidden rounded-2xl px-7 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-emerald-800/30 flex items-center justify-center gap-2.5 transition-all duration-300 hover:shadow-emerald-600/40 cursor-pointer w-full md:w-auto shrink-0"
            >
              {/* Warm Golden Shimmer Accent */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 bg-amber-400/30 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500"></div>
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-amber-300" />
            </button>
          </form>
        </div>

        {/* Category Chips (Waterfalls, Hills, Temples, Beaches, Wildlife, Culture) */}
        <div className="w-full max-w-4xl">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
            <span className="text-xs font-semibold text-slate-300/80 mr-1 hidden sm:inline-block">
              Top Categories:
            </span>

            {/* Special Hidden Gems Button */}
            {onExploreHiddenGems && (
              <button
                onClick={onExploreHiddenGems}
                className="group flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 shadow-xl cursor-pointer bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 text-slate-950 hover:scale-105 ring-2 ring-white/60"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-950 animate-pulse" />
                <span>💎 Hidden Gems</span>
              </button>
            )}
            
            {/* Waterfalls Chip */}
            <button
              onClick={() => handleChipClick('Waterfalls')}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-md cursor-pointer ${
                selectedCategory === 'Waterfalls'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-emerald-600/30 scale-105 ring-2 ring-amber-400/60'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 hover:scale-105'
              }`}
            >
              <Droplets className="w-3.5 h-3.5 text-teal-300 group-hover:rotate-12 transition-transform" />
              <span>Waterfalls</span>
            </button>

            {/* Hills Chip */}
            <button
              onClick={() => handleChipClick('Hills')}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-md cursor-pointer ${
                selectedCategory === 'Hills'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-emerald-600/30 scale-105 ring-2 ring-amber-400/60'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 hover:scale-105'
              }`}
            >
              <Mountain className="w-3.5 h-3.5 text-emerald-300 group-hover:-translate-y-0.5 transition-transform" />
              <span>Hills</span>
            </button>

            {/* Temples Chip */}
            <button
              onClick={() => handleChipClick('Temples')}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-md cursor-pointer ${
                selectedCategory === 'Temples'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-amber-500/30 scale-105 ring-2 ring-white/60'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 hover:scale-105'
              }`}
            >
              <Landmark className="w-3.5 h-3.5 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>Temples</span>
            </button>

            {/* Beaches Chip */}
            <button
              onClick={() => handleChipClick('Beaches')}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-md cursor-pointer ${
                selectedCategory === 'Beaches'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-sky-500/30 scale-105 ring-2 ring-amber-400/60'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 hover:scale-105'
              }`}
            >
              <Waves className="w-3.5 h-3.5 text-sky-300 group-hover:rotate-12 transition-transform" />
              <span>Beaches</span>
            </button>

            {/* Wildlife Chip */}
            <button
              onClick={() => handleChipClick('Wildlife')}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-md cursor-pointer ${
                selectedCategory === 'Wildlife'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-emerald-600/30 scale-105 ring-2 ring-amber-400/60'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 hover:scale-105'
              }`}
            >
              <Bird className="w-3.5 h-3.5 text-amber-300 group-hover:-translate-y-0.5 transition-transform" />
              <span>Wildlife</span>
            </button>

            {/* Culture Chip */}
            <button
              onClick={() => handleChipClick('Culture')}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-md cursor-pointer ${
                selectedCategory === 'Culture'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-amber-500/30 scale-105 ring-2 ring-white/60'
                  : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 hover:scale-105'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>Culture</span>
            </button>
          </div>
        </div>

        {/* Carousel Slide Switcher Indicator Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-white/15 gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevSlide}
              aria-label="Previous Slide"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentSlideIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === currentSlideIndex
                      ? 'w-8 bg-gradient-to-r from-emerald-400 to-amber-400'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextSlide}
              aria-label="Next Slide"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center sm:text-right">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block">
              {currentSlide.location}
            </span>
            <span className="text-[11px] text-slate-300/80">
              {currentSlide.categoryTag}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
