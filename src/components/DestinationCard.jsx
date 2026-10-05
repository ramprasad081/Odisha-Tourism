import { useMemo } from 'react';
import { 
  Star, 
  MapPin, 
  Heart, 
  ArrowUpRight, 
  Droplets, 
  Mountain, 
  Landmark, 
  Waves, 
  Bird, 
  Sparkles,
  Flame,
  Compass,
  Camera,
  Ticket,
  ZoomIn
} from 'lucide-react';
import { getNearestServices } from '../services/nearbyPlacesService';

const categoryConfig = {
  Waterfalls: {
    bg: 'bg-teal-50 text-teal-700 border-teal-200/60',
    badge: 'from-teal-600 to-emerald-600',
    icon: Droplets,
  },
  Hills: {
    bg: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    badge: 'from-emerald-600 to-teal-700',
    icon: Mountain,
  },
  Temples: {
    bg: 'bg-amber-50 text-amber-800 border-amber-200/60',
    badge: 'from-amber-600 to-amber-500 text-slate-950',
    icon: Landmark,
  },
  Beaches: {
    bg: 'bg-sky-50 text-sky-700 border-sky-200/60',
    badge: 'from-sky-500 to-cyan-600',
    icon: Waves,
  },
  Wildlife: {
    bg: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
    badge: 'from-emerald-700 to-teal-600',
    icon: Bird,
  },
  Culture: {
    bg: 'bg-amber-50 text-amber-900 border-amber-200/60',
    badge: 'from-amber-500 to-yellow-600 text-slate-950',
    icon: Sparkles,
  },
};

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";

export default function DestinationCard({ 
  destination, 
  isWishlisted, 
  onToggleWishlist, 
  onSelect 
}) {
  const config = categoryConfig[destination.category] || categoryConfig.Waterfalls;
  const CategoryIcon = config.icon || Compass;
  const photoCount = (destination.gallery && destination.gallery.length) || 4;
  const nearest = useMemo(() => getNearestServices(destination), [destination]);

  return (
    <div 
      onClick={() => onSelect(destination, 'details')}
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Image Container with Zoom Effect - matching Nearby Explorer style */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
        <img
          src={destination.image}
          alt={destination.title}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = FALLBACK_IMAGE;
          }}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />

        {/* Ambient Top & Bottom Gradients for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/35 pointer-events-none" />

        {/* Top Badges (Category, Hidden Gem/Famous, and Photos Count) */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5">
          {/* Category Tag */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border border-white/80">
            <CategoryIcon className="w-3 h-3 text-emerald-600" />
            <span>{destination.category}</span>
          </span>

          {/* Photos Count Badge */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
            <Camera className="w-3 h-3 text-emerald-400" />
            <span>{photoCount} Photos</span>
          </span>
        </div>

        {/* Wishlist Floating Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(destination);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer ${
            isWishlisted
              ? 'bg-rose-500 text-white scale-110'
              : 'bg-white/85 hover:bg-white text-slate-700 hover:text-rose-500'
          }`}
        >
          <Heart 
            className={`w-4 h-4 transition-transform ${isWishlisted ? 'fill-current' : ''}`} 
          />
        </button>

        {/* Quick View Hint on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/25 backdrop-blur-[1px] pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <ZoomIn className="w-3.5 h-3.5 text-emerald-600" />
            <span>Click to view photos</span>
          </span>
        </div>

        {/* Bottom District & Rating Banner over Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>{destination.district} District</span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full shadow-md">
            <Star className="w-3 h-3 fill-current" />
            <span>{destination.rating}</span>
            <span className="text-[10px] font-medium opacity-80">({destination.reviews})</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Spot Type Badge & Crowd Level */}
          <div className="flex items-center justify-between gap-1 mb-2">
            {destination.isUnderrated ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300/60">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>💎 Hidden Gem</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300/60">
                <Flame className="w-3 h-3 text-red-600" />
                <span>🔥 Famous Landmark</span>
              </span>
            )}
            
            {destination.crowdLevel && (
              <span className="text-[10px] font-semibold text-slate-500 truncate max-w-[130px]">
                🌿 {destination.crowdLevel}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 
            className="text-lg font-bold text-slate-900 font-display group-hover:text-emerald-700 transition-colors line-clamp-1 mb-1.5"
          >
            {destination.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
            {destination.shortDesc}
          </p>

          {/* Tags & Temperature */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            {destination.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/50"
              >
                {tag}
              </span>
            ))}
            {destination.weather?.temperature && (
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-100">
                🌡️ {destination.weather.temperature.split(' ')[0]}
              </span>
            )}
          </div>

          {/* Nearest Hotel & Nearest Hospital Live Preview */}
          <div className="mb-3 p-2 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1 text-[11px]">
            {nearest.nearestHotel && (
              <div className="flex items-center justify-between gap-1 text-slate-700">
                <span className="flex items-center gap-1 font-medium truncate text-slate-600">
                  <span className="text-xs">🏨</span>
                  <span className="truncate">{nearest.nearestHotel.name}</span>
                </span>
                <span className="text-[10px] font-bold text-sky-800 bg-sky-50 px-1.5 py-0.2 rounded border border-sky-200/60 shrink-0">
                  {nearest.nearestHotel.distanceFormatted}
                </span>
              </div>
            )}
            {nearest.nearestHospital && (
              <div className="flex items-center justify-between gap-1 text-slate-700 border-t border-slate-200/50 pt-1">
                <span className="flex items-center gap-1 font-medium truncate text-slate-600">
                  <span className="text-xs">🏥</span>
                  <span className="truncate">{nearest.nearestHospital.name}</span>
                </span>
                <span className="text-[10px] font-bold text-rose-800 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200/60 shrink-0">
                  {nearest.nearestHospital.distanceFormatted}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Card Footer: Matching Nearby Explorer with Booking (Free), Hotels & Hospitals, and Explore */}
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(destination, 'booking');
              }}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs hover:shadow cursor-pointer flex items-center gap-1.5"
              title="Book Tour / Free Pass"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Booking (Free)</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(destination, 'details');
              }}
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
            >
              <span>Explore</span>
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(destination, 'services');
            }}
            className="w-full py-1.5 px-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5 border border-sky-200/60 cursor-pointer"
          >
            <MapPin className="w-3 h-3 text-sky-600" />
            <span>🏨 Nearby Hotels &amp; Hospitals</span>
          </button>
        </div>

      </div>
    </div>
  );
}
