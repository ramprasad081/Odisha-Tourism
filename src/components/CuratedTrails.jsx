import { useState } from 'react';
import { Calendar, ArrowRight, Compass, CheckCircle, Route } from 'lucide-react';
import { CURATED_TRAILS } from '../data/destinations';
import TrailModal from './TrailModal';
import NearbyExplorer from './NearbyExplorer';

export default function CuratedTrails({ onSelectTrail, onSelectDestination, onAddBooking }) {
  const [selectedTrailForModal, setSelectedTrailForModal] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const trailCategories = [
    { id: 'all', label: 'All Featured' },
    { id: 'Highlands & Peaks', label: '⛰️ Mountains & Peaks' },
    { id: 'Waterfalls & Biosphere', label: '💦 Waterfalls & Biosphere' },
    { id: 'Beaches & Coastal Lagoon', label: '🌊 Coastal & Beaches' },
    { id: 'Culture & Spiritual', label: '🛕 Temples & Heritage' }
  ];

  const filteredTrails = filterCategory === 'all'
    ? CURATED_TRAILS
    : CURATED_TRAILS.filter(t => t.category === filterCategory);

  return (
    <section id="featured-trails" className="py-20 bg-gradient-to-b from-white via-slate-50 to-emerald-50/20 relative overflow-hidden">
      {/* Anchor alias */}
      <div id="curated-trails" className="absolute -top-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">Featured</span>
          </h2>
        </div>

        {/* Trail Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {trailCategories.map((cat) => {
            const isSelected = filterCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap shadow-sm cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-amber-300 shadow-md scale-105 ring-2 ring-amber-400/40'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Trail Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTrails.map((trail) => (
            <div
              key={trail.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Cover Image with Zoom Effect */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={trail.image}
                  alt={trail.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30 pointer-events-none" />



                {/* Bottom Route Summary */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-emerald-300 truncate">
                    {trail.category}
                  </span>
                  <span className="text-[11px] text-slate-300 font-medium shrink-0 flex items-center gap-1">
                    <Route className="w-3 h-3 text-amber-400" />
                    {trail.distance}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 line-clamp-1">
                    {trail.title}
                  </h3>

                  {/* Waypoint Route & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded-xl border border-amber-200/50 truncate">
                      <Compass className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">{trail.route}</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-xl shrink-0 flex items-center gap-1 border border-slate-200/60">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      <span>{trail.duration}</span>
                    </span>
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 mb-4">
                    {trail.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedTrailForModal(trail)}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Day Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectTrail(trail)}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-bold transition-colors cursor-pointer"
                    title="Book custom dates"
                  >
                    Book
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Nearby Explorer: Auto-suggests Deomali, Duduma, Gupteswar, Tribal Museum when Koraput is opened */}
        <NearbyExplorer 
          onSelectDestination={onSelectDestination} 
          onAddBooking={onAddBooking}
        />

      </div>

      {/* Featured Trail Detailed Modal */}
      {selectedTrailForModal && (
        <TrailModal
          trail={selectedTrailForModal}
          onClose={() => setSelectedTrailForModal(null)}
          onBookTrail={(t) => {
            setSelectedTrailForModal(null);
            onSelectTrail(t);
          }}
        />
      )}
    </section>
  );
}
