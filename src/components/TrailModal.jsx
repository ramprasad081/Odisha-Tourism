import { useEffect, useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Compass, 
  CheckCircle, 
  Route, 
  ArrowRight,
  Sparkles,
  Share2,
  CheckCircle2,
  Sun,
  Thermometer,
  Sunrise,
  Sunset,
  CloudSun
} from 'lucide-react';

export default function TrailModal({ trail, onClose, onBookTrail }) {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!trail) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-auto max-h-[90vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          <button
            onClick={handleShare}
            aria-label="Share Trail"
            className="p-2 rounded-full bg-white/85 hover:bg-white text-slate-700 backdrop-blur-md shadow-md transition-colors cursor-pointer"
          >
            {copied ? <span className="text-[11px] font-bold text-emerald-600 px-1">Copied!</span> : <Share2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md shadow-md transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Header - Compact Height */}
        <div className="relative h-52 sm:h-64 bg-slate-900 overflow-hidden shrink-0">
          <img
            src={trail.image}
            alt={trail.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm">
                ★ {trail.badge || 'Featured'}
              </span>
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-black/40 backdrop-blur-md border border-white/20">
                <Calendar className="w-3 h-3 text-amber-400" />
                <span>{trail.duration}</span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-black/40 backdrop-blur-md border border-white/20">
                <Route className="w-3 h-3 text-emerald-400" />
                <span>{trail.distance || 'Multi-day Loop'}</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display leading-tight">
              {trail.title}
            </h2>
            <p className="text-xs text-emerald-300 font-semibold mt-0.5">
              Route: {trail.route}
            </p>
          </div>
        </div>

        {/* Scrollable Content - Compact & Clean */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 max-h-[50vh]">
          
          {/* Best Time to Visit & Climate Live Guide */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-emerald-500/5 to-sky-500/10 border border-amber-200/50 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-200/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-600 flex items-center justify-center">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 font-display">
                    Best Time to Visit & Trail Climate
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Seasonal weather, optimal temperature, sunrise & sunset timings
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
                Prime: {trail.bestSeason || 'Oct – Mar'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Season */}
              <div className="p-3 bg-white/80 rounded-xl border border-slate-100 backdrop-blur-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <CloudSun className="w-3 h-3 text-emerald-600" />
                  <span>Season</span>
                </span>
                <p className="font-bold text-xs text-slate-900 mt-1">
                  {trail.bestSeason === 'Nov – Feb' ? 'Winter Mountain Mist' : 'Post-Monsoon & Winter'}
                </p>
              </div>

              {/* Temperature */}
              <div className="p-3 bg-white/80 rounded-xl border border-slate-100 backdrop-blur-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-rose-500" />
                  <span>Temperature</span>
                </span>
                <p className="font-bold text-xs text-slate-900 mt-1">
                  {trail.bestSeason === 'Nov – Feb' ? '6°C - 21°C (Chilly)' : '16°C - 28°C (Pleasant)'}
                </p>
              </div>

              {/* Sunrise */}
              <div className="p-3 bg-white/80 rounded-xl border border-slate-100 backdrop-blur-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <Sunrise className="w-3 h-3 text-amber-500" />
                  <span>Sunrise</span>
                </span>
                <p className="font-bold text-xs text-slate-900 mt-1">
                  05:32 AM - 05:42 AM
                </p>
              </div>

              {/* Sunset */}
              <div className="p-3 bg-white/80 rounded-xl border border-slate-100 backdrop-blur-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <Sunset className="w-3 h-3 text-orange-500" />
                  <span>Sunset</span>
                </span>
                <p className="font-bold text-xs text-slate-900 mt-1">
                  05:28 PM - 05:45 PM
                </p>
              </div>
            </div>
          </div>

          {/* Key Stops Along the Route */}
          {trail.stops && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>Signature Trail Route Waypoints</span>
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                {trail.stops.map((stop, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200/80 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-amber-500" />
                      <span>{stop}</span>
                    </span>
                    {idx < trail.stops.length - 1 && (
                      <span className="text-slate-300 text-xs font-bold">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Day-by-Day Itinerary Explorer */}
          {trail.dayPlan && trail.dayPlan.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold font-display text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>Interactive Day-by-Day Itinerary</span>
                </h4>
                <span className="text-xs text-slate-600 font-semibold">
                  Click day to view schedule
                </span>
              </div>

              {/* Day selection tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {trail.dayPlan.map((d, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDayIndex(index)}
                    className={`p-3 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                      activeDayIndex === index
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <span className="text-[11px] uppercase tracking-wider block opacity-75">{d.day}</span>
                    <span className="text-xs font-bold line-clamp-1">{d.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Day Detail Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-emerald-50/40 border border-emerald-100/80">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-600 text-white uppercase">
                    {trail.dayPlan[activeDayIndex].day}
                  </span>
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base">
                    {trail.dayPlan[activeDayIndex].title}
                  </h5>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {trail.dayPlan[activeDayIndex].desc}
                </p>
              </div>
            </div>
          )}

          {/* Highlights Checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
              Included Signature Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {trail.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="text-lg font-bold font-display text-white">
                  Reserve This Featured Expedition
                </h4>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Custom dates, private air-conditioned vehicle, boutique eco-stays, and licensed heritage guides.
              </p>

              {inquirySent ? (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Expedition Inquiry Sent!</p>
                    <p className="text-xs text-emerald-300">
                      Our Odisha Tourism itinerary specialist will be in touch shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      onClose();
                      onBookTrail(trail);
                    }}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
                  >
                    <span>Customize Itinerary & Dates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <form onSubmit={handleInquirySubmit} className="flex-1 flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your WhatsApp / Phone"
                      className="flex-1 px-3.5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Fast Callback
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
