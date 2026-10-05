import { useState, useMemo, useEffect, useRef } from 'react';
import { 
  MapPin, 
  Navigation, 
  Star, 
  ArrowUpRight, 
  Compass, 
  Sparkles, 
  Flame, 
  Clock, 
  Search, 
  ChevronDown, 
  Check, 
  Sun,
  X,
  Calendar,
  User,
  Phone,
  Mail,
  Users,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  Mountain,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Ticket,
  ZoomIn,
  Camera,
  Maximize2
} from 'lucide-react';
import { NEARBY_HUBS, DESTINATIONS } from '../data/destinations';
import NearbyServicesSection from './NearbyServicesSection';
import { getNearestServices } from '../services/nearbyPlacesService';

export default function NearbyExplorer({ onSelectDestination, onAddBooking }) {
  const [selectedHubId, setSelectedHubId] = useState('koraput');
  const [regionFilter, setRegionFilter] = useState('All');
  const [districtSearch, setDistrictSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showHubServices, setShowHubServices] = useState(false);

  // Modal State for selected place & booking
  const [modalPlace, setModalPlace] = useState(null);
  const [modalTab, setModalTab] = useState('details'); // 'details' | 'services' | 'booking'
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false); // Zoomed full-screen lightbox
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
    date: '',
    guests: 2,
    packageType: 'Eco-Resort Stay & Guided Circuit'
  });
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Available tour packages - 100% Free
  const TOUR_PACKAGES = [
    {
      id: 'day-excursion',
      name: 'Scenic Day Excursion & Guide',
      price: 0,
      badge: '100% Free Pass',
      desc: 'Certified local naturalist guide, circuit transportation & permits.'
    },
    {
      id: 'eco-resort',
      name: 'Eco-Resort Stay & Guided Circuit',
      price: 0,
      badge: '⭐ Free Reservation',
      desc: 'Comfortable eco-cottage stay, sunrise trek, authentic Odia meals.'
    },
    {
      id: 'vip-expedition',
      name: 'VIP Private 4x4 Expedition',
      price: 0,
      badge: 'Free All-Inclusive',
      desc: 'Dedicated private 4x4 safari, heritage permits & priority access.'
    }
  ];

  const selectedPkg = TOUR_PACKAGES.find(p => p.name === bookingForm.packageType) || TOUR_PACKAGES[1];
  const guestsCount = Number(bookingForm.guests) || 2;
  const totalAmount = selectedPkg.price * guestsCount;

  // Region options
  const regions = ['All', 'Southern Odisha', 'Coastal Odisha', 'Western Odisha', 'Northern Odisha', 'Central Odisha'];

  // Filtered hubs based on region and search query
  const filteredHubs = useMemo(() => {
    return NEARBY_HUBS.filter(hub => {
      const matchRegion = regionFilter === 'All' || hub.region === regionFilter;
      const matchSearch = hub.name.toLowerCase().includes(districtSearch.toLowerCase()) ||
                          hub.region.toLowerCase().includes(districtSearch.toLowerCase());
      return matchRegion && matchSearch;
    });
  }, [regionFilter, districtSearch]);

  const currentHub = NEARBY_HUBS.find(h => h.id === selectedHubId) || NEARBY_HUBS[0];

  // Helper destination object for basecamp hub
  const hubAsDestination = useMemo(() => {
    return {
      id: `hub-${currentHub.id}`,
      title: `${currentHub.name} Basecamp & Surroundings`,
      district: currentHub.name,
      category: 'Travel Basecamp',
      coordinates: currentHub.places?.[0]?.coordinates || null,
      image: currentHub.cover || currentHub.places?.[0]?.image || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85'
    };
  }, [currentHub]);

  // Helper to build full rich destination object
  const buildFullDest = (place) => {
    const existing = DESTINATIONS.find(d => d.id === place.id);
    if (existing) return existing;

    const gallery = place.gallery && place.gallery.length > 0 ? place.gallery : [
      place.image,
      `${place.image}&auto=format&fit=crop&w=1200&q=85`,
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
    ];

    return {
      id: place.id,
      title: place.name,
      district: currentHub.name,
      category: place.type.includes('Cascade') || place.type.includes('Falls') || place.type.includes('Drop') ? 'Waterfalls'
              : place.type.includes('Peak') || place.type.includes('Hill') || place.type.includes('Summit') ? 'Hills'
              : place.type.includes('Shrine') || place.type.includes('Temple') || place.type.includes('Pagoda') ? 'Temples'
              : place.type.includes('Beach') || place.type.includes('Coast') || place.type.includes('Sea') ? 'Beaches'
              : place.type.includes('Wildlife') || place.type.includes('Sanctuary') || place.type.includes('National Park') ? 'Wildlife'
              : 'Culture',
      rating: place.rating || 4.8,
      reviews: place.reviews || 850,
      shortDesc: place.highlight,
      fullDesc: `${place.name} is one of the most stunning attractions located near ${currentHub.name}, Odisha. ${place.highlight} It is situated approximately ${place.distance} (${place.driveTime}) and offers breathtaking scenery, serene natural vistas, and rich local folklore.`,
      image: place.image,
      gallery: gallery,
      tags: [place.type, place.distance, `${currentHub.name} Basecamp`, "Scenic Wonder"],
      bestTime: place.bestTime || "October to March",
      weather: {
        season: "Crisp & Pleasant Winter",
        temperature: "15°C - 27°C",
        sunrise: "05:36 AM",
        sunset: "05:40 PM"
      },
      nearestHub: `${currentHub.name} (${place.distance})`,
      entryFee: place.entryFee || "Free Entry / Eco Pass",
      isFeatured: false,
      altitude: place.altitude || "Scenic Valley",
      coordinates: place.coordinates,
      isUnderrated: place.isUnderrated ?? true,
      crowdLevel: place.isUnderrated ? "Peaceful & Uncrowded" : "High Footfall",
      underratedReason: `${place.name} provides an authentic, untouched experience with serene vistas away from crowded commercial circuits.`
    };
  };

  // Helper to get all photos for a place in high resolution
  const getPlacePhotos = (place) => {
    if (!place) return [];
    if (place.gallery && place.gallery.length > 0) return place.gallery;
    const existing = DESTINATIONS.find(d => d.id === place.id);
    if (existing && existing.gallery && existing.gallery.length > 0) return existing.gallery;
    return [
      place.image,
      `${place.image}&auto=format&fit=crop&w=1200&q=85`,
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
    ].filter(Boolean);
  };

  // Open the place details modal
  const handleOpenPlace = (place, initialTab = 'details') => {
    setModalPlace(place);
    setModalTab(initialTab);
    setActivePhotoIdx(0);
    setIsZoomed(false);
    setConfirmedBooking(null);
    setBookingForm({
      name: '',
      phone: '',
      email: '',
      date: new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      guests: 2,
      packageType: 'Eco-Resort Stay & Guided Circuit'
    });
  };

  // Booking submit handler
  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!modalPlace) return;

    const refCode = `#OD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newBookingData = {
      id: `booking-nearby-${Date.now()}`,
      refId: refCode,
      destinationId: modalPlace.id,
      destinationTitle: modalPlace.name,
      district: currentHub.name,
      category: modalPlace.type,
      image: modalPlace.image,
      isUnderrated: modalPlace.isUnderrated ?? false,
      date: bookingForm.date || new Date(Date.now() + 86400000 * 5).toISOString().split('T')[0],
      guests: guestsCount,
      travelerName: bookingForm.name || 'Explorer Guest',
      phone: bookingForm.phone || '+91 98765 43210',
      email: bookingForm.email || 'traveler@odisha.com',
      packageStyle: bookingForm.packageType,
      totalCost: totalAmount,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    if (onAddBooking) {
      onAddBooking(newBookingData);
    }
    setConfirmedBooking(newBookingData);
  };

  const handleSelectHub = (id) => {
    setSelectedHubId(id);
    setIsDropdownOpen(false);
  };

  // Close modal on Escape & navigate with ArrowLeft/ArrowRight
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else if (modalPlace) {
          setModalPlace(null);
        }
      } else if (modalPlace && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        const photos = getPlacePhotos(modalPlace);
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

  return (
    <div className="mt-16 pt-12 border-t border-slate-200/80">
      
      {/* Header - Centered */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/60 shadow-xs">
          <Compass className="w-3.5 h-3.5 text-emerald-600" />
          <span>Smart Basecamp Guide</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-display">
          Nearby <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Explorer</span>
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
          Select your travel hub to automatically discover all surrounding peaks, waterfalls, shrines, and heritage spots.
        </p>

        {/* Search & District Dropdown for all 30 districts - Centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 w-full max-w-xl mx-auto">
          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={districtSearch}
              onChange={(e) => setDistrictSearch(e.target.value)}
              placeholder="Search any district..."
              className="pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-2xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm w-full"
            />
          </div>

          {/* Quick Dropdown Selector for all 30 districts */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold text-slate-800 shadow-sm transition-all duration-200 cursor-pointer min-w-[220px]"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span className="truncate">District: <strong className="text-emerald-700">{currentHub.name}</strong></span>
              </span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-20"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute left-1/2 sm:left-auto sm:right-0 -translate-x-1/2 sm:translate-x-0 mt-2 w-72 max-h-72 overflow-y-auto bg-white rounded-2xl shadow-xl border border-slate-100 z-30 py-2 divide-y divide-slate-50 text-left">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    All 30 Districts of Odisha
                  </div>
                  {NEARBY_HUBS.map((hub) => {
                    const isSelected = hub.id === selectedHubId;
                    return (
                      <button
                        key={hub.id}
                        onClick={() => handleSelectHub(hub.id)}
                        className={`w-full px-4 py-2 text-left text-xs flex items-center justify-between hover:bg-emerald-50/70 transition-colors cursor-pointer ${
                          isSelected ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700 font-medium'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`} />
                          <span>{hub.name}</span>
                          <span className="text-[10px] text-slate-400 font-normal">({hub.places.length})</span>
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Region Filter Chips - Centered */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
        <span className="text-xs font-bold text-slate-400 shrink-0 mr-1 uppercase tracking-wider text-[11px]">Region:</span>
        {regions.map((region) => {
          const isSelected = regionFilter === region;
          return (
            <button
              key={region}
              onClick={() => setRegionFilter(region)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80'
              }`}
            >
              {region === 'All' ? 'All 30 Districts' : region}
            </button>
          );
        })}
      </div>

      {/* District Pill Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
        {filteredHubs.map((hub) => {
          const isSelected = hub.id === selectedHubId;
          return (
            <button
              key={hub.id}
              onClick={() => setSelectedHubId(hub.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                isSelected
                  ? 'bg-slate-900 text-amber-300 shadow-md scale-105 ring-2 ring-emerald-500/50'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-emerald-600'}`} />
              <span>{hub.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-slate-800 text-amber-300' : 'bg-slate-100 text-slate-500'}`}>
                {hub.places.length}
              </span>
            </button>
          );
        })}
        {filteredHubs.length === 0 && (
          <p className="text-xs text-slate-500 italic py-2">
            No districts match &ldquo;{districtSearch}&rdquo;. Try another name.
          </p>
        )}
      </div>

      {/* Hub Context Pill Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900 text-white shadow-lg mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h4 className="font-bold text-sm sm:text-base text-white">
              {currentHub.name} Basecamp: {currentHub.places.length} Automatically Suggested Wonders
            </h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
            {currentHub.description}
          </p>
        </div>

        <div className="relative z-10 shrink-0 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowHubServices(!showHubServices)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
              showHubServices
                ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300'
                : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
            }`}
          >
            <span>🏨 Basecamp Hotels &amp; Hospitals</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showHubServices ? 'rotate-180' : ''}`} />
          </button>

          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300">
            <Navigation className="w-3.5 h-3.5 text-emerald-400" />
            <span>Optimal Circuit</span>
          </span>
        </div>
      </div>

      {/* Suggested Places Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentHub.places.map((place) => {
          const placeFull = buildFullDest(place);
          const placeNearest = getNearestServices(placeFull);

          return (
            <div
              key={place.id}
              onClick={() => handleOpenPlace(place, 'details')}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-emerald-950/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container with Zoom Effect - Bigger visual cards */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={place.image}
                  alt={place.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/25 pointer-events-none" />

                {/* Distance from Hub & Photo count tags */}
                <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{place.distance}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                    <Camera className="w-3 h-3 text-emerald-400" />
                    <span>{(place.gallery && place.gallery.length) || 4} Photos</span>
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{place.rating}</span>
                  </span>
                </div>

                {/* Quick View Hint on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/25 backdrop-blur-[1px] pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Click to view photos</span>
                  </span>
                </div>

                {/* Type tag bottom */}
                <div className="absolute bottom-2.5 left-3 right-3 z-10">
                  <span className="text-xs font-semibold text-emerald-300 truncate block">
                    {place.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    {place.isUnderrated ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300/60">
                        <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                        <span>💎 Hidden Gem</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300/60">
                        <Flame className="w-2.5 h-2.5 text-red-600" />
                        <span>🔥 Famous Landmark</span>
                      </span>
                    )}
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold shrink-0">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{place.driveTime}</span>
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors text-base font-display mb-1">
                    {place.name}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-2.5">
                    {place.highlight}
                  </p>

                  {/* Best Time & Climate indicator */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/50">
                      <Sun className="w-3 h-3 text-amber-500" />
                      <span>Best: {place.bestTime || 'Oct – Mar'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/50">
                      <span>🌅 Sunrise Spot</span>
                    </span>
                  </div>

                  {/* Nearest Hotel & Nearest Hospital Live Preview */}
                  <div className="mb-2 p-2 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1 text-[11px]">
                    {placeNearest.nearestHotel && (
                      <div className="flex items-center justify-between gap-1 text-slate-700">
                        <span className="flex items-center gap-1 font-medium truncate text-slate-600">
                          <span className="text-xs">🏨</span>
                          <span className="truncate">{placeNearest.nearestHotel.name}</span>
                        </span>
                        <span className="text-[10px] font-bold text-sky-800 bg-sky-50 px-1.5 py-0.2 rounded border border-sky-200/60 shrink-0">
                          {placeNearest.nearestHotel.distanceFormatted}
                        </span>
                      </div>
                    )}
                    {placeNearest.nearestHospital && (
                      <div className="flex items-center justify-between gap-1 text-slate-700 border-t border-slate-200/50 pt-1">
                        <span className="flex items-center gap-1 font-medium truncate text-slate-600">
                          <span className="text-xs">🏥</span>
                          <span className="truncate">{placeNearest.nearestHospital.name}</span>
                        </span>
                        <span className="text-[10px] font-bold text-rose-800 bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200/60 shrink-0">
                          {placeNearest.nearestHospital.distanceFormatted}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

              {/* Card Footer: Clear action buttons */}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenPlace(place, 'booking');
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs hover:shadow cursor-pointer flex items-center gap-1.5"
                    title="Book Tour / Stay"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Booking</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenPlace(place, 'details');
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                  >
                    <span>View Details</span>
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenPlace(place, 'services');
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
        })}
      </div>

      {/* Optional Basecamp Level Hotels & Hospitals Drawer */}
      {showHubServices && (
        <div className="mt-8 p-4 sm:p-6 bg-white rounded-3xl border border-slate-200/80 shadow-lg animate-fade-in">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-display">
                🏨 Hotels &amp; Emergency Hospitals around {currentHub.name} Basecamp
              </h4>
              <p className="text-xs text-slate-500">
                Dynamic verified medical centers, resorts, and interactive map centered around {currentHub.name} district
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowHubServices(false)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              title="Close Basecamp Services"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <NearbyServicesSection
            destination={hubAsDestination}
            onBookHotel={(hotelBooking) => {
              if (onAddBooking) {
                onAddBooking({
                  id: `hotel-${Date.now()}`,
                  refId: hotelBooking.bookingId,
                  destinationId: hubAsDestination.id,
                  destinationTitle: hubAsDestination.title,
                  district: currentHub.name,
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
      )}

      {/* Interactive Place & Booking Modal */}
      {/* Interactive Place & Booking Modal */}
      {modalPlace && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="fixed inset-0"
            onClick={() => setModalPlace(null)}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-4xl lg:max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-auto max-h-[94vh] flex flex-col">
            
            {/* Modal Header Bar with Big Cinematic Photo Gallery */}
            {(() => {
              const photos = getPlacePhotos(modalPlace);
              return (
                <div className="relative h-72 sm:h-80 md:h-96 lg:h-[420px] bg-slate-950 overflow-hidden shrink-0 group">
                  <img
                    src={photos[activePhotoIdx] || modalPlace.image}
                    alt={`${modalPlace.name} view ${activePhotoIdx + 1}`}
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
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500 text-slate-950 shadow-sm">
                        {modalPlace.isUnderrated ? '💎 Hidden Gem' : '🔥 Famous Landmark'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                        {modalPlace.type}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-black/40 text-amber-300">
                        📍 {currentHub.name} Hub • {modalPlace.distance}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                        ★ {modalPlace.rating}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display text-white drop-shadow-md">
                          {modalPlace.name}
                        </h3>
                        <p className="text-xs text-slate-300 hidden sm:block mt-0.5">
                          Click image or thumbnails below to see big high-resolution views
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
                  Instant
                </span>
              </button>
            </div>

            {/* Modal Body */}
            <div ref={modalBodyRef} className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1 max-h-[60vh]">
              
              {modalTab === 'details' ? (
                /* TAB 1: Place Overview, Highlights, Best Time & Live Navigation */
                <div className="space-y-5 animate-fade-in">
                  
                  {/* Highlight card */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Key Attraction &amp; Local Heritage</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {modalPlace.highlight}
                    </p>
                  </div>

                  {/* Fact Badges Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Drive Time</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{modalPlace.driveTime}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Altitude / Terrain</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                        <Mountain className="w-3.5 h-3.5 text-amber-600" />
                        <span className="truncate">{modalPlace.altitude || 'Scenic Ridge'}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Entry Pass</span>
                      <div className="flex items-center gap-1 font-bold text-slate-800 mt-0.5">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="truncate">{modalPlace.entryFee || 'Free Entry'}</span>
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
                    const photos = getPlacePhotos(modalPlace);
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
                                alt={`${modalPlace.name} angle ${idx + 1}`}
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

                  {/* Narrative Context */}
                  <div className="text-xs text-slate-600 leading-relaxed space-y-2">
                    <p>
                      <strong>{modalPlace.name}</strong> is situated in the <strong>{currentHub.name}</strong> travel circuit. Visitors from the hub can easily complete a day excursion or camp overnight at nearby eco-resorts.
                    </p>
                    <p>
                      Local tribal and conservation guides certified by Odisha Tourism operate daily circuits providing authentic culinary experiences, forest trekking permits, and safe transit.
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setModalTab('booking')}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Book Tour / Stay Experience →</span>
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
                      destination={buildFullDest(modalPlace)}
                      onBookHotel={(hotelBooking) => {
                        if (onAddBooking) {
                          onAddBooking({
                            id: `hotel-${Date.now()}`,
                            refId: hotelBooking.bookingId,
                            destinationId: modalPlace.id,
                            destinationTitle: modalPlace.name,
                            district: currentHub.name,
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

                </div>
              ) : modalTab === 'services' ? (
                /* TAB 2: Dynamic Nearby Hotels, Emergency Hospitals & Live Map */
                <div className="space-y-4 animate-fade-in">
                  <NearbyServicesSection
                    destination={buildFullDest(modalPlace)}
                    onBookHotel={(hotelBooking) => {
                      if (onAddBooking) {
                        onAddBooking({
                          id: `hotel-${Date.now()}`,
                          refId: hotelBooking.bookingId,
                          destinationId: modalPlace.id,
                          destinationTitle: modalPlace.name,
                          district: currentHub.name,
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
                /* TAB 3: Work Before Booking (Interactive Reservation Flow) */
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
                            Thank you, <strong className="text-slate-900">{confirmedBooking.travelerName}</strong>! Your tour for <strong className="text-emerald-800">{modalPlace.name}</strong> has been secured and logged into your Bookings ledger.
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
                                  <span className="font-extrabold text-xs text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">FREE (₹0)</span>
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

      {/* Fullscreen High-Resolution Lightbox Modal for Nearby Images */}
      {isZoomed && modalPlace && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          {/* Lightbox Top Header */}
          <div className="flex items-center justify-between text-white z-20 shrink-0" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                {modalPlace.name}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                {currentHub.name} Basecamp • {modalPlace.distance}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {(() => {
                const photos = getPlacePhotos(modalPlace);
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
              const photos = getPlacePhotos(modalPlace);
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
                    alt={`${modalPlace.name} enlarged view`}
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
              const photos = getPlacePhotos(modalPlace);
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
                    className="w-full h-full object-cover"
                  />
                </button>
              ));
            })()}
          </div>
        </div>
      )}

    </div>
  );
}
