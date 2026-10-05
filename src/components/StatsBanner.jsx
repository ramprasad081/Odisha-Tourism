import { Waves, Droplets, Landmark, Users, Star, Sparkles } from 'lucide-react';
import { QUICK_STATS } from '../data/destinations';

const iconMap = {
  Waves: Waves,
  Droplets: Droplets,
  Landmark: Landmark,
  Users: Users,
  Star: Star,
  Sparkles: Sparkles,
};

export default function StatsBanner() {
  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 border border-white/90 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 divide-y md:divide-y-0 lg:divide-x divide-slate-100">
        {QUICK_STATS.map((stat, idx) => {
          const Icon = iconMap[stat.icon] || Star;
          return (
            <div 
              key={stat.label} 
              className={`flex flex-col items-center text-center ${
                idx !== 0 ? 'pt-4 lg:pt-0 lg:pl-4' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-100 via-emerald-50 to-teal-100 flex items-center justify-center text-emerald-700 mb-3 shadow-inner">
                <Icon className="w-5 h-5 text-emerald-700" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-amber-700 uppercase">
                  {stat.unit}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
