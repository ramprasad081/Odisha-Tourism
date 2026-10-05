import { useState } from 'react';
import { Calculator, Check, Users, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CostPlanner({ onBookCustomPlan }) {
  const [days, setDays] = useState(4);
  const [guests, setGuests] = useState(2);
  const [travelStyle, setTravelStyle] = useState('luxury'); // 'eco', 'luxury', 'royal'

  const stylesConfig = {
    eco: {
      name: 'Eco-Retreat & Nature Circuit',
      pricePerDayPerPerson: 4200,
      description: 'Forest department eco-cottages in Similipal & Daringbadi with certified nature naturalists.',
      inclusions: ['Eco-cottage stays', 'Safari & Waterfall passes', 'Local organic Odia dining', 'Private SUV for forest trails']
    },
    luxury: {
      name: 'Signature Heritage & Coastal Resort',
      pricePerDayPerPerson: 7500,
      description: '4-star beachfront resort in Puri, boutique heritage stay near Konark, and private air-conditioned cab.',
      inclusions: ['Luxury beachfront suites', 'VIP temple darshan passes', 'Chilika private yacht tour', 'Chauffeur driven sedan / SUV']
    },
    royal: {
      name: 'Royal Palace & Private Expeditions',
      pricePerDayPerPerson: 13500,
      description: 'Heritage royal palaces (Dhenkanal, Aul), private helicopter transfers option, and curated culinary experiences.',
      inclusions: ['Heritage Palace heritage suites', 'Private master art workshops', 'Gourmet royal dining experience', 'Exclusive historian guide']
    }
  };

  const selectedConfig = stylesConfig[travelStyle];
  const totalCost = days * guests * selectedConfig.pricePerDayPerPerson;
  const perPersonCost = days * selectedConfig.pricePerDayPerPerson;

  return (
    <section id="cost-planner" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display mb-4">
            Plan Your <span className="text-emerald-700">Odisha Journey</span> Cost
          </h2>
          <p className="text-slate-600 text-base">
            Transparent travel planning with zero hidden surcharges. Customize your duration, group size, and luxury tier.
          </p>
        </div>

        {/* Planner Box */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Travel Tier Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                1. Select Travel Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { key: 'eco', title: 'Eco-Nature', sub: '₹4,200 / day' },
                  { key: 'luxury', title: 'Luxury Resort', sub: '₹7,500 / day' },
                  { key: 'royal', title: 'Royal Heritage', sub: '₹13,500 / day' },
                ].map((tier) => (
                  <button
                    key={tier.key}
                    type="button"
                    onClick={() => setTravelStyle(tier.key)}
                    className={`p-3.5 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                      travelStyle === tier.key
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">{tier.title}</div>
                    <div className="text-xs font-semibold text-emerald-700 mt-0.5">{tier.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>2. Trip Duration</span>
                </label>
                <span className="text-sm font-extrabold text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                  {days} Days / {days - 1} Nights
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-600 font-semibold mt-1">
                <span>Weekend (2 Days)</span>
                <span>Week (7 Days)</span>
                <span>Grand Tour (12 Days)</span>
              </div>
            </div>

            {/* Travelers Count */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span>3. Number of Travelers</span>
                </label>
                <span className="text-sm font-extrabold text-amber-600 bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200">
                  {guests} {guests === 1 ? 'Guest' : 'Guests'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 4, 6, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setGuests(num)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      guests === num
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {num} {num === 1 ? 'Solo' : num === 2 ? 'Couple' : `${num} Pax`}
                  </button>
                ))}
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Package Includes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedConfig.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card (Right 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase tracking-wider inline-block mb-3">
                Estimated Quotation
              </span>
              <h3 className="text-lg font-bold font-display text-white mb-1">
                {selectedConfig.name}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {selectedConfig.description}
              </p>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs text-slate-300">Total for {guests} {guests > 1 ? 'guests' : 'guest'}</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-display">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Per Person Rate:</span>
                  <span className="font-semibold text-white">₹{perPersonCost.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-emerald-300 mb-6">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Odisha Tourism Approved Rates & Licensed Drivers</span>
              </div>
            </div>

            <button
              onClick={() => onBookCustomPlan({ travelStyle: selectedConfig.name, days, guests, totalCost })}
              className="relative z-10 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400 hover:from-emerald-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <span>Confirm Custom Itinerary</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
