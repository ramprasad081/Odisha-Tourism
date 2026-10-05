import { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Sparkles, 
  Flame, 
  ArrowRight, 
  Compass, 
  MapPin, 
  Users, 
  Eye, 
  Navigation, 
  ShieldCheck, 
  Ticket, 
  Calendar, 
  CheckCircle2, 
  X, 
  User, 
  Phone, 
  Mail, 
  Check, 
  DollarSign, 
  ZoomIn, 
  Camera, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Sun, 
  Mountain, 
  Clock 
} from 'lucide-react';
import { FAMOUS_VS_HIDDEN_PAIRS, DESTINATIONS } from '../data/destinations';
import NearbyServicesSection from './NearbyServicesSection';
import { DESTINATION_COORDINATES, getNearestServices } from '../services/nearbyPlacesService';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85";

export default function FamousVsHiddenGems({ onSelectDestination, onAddBooking }) {
  const [activePairIndex, setActivePairIndex] = useState(0);

  // Modal State for Selected Spot (Famous, Hidden, or Twin)
  const [modalPlace, setModalPlace] = useState(null);
  const [modalTab, setModalTab] = useState('details'); // 'details' | 'services' | 'booking'
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false); // Full-screen Lightbox
  const [bookingSpotType, setBookingSpotType] = useState('hidden'); // 'famous' | 'hidden' | 'twin'
  const modalBodyRef = useRef(null);

  useEffect(() => {
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
  }, [modalTab, modalPlace]);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
    guests: 2,
    packageType: 'Hidden Gem Eco-Resort Stay'
  });
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [inlineSpot, setInlineSpot] = useState(null); // 'famous' | 'hidden' | null

  const currentPair = FAMOUS_VS_HIDDEN_PAIRS[activePairIndex] || FAMOUS_VS_HIDDEN_PAIRS[0];

  // Available tour packages - 100% Free
  const TOUR_PACKAGES = [
    {
      id: 'day-excursion',
      name: 'Scenic Day Excursion & Guide',
      price: 0,
      badge: '100% Free Pass',
      desc: 'Expert local naturalist guide, circuit AC transit & permits.'
    },
    {
      id: 'eco-resort',
      name: 'Hidden Gem Eco-Resort Stay',
      price: 0,
      badge: '⭐ Free Reservation',
      desc: 'Comfortable eco-cottage stay, sunrise trek & authentic Odia meals.'
    },
    {
      id: 'twin-circuit',
      name: 'Twin-Spot Dual Safari (Visit Both)',
      price: 0,
      badge: 'Free Dual Pass',
      desc: 'Combined itinerary covering both the Famous Landmark and Hidden Gem twin.'
    }
  ];

  const guestsCount = Number(bookingForm.guests) || 2;

  // Helper to build full rich destination object with gallery
  const getFullDestination = (spot, type = 'hidden') => {
    if (!spot) return null;
    const found = DESTINATIONS.find(d => d.id === spot.id);
    const photos = found && found.gallery && found.gallery.length > 0 ? found.gallery : [
      spot.image,
      `${spot.image}&auto=format&fit=crop&w=1200&q=85`,
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
    ].filter(Boolean);

    const coords = (found && found.coordinates) || 
                   (spot.coordinates) || 
                   (DESTINATION_COORDINATES[spot.id] ? { lat: DESTINATION_COORDINATES[spot.id].lat, lng: DESTINATION_COORDINATES[spot.id].lng } : null) ||
                   (currentPair?.famous ? getDestinationCoordinates(currentPair.famous) : null);

    return {
      id: spot.id,
      title: spot.title,
      district: spot.district || (found && found.district) || currentPair.famous.district,
      category: spot.category || (found && found.category) || 'Scenic Wonder',
      rating: (found && found.rating) || 4.8,
      reviews: (found && found.reviews) || 940,
      image: spot.image,
      gallery: photos,
      badgeText: spot.badgeText || (type === 'twin' ? 'Twin Circuit Expedition' : type === 'hidden' ? '💎 Hidden Gem' : '🔥 Famous Landmark'),
      crowdLevel: spot.crowdLevel || (type === 'hidden' ? 'Peaceful & Uncrowded' : 'High Footfall'),
      feature: spot.feature || (found && found.fullDesc) || (found && found.shortDesc),
      bestTime: (found && found.bestTime) || 'October to March',
      entryFee: (found && found.entryFee) || 'Free Entry / Eco Pass',
      altitude: (found && found.altitude) || 'Scenic Terrain',
      reasonToVisitTwin: currentPair.reasonToVisitTwin,
      distanceBetween: currentPair.distanceBetween,
      isUnderrated: type === 'hidden' || type === 'twin',
      coordinates: coords
    };
  };

  const famousNearest = useMemo(() => {
    return getNearestServices(getFullDestination(currentPair.famous, 'famous'));
  }, [currentPair]);

  const hiddenNearest = useMemo(() => {
    return getNearestServices(getFullDestination(currentPair.hidden, 'hidden'));
  }, [currentPair]);

  // Open the place modal with specific tab
  const handleOpenPlace = (spot, initialTab = 'details', type = 'hidden') => {
    const full = getFullDestination(spot, type);
    setModalPlace(full);
    setModalTab(initialTab);
    setBookingSpotType(type);
    setActivePhotoIdx(0);
    setIsZoomed(false);
    setConfirmedBooking(null);
    setBookingForm({
      name: '',
      phone: '',
      email: '',
      date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      guests: 2,
      packageType: type === 'twin' ? 'Twin-Spot Dual Safari (Visit Both)' : 'Hidden Gem Eco-Resort Stay'
    });
  };

  // Close modal on Escape & arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else if (modalPlace) {
          setModalPlace(null);
        }
      } else if (modalPlace && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        const photos = modalPlace.gallery && modalPlace.gallery.length > 0 ? modalPlace.gallery : [modalPlace.image];
        if (photos.length > 1) {
          if (e.key === 'ArrowLeft') {
            setActivePhotoIdx((prev) => (prev - 1 + photos.length) % photos.length);
          } else {
            setActivePhotoIdx((prev) => (prev + 1) % photos.length);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalPlace, isZoomed]);

  // Booking submit handler
  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!modalPlace) return;

    const refCode = `#OD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newBookingData = {
      id: `booking-pair-${Date.now()}`,
      refId: refCode,
      destinationId: modalPlace.id,
      destinationTitle: modalPlace.title,
      district: modalPlace.district || currentPair.famous.district,
      category: modalPlace.category || 'Curated Exploration',
      image: modalPlace.image,
      isUnderrated: modalPlace.isUnderrated,
      date: bookingForm.date || new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      guests: guestsCount,
      travelerName: bookingForm.name || 'Explorer Guest',
      phone: bookingForm.phone || '+91 98765 43210',
      email: bookingForm.email || 'traveler@odisha.com',
      packageStyle: bookingForm.packageType,
      totalCost: 0,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    if (onAddBooking) {
      onAddBooking(newBookingData);
    }
    setConfirmedBooking(newBookingData);
  };

  const handleOpenDestinationLore = (destId) => {
    const found = DESTINATIONS.find(d => d.id === destId);
    if (found && onSelectDestination) {
      setModalPlace(null);
      onSelectDestination(found);
    }
  };

  return (
    <section id="hidden-gems" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-amber-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Famous Places vs. Underrated Locations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white">
            Beyond the Crowds:{' '}
            <span className="bg-gradient-to-r from-amber-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Odisha's Hidden Twins
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Visiting Odisha's iconic tourist spots? Don&apos;t miss these serene, crowd-free alternate locations right around the corner with untouched beauty.
          </p>
        </div>

        {/* Pair Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {FAMOUS_VS_HIDDEN_PAIRS.map((pair, idx) => {
            const isSelected = idx === activePairIndex;
            return (
              <button
                key={pair.id}
                onClick={() => setActivePairIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-md ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold scale-105 ring-2 ring-amber-300 shadow-emerald-500/20'
                    : 'bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10 hover:text-white'
                }`}
              >
                <span>{pair.theme}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-black/20 text-slate-950' : 'bg-white/10 text-slate-400'}`}>
                  Pair #{idx + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Card Container */}
        <div className="bg-slate-900/90 rounded-3xl border border-white/15 p-5 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          {/* Pair Header Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  {currentPair.famous.title} <span className="text-amber-400 font-normal">↔</span> {currentPair.hidden.title}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{currentPair.distanceBetween}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => handleOpenPlace({
                  id: `twin-${currentPair.id}`,
                  title: `${currentPair.famous.title} & ${currentPair.hidden.title} (Twin Circuit)`,
                  district: currentPair.famous.district,
                  category: currentPair.famous.category,
                  image: currentPair.hidden.image,
                  badgeText: 'Curated Twin Circuit',
                  feature: `Dual expedition covering both ${currentPair.famous.title} and its secluded twin ${currentPair.hidden.title} (${currentPair.distanceBetween}). ${currentPair.reasonToVisitTwin}`
                }, 'services', 'twin')}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>🏨 Circuit Hotels &amp; Hospitals</span>
              </button>

              <button
                type="button"
                onClick={() => handleOpenPlace({
                  id: `twin-${currentPair.id}`,
                  title: `${currentPair.famous.title} & ${currentPair.hidden.title} (Twin Circuit)`,
                  district: currentPair.famous.district,
                  category: currentPair.famous.category,
                  image: currentPair.hidden.image,
                  badgeText: 'Curated Twin Circuit',
                  feature: `Dual expedition covering both ${currentPair.famous.title} and its secluded twin ${currentPair.hidden.title} (${currentPair.distanceBetween}). ${currentPair.reasonToVisitTwin}`
                }, 'booking', 'twin')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-black transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer hover:scale-105"
              >
                <Ticket className="w-3.5 h-3.5 text-slate-950" />
                <span>⚡ Book Twin Circuit (Visit Both - Free)</span>
              </button>
            </div>
          </div>

          {/* Side by Side Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* LEFT COLUMN: FAMOUS PLACE */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-800/80 to-slate-900/90 rounded-2xl border border-amber-500/30 p-5 flex flex-col justify-between relative overflow-hidden group">
              {/* Subtle top amber glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>Famous Iconic Spot</span>
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {currentPair.famous.district}
                  </span>
                </div>

                {/* Photo with Overlay - Clickable to Open Modal */}
                <div 
                  onClick={() => handleOpenPlace(currentPair.famous, 'details', 'famous')}
                  className="relative h-56 sm:h-64 rounded-2xl overflow-hidden mb-4 bg-slate-950 cursor-pointer shadow-md"
                  title="Click to view large images & lore"
                >
                  <img
                    src={currentPair.famous.image}
                    alt={currentPair.famous.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_IMAGE;
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20 pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                      <Camera className="w-3 h-3 text-amber-400" />
                      <span>Photos &amp; Lore</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
                    <span className="text-amber-200 font-semibold truncate">
                      {currentPair.famous.badgeText}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-rose-500/80 text-white text-[10px] font-bold">
                      {currentPair.famous.crowdLevel}
                    </span>
                  </div>
                  
                  {/* Hover hint */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-950 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5 text-amber-600" />
                      <span>Click to view photos &amp; details</span>
                    </span>
                  </div>
                </div>

                {/* Title & Desc */}
                <h4 className="text-xl font-bold font-display text-white mb-1.5">
                  {currentPair.famous.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {currentPair.famous.feature}
                </p>

                {/* Footfall Tag */}
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 mb-3 flex items-center gap-2 text-xs text-slate-400">
                  <Users className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>High traveler footfall, lively markets & guided circuits.</span>
                </div>

                {/* Nearest Hotel & Nearest Hospital Live Preview */}
                <div className="mb-4 p-2.5 rounded-xl bg-slate-950/70 border border-white/10 space-y-1.5 text-xs">
                  {famousNearest.nearestHotel && (
                    <div className="flex items-center justify-between gap-2 text-slate-300">
                      <span className="flex items-center gap-1.5 font-medium truncate text-slate-200">
                        <span className="text-xs">🏨</span>
                        <span className="truncate">{famousNearest.nearestHotel.name}</span>
                      </span>
                      <span className="text-[10px] font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30 shrink-0">
                        {famousNearest.nearestHotel.distanceFormatted}
                      </span>
                    </div>
                  )}
                  {famousNearest.nearestHospital && (
                    <div className="flex items-center justify-between gap-2 text-slate-300 border-t border-white/5 pt-1.5">
                      <span className="flex items-center gap-1.5 font-medium truncate text-slate-200">
                        <span className="text-xs">🏥</span>
                        <span className="truncate">{famousNearest.nearestHospital.name}</span>
                      </span>
                      <span className="text-[10px] font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30 shrink-0">
                        {famousNearest.nearestHospital.distanceFormatted}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions: Primary Explore & Book + Secondary Details */}
              <div className="space-y-2 mt-2">
                <button
                  type="button"
                  onClick={() => handleOpenPlace(currentPair.famous, 'booking', 'famous')}
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-[1.02]"
                >
                  <Ticket className="w-4 h-4 text-slate-950" />
                  <span>Explore &amp; Book Famous Spot (Free)</span>
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenPlace(currentPair.famous, 'details', 'famous')}
                    className="py-2 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer border border-white/10"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-300" />
                    <span>View Lore</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenPlace(currentPair.famous, 'services', 'famous')}
                    className="py-2 px-2.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer border border-sky-500/30"
                  >
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>Hotels &amp; Care</span>
                  </button>
                </div>
              </div>
            </div>

            {/* MIDDLE COLUMN: CONNECTOR & REASON */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-center p-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 p-[2px] shadow-lg mb-3">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-amber-300 font-bold text-xs">
                  VS
                </div>
              </div>
              <div className="hidden lg:block w-[1px] h-16 bg-gradient-to-b from-amber-400/50 to-emerald-400/50 my-2" />
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-slate-300 leading-relaxed max-w-xs">
                <p className="font-bold text-emerald-300 mb-1">Why Travel to the Twin?</p>
                <p>{currentPair.reasonToVisitTwin}</p>
              </div>
            </div>

            {/* RIGHT COLUMN: HIDDEN UNDERRATED GEM */}
            <div className="lg:col-span-5 bg-gradient-to-b from-emerald-950/40 via-slate-900/90 to-slate-900/90 rounded-2xl border border-emerald-500/40 p-5 flex flex-col justify-between relative overflow-hidden group shadow-lg shadow-emerald-950/20">
              {/* Top green emerald glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                    <span>💎 Underrated Hidden Gem</span>
                  </span>
                  <span className="text-[11px] font-medium text-emerald-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {currentPair.hidden.district}
                  </span>
                </div>

                {/* Photo with Overlay - Clickable to Open Modal */}
                <div 
                  onClick={() => handleOpenPlace(currentPair.hidden, 'details', 'hidden')}
                  className="relative h-56 sm:h-64 rounded-2xl overflow-hidden mb-4 bg-slate-950 cursor-pointer shadow-md"
                  title="Click to view large images & lore"
                >
                  <img
                    src={currentPair.hidden.image}
                    alt={currentPair.hidden.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_IMAGE;
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20 pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                      <Camera className="w-3 h-3 text-emerald-400" />
                      <span>Photos &amp; Lore</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
                    <span className="text-emerald-300 font-semibold truncate">
                      {currentPair.hidden.badgeText}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/90 text-slate-950 text-[10px] font-extrabold">
                      {currentPair.hidden.crowdLevel}
                    </span>
                  </div>

                  {/* Hover hint */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-950 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Click to view photos &amp; details</span>
                    </span>
                  </div>
                </div>

                {/* Title & Desc */}
                <h4 className="text-xl font-bold font-display text-white mb-1.5 flex items-center gap-2">
                  <span>{currentPair.hidden.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                    Off-Beat
                  </span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {currentPair.hidden.feature}
                </p>

                {/* Benefits Tag */}
                <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/20 mb-3 flex items-center gap-2 text-xs text-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero tourist rush, pristine photography, and pure calm.</span>
                </div>

                {/* Nearest Hotel & Nearest Hospital Live Preview */}
                <div className="mb-4 p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 space-y-1.5 text-xs">
                  {hiddenNearest.nearestHotel && (
                    <div className="flex items-center justify-between gap-2 text-slate-300">
                      <span className="flex items-center gap-1.5 font-medium truncate text-emerald-200">
                        <span className="text-xs">🏨</span>
                        <span className="truncate">{hiddenNearest.nearestHotel.name}</span>
                      </span>
                      <span className="text-[10px] font-bold text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30 shrink-0">
                        {hiddenNearest.nearestHotel.distanceFormatted}
                      </span>
                    </div>
                  )}
                  {hiddenNearest.nearestHospital && (
                    <div className="flex items-center justify-between gap-2 text-slate-300 border-t border-emerald-500/10 pt-1.5">
                      <span className="flex items-center gap-1.5 font-medium truncate text-emerald-200">
                        <span className="text-xs">🏥</span>
                        <span className="truncate">{hiddenNearest.nearestHospital.name}</span>
                      </span>
                      <span className="text-[10px] font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30 shrink-0">
                        {hiddenNearest.nearestHospital.distanceFormatted}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions: Primary Explore & Book + Secondary Details */}
              <div className="space-y-2 mt-2">
                <button
                  type="button"
                  onClick={() => handleOpenPlace(currentPair.hidden, 'booking', 'hidden')}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-700/30 hover:scale-[1.02]"
                >
                  <Ticket className="w-4 h-4 text-slate-950" />
                  <span>Explore &amp; Book This Hidden Gem (Free)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenPlace(currentPair.hidden, 'details', 'hidden')}
                    className="py-2 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-300 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer border border-emerald-500/20"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>View Lore</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenPlace(currentPair.hidden, 'services', 'hidden')}
                    className="py-2 px-2.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer border border-sky-500/30"
                  >
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>Hotels &amp; Care</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* On-Page Quick Hotel & Hospital Explorer Bar for this Pair */}
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                🏨
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">
                  Compare Nearby Hotels &amp; Hospitals for this Pair
                </h4>
                <p className="text-xs text-slate-400">
                  Select either the famous spot or hidden gem to see live stays, healthcare, and interactive map below
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setInlineSpot(inlineSpot === 'famous' ? null : 'famous')}
                className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  inlineSpot === 'famous'
                    ? 'bg-amber-400 text-slate-950 font-black shadow-lg scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-400/30'
                }`}
              >
                <span>🔥 Around {currentPair.famous.title}</span>
                {inlineSpot === 'famous' && <Check className="w-3.5 h-3.5 text-slate-950" />}
              </button>

              <button
                type="button"
                onClick={() => setInlineSpot(inlineSpot === 'hidden' ? null : 'hidden')}
                className={`flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  inlineSpot === 'hidden'
                    ? 'bg-emerald-400 text-slate-950 font-black shadow-lg scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-emerald-300 border border-emerald-400/30'
                }`}
              >
                <span>💎 Around {currentPair.hidden.title}</span>
                {inlineSpot === 'hidden' && <Check className="w-3.5 h-3.5 text-slate-950" />}
              </button>
            </div>
          </div>

          {/* On-Page Nearby Services Panel */}
          {inlineSpot && (
            <div className="mt-6 p-4 sm:p-6 bg-white rounded-3xl border border-slate-200/80 shadow-2xl animate-fade-in text-slate-900">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${inlineSpot === 'famous' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-800'}`}>
                      {inlineSpot === 'famous' ? '🔥 Famous Landmark' : '💎 Hidden Gem'}
                    </span>
                    <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-display">
                      Nearby Hotels &amp; Hospitals: {inlineSpot === 'famous' ? currentPair.famous.title : currentPair.hidden.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Live dynamic results calculated for {inlineSpot === 'famous' ? currentPair.famous.title : currentPair.hidden.title} ({currentPair[inlineSpot].district} District)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setInlineSpot(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  title="Close Stays & Hospitals View"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <NearbyServicesSection
                destination={getFullDestination(inlineSpot === 'famous' ? currentPair.famous : currentPair.hidden, inlineSpot)}
                onBookHotel={(hotelBooking) => {
                  if (onAddBooking) {
                    const destObj = getFullDestination(inlineSpot === 'famous' ? currentPair.famous : currentPair.hidden, inlineSpot);
                    onAddBooking({
                      id: `hotel-${Date.now()}`,
                      refId: hotelBooking.bookingId,
                      destinationId: destObj.id,
                      destinationTitle: destObj.title,
                      district: destObj.district,
                      category: 'Hotel Reservation',
                      image: hotelBooking.hotelImage,
                      isUnderrated: destObj.isUnderrated,
                      date: hotelBooking.checkIn,
                      guests: Number(hotelBooking.guests) || 2,
                      travelerName: hotelBooking.name,
                      email: hotelBooking.email,
                      phone: hotelBooking.phone,
                      packageStyle: `${hotelBooking.hotelName} (${hotelBooking.roomType})`,
                      totalCost: 0,
                      status: 'Confirmed',
                      createdAt: new Date().toISOString()
                    });
                  }
                }}
              />
            </div>
          )}

          {/* Bottom Quick Switcher Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <span className="font-medium">
              Explore all {FAMOUS_VS_HIDDEN_PAIRS.length} curated pairs of Famous Spots &amp; Underrated Locations
            </span>
            <div className="flex items-center gap-1.5">
              {FAMOUS_VS_HIDDEN_PAIRS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePairIndex(i)}
                  aria-label={`Go to pair ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === activePairIndex 
                      ? 'w-6 bg-gradient-to-r from-emerald-400 to-amber-400' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Place & Booking Modal (Just like Nearby Explorer!) */}
      {modalPlace && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in text-slate-900">
          {/* Backdrop */}
          <div 
            className="fixed inset-0"
            onClick={() => setModalPlace(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl lg:max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-auto max-h-[94vh] flex flex-col">
            
            {/* Modal Header Bar with Big Cinematic Photo Gallery */}
            {(() => {
              const photos = modalPlace.gallery && modalPlace.gallery.length > 0 ? modalPlace.gallery : [modalPlace.image];
              return (
                <div className="relative h-72 sm:h-80 md:h-96 lg:h-[420px] bg-slate-950 overflow-hidden shrink-0 group">
                  <img
                    src={photos[activePhotoIdx] || modalPlace.image}
                    alt={`${modalPlace.title} view ${activePhotoIdx + 1}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_IMAGE;
                    }}
                    onClick={() => setIsZoomed(true)}
                    className="w-full h-full object-cover transition-all duration-500 cursor-pointer group-hover:scale-105"
                    title="Click photo to enlarge full-screen"
                  />
                  <div 
                    onClick={() => setIsZoomed(true)}
                    className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-black/35 cursor-pointer" 
                  />

                  {/* Top Bar Actions: Enlarge Button, Photo Counter & Close */}
                  <div className="absolute top-3 left-3 sm:left-4 z-20 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsZoomed(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 text-xs font-semibold transition-all cursor-pointer shadow-md hover:scale-105"
                      title="Enlarge photo"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                      <span>Click Photo to Enlarge</span>
                    </button>
                    {photos.length > 1 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-white border border-white/20 text-xs font-bold">
                        <Camera className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{activePhotoIdx + 1} / {photos.length}</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 sm:right-4 z-20 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsZoomed(true)}
                      className="p-2.5 rounded-full bg-black/65 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer hidden sm:flex items-center justify-center shadow-md hover:scale-105"
                      title="Full screen view"
                      aria-label="Full screen view"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalPlace(null)}
                      className="p-2.5 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer shadow-md hover:scale-105"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Left & Right Navigation Arrows */}
                  {photos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhotoIdx((prev) => (prev - 1 + photos.length) % photos.length);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-20 shadow-md hover:scale-105"
                        aria-label="Previous Photo"
                      >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhotoIdx((prev) => (prev + 1) % photos.length);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-20 shadow-md hover:scale-105"
                        aria-label="Next Photo"
                      >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </>
                  )}

                  {/* Header Details Overlay & Bottom Thumbnail Strip */}
                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                      {bookingSpotType === 'twin' ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm">
                          ⚡ Twin Circuit Expedition
                        </span>
                      ) : modalPlace.isUnderrated ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-slate-950 shadow-sm">
                          💎 Hidden Gem
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 shadow-sm">
                          🔥 Famous Landmark
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                        {modalPlace.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-black/40 text-amber-300">
                        📍 {modalPlace.district} District
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                        ★ {modalPlace.rating}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white drop-shadow-md">
                          {modalPlace.title}
                        </h3>
                        <p className="text-xs text-slate-300 hidden sm:block mt-0.5">
                          {modalPlace.distanceBetween ? `↔ ${modalPlace.distanceBetween}` : 'Click image or thumbnails below to see big high-resolution views'}
                        </p>
                      </div>

                      {/* Clickable thumbnail strip in the hero bar */}
                      {photos.length > 1 && (
                        <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar shrink-0">
                          {photos.map((photo, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActivePhotoIdx(idx);
                              }}
                              className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 shadow-sm ${
                                activePhotoIdx === idx
                                  ? 'border-amber-400 scale-105 ring-2 ring-amber-400/50'
                                  : 'border-white/50 opacity-70 hover:opacity-100 hover:border-white'
                              }`}
                            >
                              <img
                                src={photo}
                                alt={`Thumbnail ${idx + 1}`}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = FALLBACK_IMAGE;
                                }}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Modal Tabs Navigation: Details vs Hotels/Hospitals vs Free Booking */}
            <div className="flex border-b border-slate-100 bg-slate-50/80 px-4 pt-2 shrink-0 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setModalTab('details')}
                className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  modalTab === 'details'
                    ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-xl shadow-xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>📖 Place Overview &amp; Lore</span>
              </button>

              <button
                type="button"
                onClick={() => setModalTab('services')}
                className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  modalTab === 'services'
                    ? 'border-sky-600 text-sky-800 bg-white rounded-t-xl shadow-xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>🏨 Nearby Hotels &amp; Hospitals</span>
                <span className="px-1.5 py-0.2 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold ml-1">
                  Live Map
                </span>
              </button>

              <button
                type="button"
                onClick={() => setModalTab('booking')}
                className={`flex items-center gap-1.5 py-2.5 px-4 font-bold text-xs border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  modalTab === 'booking'
                    ? 'border-emerald-600 text-emerald-800 bg-white rounded-t-xl shadow-xs'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Ticket className="w-3.5 h-3.5 text-emerald-600" />
                <span>🎫 Plan &amp; Book Tour</span>
                <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold ml-1">
                  100% Free
                </span>
              </button>
            </div>

            {/* Modal Body */}
            <div ref={modalBodyRef} className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 max-h-[60vh]">
              
              {modalTab === 'details' ? (
                /* TAB 1: Place Overview, Highlights, Scenic Photos & Lore */
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Highlight card */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Curated Twin Comparison &amp; Highlight</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {modalPlace.feature}
                    </p>
                  </div>

                  {/* Fact Badges Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Crowd Footfall</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="truncate">{modalPlace.crowdLevel}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Twin Distance</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                        <Navigation className="w-3.5 h-3.5 text-amber-600" />
                        <span className="truncate">{modalPlace.distanceBetween || 'Connected Circuit'}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Entry Pass</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="truncate">{modalPlace.entryFee || 'Free Entry / Pass'}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Best Season</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                        <Sun className="w-3.5 h-3.5 text-amber-500" />
                        <span className="truncate">{modalPlace.bestTime || 'Oct to Mar'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Photo Gallery Grid - Bigger Preview of all scenic angles */}
                  {(() => {
                    const photos = modalPlace.gallery && modalPlace.gallery.length > 0 ? modalPlace.gallery : [modalPlace.image];
                    if (photos.length <= 1) return null;
                    return (
                      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                            <Camera className="w-4 h-4 text-emerald-600" />
                            <span>Photo Gallery &amp; Scenic Angles ({photos.length} High-Res Images)</span>
                          </h4>
                          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/50">
                            Click any image to enlarge
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {photos.map((photo, idx) => (
                            <div
                              key={idx}
                              onClick={() => {
                                setActivePhotoIdx(idx);
                                setIsZoomed(true);
                              }}
                              className={`group/img relative h-28 sm:h-36 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all shadow-xs hover:shadow-md ${
                                activePhotoIdx === idx
                                  ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                                  : 'border-slate-200 hover:border-emerald-400'
                              }`}
                            >
                              <img
                                src={photo}
                                alt={`${modalPlace.title} angle ${idx + 1}`}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = FALLBACK_IMAGE;
                                }}
                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="p-2 rounded-full bg-black/60 text-white backdrop-blur-xs flex items-center gap-1 text-[11px] font-bold">
                                  <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                                  <span>Enlarge</span>
                                </span>
                              </div>
                              <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] font-mono font-bold text-white">
                                #{idx + 1}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Why Visit Lore */}
                  {modalPlace.reasonToVisitTwin && (
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs text-slate-700 leading-relaxed space-y-1.5">
                      <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-amber-600" />
                        <span>Why Pair These Two Destinations Together?</span>
                      </h5>
                      <p className="font-medium text-slate-800">
                        {modalPlace.reasonToVisitTwin}
                      </p>
                    </div>
                  )}

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setModalTab('booking')}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Book Free Tour Experience →</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalTab('services')}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-sky-200/80"
                    >
                      <MapPin className="w-3.5 h-3.5 text-sky-600" />
                      <span>Jump to Hotels &amp; Hospitals Map</span>
                    </button>
                  </div>

                  {/* Dynamic Nearby Hotels, Emergency Hospitals & Live Map */}
                  <div className="pt-4 border-t border-slate-200">
                    <NearbyServicesSection
                      destination={modalPlace}
                      onBookHotel={(hotelBooking) => {
                        if (onAddBooking) {
                          onAddBooking({
                            id: `hotel-${Date.now()}`,
                            refId: hotelBooking.bookingId,
                            destinationId: modalPlace.id,
                            destinationTitle: modalPlace.title,
                            district: modalPlace.district,
                            category: 'Hotel Reservation',
                            image: hotelBooking.hotelImage,
                            isUnderrated: modalPlace.isUnderrated,
                            date: hotelBooking.checkIn,
                            guests: Number(hotelBooking.guests) || 2,
                            travelerName: hotelBooking.name,
                            email: hotelBooking.email,
                            phone: hotelBooking.phone,
                            packageStyle: `${hotelBooking.hotelName} (${hotelBooking.roomType})`,
                            totalCost: 0,
                            status: 'Confirmed',
                            createdAt: new Date().toISOString()
                          });
                        }
                      }}
                    />
                  </div>

                </div>
              ) : modalTab === 'services' ? (
                /* TAB 2: Dynamic Nearby Hotels, Emergency Hospitals & Live Map */
                <div className="space-y-4 animate-fade-in">
                  <NearbyServicesSection
                    destination={modalPlace}
                    onBookHotel={(hotelBooking) => {
                      if (onAddBooking) {
                        onAddBooking({
                          id: `hotel-${Date.now()}`,
                          refId: hotelBooking.bookingId,
                          destinationId: modalPlace.id,
                          destinationTitle: modalPlace.title,
                          district: modalPlace.district,
                          category: 'Hotel Reservation',
                          image: hotelBooking.hotelImage,
                          isUnderrated: modalPlace.isUnderrated,
                          date: hotelBooking.checkIn,
                          guests: Number(hotelBooking.guests) || 2,
                          travelerName: hotelBooking.name,
                          email: hotelBooking.email,
                          phone: hotelBooking.phone,
                          packageStyle: `${hotelBooking.hotelName} (${hotelBooking.roomType})`,
                          totalCost: 0,
                          status: 'Confirmed',
                          createdAt: new Date().toISOString()
                        });
                      }
                    }}
                  />
                </div>
              ) : (
                /* TAB 3: Free Interactive Reservation Flow */
                <div className="space-y-4 animate-fade-in">
                  
                  {confirmedBooking ? (
                    /* Booking Confirmation Screen */
                    <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 animate-fade-in text-slate-900">
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-extrabold text-base text-slate-900 font-display">
                              Reservation Confirmed!
                            </h4>
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-mono font-extrabold text-xs">
                              {confirmedBooking.refId}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Thank you, <strong className="text-slate-900">{confirmedBooking.travelerName}</strong>! Your tour for <strong className="text-emerald-800">{modalPlace.title}</strong> has been secured and logged into your Bookings ledger.
                          </p>

                          <div className="mt-3.5 pt-3 border-t border-emerald-200/60 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                            <div className="p-2 bg-white rounded-xl border border-slate-100">
                              <span className="text-[10px] text-slate-400 block uppercase">Package</span>
                              <span className="font-bold text-slate-800 truncate block">{confirmedBooking.packageStyle}</span>
                            </div>
                            <div className="p-2 bg-white rounded-xl border border-slate-100">
                              <span className="text-[10px] text-slate-400 block uppercase">Date</span>
                              <span className="font-bold text-slate-800">{confirmedBooking.date}</span>
                            </div>
                            <div className="p-2 bg-white rounded-xl border border-slate-100">
                              <span className="text-[10px] text-slate-400 block uppercase">Travelers</span>
                              <span className="font-bold text-slate-800">{confirmedBooking.guests} Guests</span>
                            </div>
                            <div className="p-2 bg-white rounded-xl border border-slate-100">
                              <span className="text-[10px] text-slate-400 block uppercase">Total Cost</span>
                              <span className="font-bold text-emerald-700">FREE (₹0)</span>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setConfirmedBooking(null)}
                              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                            >
                              Book Another Package
                            </button>
                            <button
                              type="button"
                              onClick={() => setModalPlace(null)}
                              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer"
                            >
                              Done &amp; Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Booking Form */
                    <form onSubmit={handleConfirmBooking} className="space-y-4">
                      
                      {/* Package Selection */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          1. Select Experience Package
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {TOUR_PACKAGES.map((pkg) => {
                            const isSelected = bookingForm.packageType === pkg.name;
                            return (
                              <div
                                key={pkg.id}
                                onClick={() => setBookingForm({ ...bookingForm, packageType: pkg.name })}
                                className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                                  isSelected
                                    ? 'bg-emerald-50/90 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                                    : 'bg-white hover:bg-slate-50 border-slate-200'
                                }`}
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900">
                                      {pkg.badge}
                                    </span>
                                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                                  </div>
                                  <h5 className="font-bold text-xs text-slate-900 leading-snug">
                                    {pkg.name}
                                  </h5>
                                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                                    {pkg.desc}
                                  </p>
                                </div>
                                <div className="mt-2 pt-2 border-t border-slate-100 flex items-baseline justify-between">
                                  <span className="text-[10px] text-slate-500 font-semibold">Booking Fee</span>
                                  <span className="font-bold text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                                    FREE (₹0)
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Date & Guests Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            2. Travel Date
                          </label>
                          <div className="relative">
                            <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="date"
                              required
                              value={bookingForm.date}
                              onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            3. Number of Travelers
                          </label>
                          <div className="relative">
                            <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <select
                              value={bookingForm.guests}
                              onChange={(e) => setBookingForm({ ...bookingForm, guests: Number(e.target.value) })}
                              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                            >
                              {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                                <option key={n} value={n}>{n} Traveler{n > 1 ? 's' : ''}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          4. Lead Traveler Contact
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          <div className="relative">
                            <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="text"
                              required
                              placeholder="Full Name"
                              value={bookingForm.name}
                              onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                              className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                          </div>

                          <div className="relative">
                            <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="tel"
                              required
                              placeholder="Phone Number"
                              value={bookingForm.phone}
                              onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                              className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                          </div>

                          <div className="relative">
                            <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="email"
                              required
                              placeholder="Email Address"
                              value={bookingForm.email}
                              onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                              className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Pricing Summary & Confirmation Button */}
                      <div className="p-3.5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-300">Total Booking Price:</span>
                            <span className="text-lg font-extrabold text-emerald-400 font-mono">
                              FREE (₹0)
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                              Zero Cost
                            </span>
                          </div>
                          <p className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                            <ShieldCheck className="w-3 h-3" /> 100% Free Booking • No payment required • Instant confirmation pass
                          </p>
                        </div>

                        <button
                          type="submit"
                          className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <Ticket className="w-3.5 h-3.5" />
                          <span>Confirm Free Reservation</span>
                        </button>
                      </div>

                    </form>
                  )}

                </div>
              )}

            </div>

          </div>
        </div>
      )}

      {/* Fullscreen High-Resolution Lightbox Modal for Famous vs Hidden Images */}
      {isZoomed && modalPlace && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 animate-fade-in text-white"
          onClick={() => setIsZoomed(false)}
        >
          {/* Lightbox Top Header */}
          <div className="flex items-center justify-between text-white z-20 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                {modalPlace.title}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                {modalPlace.district} District • {modalPlace.distanceBetween || 'Scenic Wonder'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {(() => {
                const photos = modalPlace.gallery && modalPlace.gallery.length > 0 ? modalPlace.gallery : [modalPlace.image];
                return (
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                    {activePhotoIdx + 1} / {photos.length}
                  </span>
                );
              })()}

              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close full-screen (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Image Display */}
          <div className="relative flex-1 flex items-center justify-center my-auto p-2" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const photos = modalPlace.gallery && modalPlace.gallery.length > 0 ? modalPlace.gallery : [modalPlace.image];
              return (
                <>
                  {photos.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setActivePhotoIdx((prev) => (prev - 1 + photos.length) % photos.length)}
                      className="absolute left-2 sm:left-6 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-30 shadow-2xl hover:scale-105"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                  )}

                  <img
                    src={photos[activePhotoIdx] || modalPlace.image}
                    alt={`${modalPlace.title} enlarged view`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_IMAGE;
                    }}
                    className="max-h-[78vh] max-w-[92vw] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10 transition-all duration-300"
                  />

                  {photos.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setActivePhotoIdx((prev) => (prev + 1) % photos.length)}
                      className="absolute right-2 sm:right-6 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-30 shadow-2xl hover:scale-105"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                  )}
                </>
              );
            })()}
          </div>

          {/* Lightbox Bottom Thumbnail Strip */}
          <div className="shrink-0 flex items-center justify-center gap-2 overflow-x-auto py-2 no-scrollbar z-20" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const photos = modalPlace.gallery && modalPlace.gallery.length > 0 ? modalPlace.gallery : [modalPlace.image];
              if (photos.length <= 1) return null;
              return photos.map((photo, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                    activePhotoIdx === idx
                      ? 'border-emerald-400 scale-110 shadow-lg ring-2 ring-emerald-400/40'
                      : 'border-white/30 opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={photo}
                    alt={`Thumbnail ${idx + 1}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_IMAGE;
                    }}
                    className="w-full h-full object-cover"
                  />
                </button>
              ));
            })()}
          </div>
        </div>
      )}

    </section>
  );
}
