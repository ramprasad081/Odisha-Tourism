import { useState, useEffect, useRef } from 'react';
import { 
  X, 
  MapPin, 
  Star, 
  Calendar, 
  DollarSign, 
  Heart, 
  Share2, 
  CheckCircle2, 
  Navigation,
  Sparkles,
  Mountain,
  Thermometer,
  Sun,
  Sunrise,
  Sunset,
  CloudSun,
  ChevronLeft,
  ChevronRight,
  Camera,
  Flame,
  Maximize2,
  ZoomIn,
  User,
  Phone,
  Mail,
  Users,
  Ticket,
  ShieldCheck,
  Check
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import NearbyServicesSection from './NearbyServicesSection';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85";

export default function DestinationModal({ 
  destination, 
  initialTab = 'details',
  onClose, 
  isWishlisted, 
  onToggleWishlist,
  onSelectDestination,
  onAddBooking
}) {
  const [modalTab, setModalTab] = useState(initialTab || 'details'); // 'details' | 'services' | 'booking'
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const modalBodyRef = useRef(null);

  useEffect(() => {
    if (initialTab) {
      setModalTab(initialTab);
    }
  }, [initialTab, destination]);

  useEffect(() => {
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
  }, [modalTab, destination]);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
    guests: 2,
    tourType: 'Eco-Resort Stay & Guided Circuit'
  });
  const [isBooked, setIsBooked] = useState(false);
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);
  const [copiedShare, setCopiedShare] = useState(false);

  // Available tour packages - 100% Free
  const TOUR_PACKAGES = [
    {
      id: 'summit-trek',
      name: 'Scenic Highland Day Excursion & Guide',
      price: 0,
      badge: '100% Free Pass',
      desc: 'Certified local naturalist guide, circuit transportation & reserve permits.'
    },
    {
      id: 'eco-resort',
      name: 'Eco-Resort Stay & Guided Circuit',
      price: 0,
      badge: '⭐ Free Reservation',
      desc: 'Comfortable eco-cottage stay, sunrise trek & authentic Odia meals.'
    },
    {
      id: 'vip-expedition',
      name: 'VIP Private 4x4 Expedition',
      price: 0,
      badge: 'Free All-Inclusive',
      desc: 'Dedicated private 4x4 safari vehicle, heritage permits & priority access.'
    }
  ];

  const guestsNum = Number(bookingForm.guests) || 2;

  // Sync state whenever destination or initialTab changes
  useEffect(() => {
    setModalTab(initialTab || 'details');
    setActiveImageIndex(0);
    setIsZoomed(false);
    setIsBooked(false);
    setConfirmedBookingData(null);
    setBookingForm({
      name: '',
      phone: '',
      email: '',
      date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      guests: 2,
      tourType: 'Eco-Resort Stay & Guided Circuit'
    });
  }, [destination?.id, initialTab]);

  // Keyboard navigation for Escape and Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const imgs = destination?.gallery && destination.gallery.length > 0 ? destination.gallery : [destination?.image];
        if (imgs.length > 1) {
          if (e.key === 'ArrowLeft') {
            setActiveImageIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
          } else {
            setActiveImageIndex((prev) => (prev + 1) % imgs.length);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isZoomed, destination]);

  if (!destination) return null;

  const images = destination.gallery && destination.gallery.length > 0 
    ? destination.gallery 
    : [destination.image];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const refCode = `#OD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newBooking = {
      id: `booking-${Date.now()}`,
      refId: refCode,
      destinationId: destination.id,
      destinationTitle: destination.title,
      district: destination.district,
      category: destination.category,
      image: destination.image,
      isUnderrated: destination.isUnderrated,
      date: bookingForm.date || new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      guests: guestsNum,
      travelerName: bookingForm.name || 'Explorer Guest',
      phone: bookingForm.phone || '+91 98765 43210',
      email: bookingForm.email || 'traveler@odisha.com',
      packageStyle: bookingForm.tourType || 'Eco-Resort Stay & Guided Circuit',
      totalCost: 0,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    if (onAddBooking) {
      onAddBooking(newBooking);
    }
    setConfirmedBookingData(newBooking);
    setIsBooked(true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in text-slate-900">
      {/* Backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl lg:max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-auto max-h-[94vh] flex flex-col">
        
        {/* Modal Header Bar with Big Cinematic Photo Gallery */}
        <div className="relative h-72 sm:h-80 md:h-96 lg:h-[420px] bg-slate-950 overflow-hidden shrink-0 group">
          <img
            src={images[activeImageIndex] || destination.image}
            alt={`${destination.title} view ${activeImageIndex + 1}`}
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

          {/* Top Bar Actions: Enlarge Button & Photo Counter */}
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
            {images.length > 1 && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md text-white border border-white/20 text-xs font-bold">
                <Camera className="w-3.5 h-3.5 text-emerald-400" />
                <span>{activeImageIndex + 1} / {images.length}</span>
              </span>
            )}
          </div>

          {/* Top Right Action Icons: Zoom, Share, Wishlist, Close */}
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
              onClick={handleShare}
              className="p-2.5 rounded-full bg-black/65 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer flex items-center justify-center shadow-md hover:scale-105"
              title="Share destination"
              aria-label="Share"
            >
              {copiedShare ? (
                <span className="text-[10px] font-bold text-emerald-400 px-1">Copied!</span>
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => onToggleWishlist(destination)}
              aria-label="Save to Wishlist"
              className={`p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md hover:scale-105 flex items-center justify-center ${
                isWishlisted ? 'bg-rose-600 text-white' : 'bg-black/65 hover:bg-black/90 text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer shadow-md hover:scale-105"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Left & Right Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
                  setActiveImageIndex((prev) => (prev + 1) % images.length);
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
              {destination.isUnderrated ? (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-slate-950 shadow-sm">
                  💎 Hidden Gem
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 shadow-sm">
                  🔥 Famous Landmark
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                {destination.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-black/40 text-amber-300">
                📍 {destination.district} District
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                ★ {destination.rating}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white drop-shadow-md">
                  {destination.title}
                </h3>
                <p className="text-xs text-slate-300 hidden sm:block mt-0.5">
                  Click image or thumbnails below to see big high-resolution views
                </p>
              </div>

              {/* Clickable thumbnail strip in hero banner */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar shrink-0">
                  {images.map((photo, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex(idx);
                      }}
                      className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 shadow-sm ${
                        activeImageIndex === idx
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
        <div ref={modalBodyRef} className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 max-h-[62vh]">
          
          {modalTab === 'details' ? (
            /* TAB 1: Place Overview, Highlights, Scenic Photos, Nearby Spots & Services */
            <div className="space-y-6 animate-fade-in">
              
              {/* Highlight & Why Underrated / Landmark Card */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Key Attraction &amp; Local Heritage</span>
                  </h4>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    🌿 {destination.crowdLevel || 'Peaceful & Uncrowded'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {destination.shortDesc}
                </p>
                {destination.underratedReason && (
                  <p className="text-xs text-emerald-800/90 mt-2 font-semibold">
                    💡 <em>{destination.underratedReason}</em>
                  </p>
                )}
              </div>

              {/* Fact Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Altitude / Terrain</span>
                  <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                    <Mountain className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="truncate">{destination.altitude || 'Scenic Valley'}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Entry Pass</span>
                  <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                    <DollarSign className="w-3.5 h-3.5 text-amber-600" />
                    <span className="truncate">{destination.entryFee || 'Free Entry'}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Best Season</span>
                  <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span className="truncate">{destination.bestTime || 'Oct to Mar'}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Nearest Transit</span>
                  <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                    <Navigation className="w-3.5 h-3.5 text-sky-600" />
                    <span className="truncate">{destination.nearestHub || `${destination.district} Town`}</span>
                  </div>
                </div>
              </div>

              {/* Climate & Weather Live Guide */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-emerald-500/5 to-sky-500/10 border border-amber-200/50 shadow-xs">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-200/40">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-600 flex items-center justify-center">
                      <Sun className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-extrabold text-slate-900 font-display">
                      Climate &amp; Day Planning Guide
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
                    Ideal: {destination.bestTime}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 bg-white/80 rounded-xl border border-slate-100">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <CloudSun className="w-2.5 h-2.5 text-emerald-600" />
                      <span>Season</span>
                    </span>
                    <p className="font-bold text-[11px] text-slate-900 mt-0.5 truncate">
                      {destination.weather?.season || destination.bestTime}
                    </p>
                  </div>

                  <div className="p-2 bg-white/80 rounded-xl border border-slate-100">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <Thermometer className="w-2.5 h-2.5 text-rose-500" />
                      <span>Temperature</span>
                    </span>
                    <p className="font-bold text-[11px] text-slate-900 mt-0.5 truncate">
                      {destination.weather?.temperature || '15°C - 28°C'}
                    </p>
                  </div>

                  <div className="p-2 bg-white/80 rounded-xl border border-slate-100">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <Sunrise className="w-2.5 h-2.5 text-amber-500" />
                      <span>Sunrise</span>
                    </span>
                    <p className="font-bold text-[11px] text-slate-900 mt-0.5 truncate">
                      {destination.weather?.sunrise || '05:35 AM'}
                    </p>
                  </div>

                  <div className="p-2 bg-white/80 rounded-xl border border-slate-100">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <Sunset className="w-2.5 h-2.5 text-orange-500" />
                      <span>Sunset</span>
                    </span>
                    <p className="font-bold text-[11px] text-slate-900 mt-0.5 truncate">
                      {destination.weather?.sunset || '05:40 PM'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo Gallery Grid - Bigger Preview of all scenic angles */}
              {images.length > 1 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <Camera className="w-4 h-4 text-emerald-600" />
                      <span>Photo Gallery &amp; Scenic Angles ({images.length} High-Res Images)</span>
                    </h4>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/50">
                      Click any image to enlarge
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {images.map((photo, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setActiveImageIndex(idx);
                          setIsZoomed(true);
                        }}
                        className={`group/img relative h-28 sm:h-36 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all shadow-xs hover:shadow-md ${
                          activeImageIndex === idx
                            ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                            : 'border-slate-200 hover:border-emerald-400'
                        }`}
                      >
                        <img
                          src={photo}
                          alt={`${destination.title} angle ${idx + 1}`}
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
              )}

              {/* Full Narrative Overview */}
              <div>
                <h4 className="text-base font-bold font-display text-slate-900 mb-2">
                  About {destination.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm font-normal">
                  {destination.fullDesc}
                </p>
              </div>

              {/* Tags & Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                  Highlights &amp; Experiences
                </h4>
                <div className="flex flex-wrap gap-2">
                  {destination.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-100/60"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nearby Auto-suggested Places in Same District */}
              {(() => {
                const nearbyPlaces = DESTINATIONS.filter(
                  d => d.district === destination.district && d.id !== destination.id
                );
                if (nearbyPlaces.length === 0) return null;
                return (
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        <span>Nearby in {destination.district} District ({nearbyPlaces.length} Spots)</span>
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Auto-Suggested
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {nearbyPlaces.slice(0, 3).map((near) => (
                        <div
                          key={near.id}
                          onClick={() => {
                            if (onSelectDestination) onSelectDestination(near);
                          }}
                          className="rounded-2xl bg-slate-50 hover:bg-emerald-50/80 border border-slate-200/80 hover:border-emerald-300 transition-all cursor-pointer group overflow-hidden flex flex-col shadow-xs hover:shadow-md"
                        >
                          <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-200">
                            <img
                              src={near.image}
                              alt={near.title}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = FALLBACK_IMAGE;
                              }}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 left-2">
                              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-xs ${near.isUnderrated ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'}`}>
                                {near.isUnderrated ? '💎 Gem' : '🔥 Famous'}
                              </span>
                            </div>
                            <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold">
                              ★ {near.rating}
                            </div>
                          </div>
                          <div className="p-3">
                            <h5 className="font-bold text-xs text-slate-900 group-hover:text-emerald-700 truncate">
                              {near.title}
                            </h5>
                            <span className="text-[11px] text-slate-500 block truncate mt-0.5">
                              {near.category} • {destination.district}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Dynamic Nearby Hotels, Emergency Hospitals & Live Map */}
              <div className="pt-2 border-t border-slate-100">
                <NearbyServicesSection
                  destination={destination}
                  onBookHotel={(hotelBooking) => {
                    if (onAddBooking) {
                      onAddBooking({
                        id: `hotel-${Date.now()}`,
                        refId: hotelBooking.bookingId,
                        destinationId: destination.id,
                        destinationTitle: destination.title,
                        district: destination.district,
                        category: 'Hotel Reservation',
                        image: hotelBooking.hotelImage,
                        isUnderrated: false,
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

              {/* Bottom Actions Bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setModalTab('booking')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Book Free Tour Experience →</span>
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setModalTab('services')}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-sky-200/80"
                  >
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    <span>Hotels &amp; Hospitals Map</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          ) : modalTab === 'services' ? (
            /* TAB 2: Dynamic Nearby Hotels, Emergency Hospitals & Live Map */
            <div className="space-y-4 animate-fade-in">
              <NearbyServicesSection
                destination={destination}
                onBookHotel={(hotelBooking) => {
                  if (onAddBooking) {
                    onAddBooking({
                      id: `hotel-${Date.now()}`,
                      refId: hotelBooking.bookingId,
                      destinationId: destination.id,
                      destinationTitle: destination.title,
                      district: destination.district,
                      category: 'Hotel Reservation',
                      image: hotelBooking.hotelImage,
                      isUnderrated: false,
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
            /* TAB 3: Free Interactive Tour & Stay Booking Flow */
            <div className="space-y-4 animate-fade-in">
              
              {isBooked ? (
                /* Booking Confirmation Screen */
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 animate-fade-in text-slate-900">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-extrabold text-base text-slate-900 font-display">
                          Reservation Confirmed Successfully!
                        </h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-mono font-extrabold text-xs">
                          {confirmedBookingData?.refId || '#OD-CONFIRMED'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Thank you, <strong className="text-slate-900">{confirmedBookingData?.travelerName}</strong>! Your guided tour for <strong className="text-emerald-800">{destination.title}</strong> has been secured and logged into your Bookings ledger.
                      </p>

                      <div className="mt-4 pt-3 border-t border-emerald-200/60 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                        <div className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-xs">
                          <span className="text-[10px] text-slate-400 block uppercase">Package</span>
                          <span className="font-bold text-slate-800 truncate block">{confirmedBookingData?.packageStyle}</span>
                        </div>
                        <div className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-xs">
                          <span className="text-[10px] text-slate-400 block uppercase">Date</span>
                          <span className="font-bold text-slate-800">{confirmedBookingData?.date}</span>
                        </div>
                        <div className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-xs">
                          <span className="text-[10px] text-slate-400 block uppercase">Travelers</span>
                          <span className="font-bold text-slate-800">{confirmedBookingData?.guests} Guests</span>
                        </div>
                        <div className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-xs">
                          <span className="text-[10px] text-slate-400 block uppercase">Total Cost</span>
                          <span className="font-bold text-emerald-700">FREE (₹0)</span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setIsBooked(false);
                            setConfirmedBookingData(null);
                          }}
                          className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                        >
                          Book Another Date
                        </button>
                        <button
                          type="button"
                          onClick={onClose}
                          className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
                        >
                          Done &amp; Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Free Booking Form */
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  
                  {/* Step 1: Package Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      1. Select Tour Experience Package
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {TOUR_PACKAGES.map((pkg) => {
                        const isSelected = bookingForm.tourType === pkg.name;
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => setBookingForm({ ...bookingForm, tourType: pkg.name })}
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

                  {/* Step 2 & 3: Date & Guests Row */}
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

                  {/* Step 4: Lead Traveler Contact */}
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

                  {/* Summary & Confirm Free Booking Button */}
                  <div className="p-3.5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
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
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 hover:scale-105"
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

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 animate-fade-in text-white"
          onClick={() => setIsZoomed(false)}
        >
          {/* Lightbox Top Header */}
          <div className="flex items-center justify-between text-white z-20 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                {destination.title}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                {destination.district} District • {destination.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
                {activeImageIndex + 1} / {images.length}
              </span>

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
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-2 sm:left-6 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-30 shadow-2xl hover:scale-105"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            )}

            <img
              src={images[activeImageIndex]}
              alt={`${destination.title} enlarged view`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = FALLBACK_IMAGE;
              }}
              className="max-h-[78vh] max-w-[92vw] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10 transition-all duration-300"
            />

            {images.length > 1 && (
              <button
                type="button"
                onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-2 sm:right-6 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-30 shadow-2xl hover:scale-105"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Thumbnail Strip */}
          <div className="shrink-0 flex items-center justify-center gap-2 overflow-x-auto py-2 no-scrollbar z-20" onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && images.map((photo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                  activeImageIndex === idx
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
