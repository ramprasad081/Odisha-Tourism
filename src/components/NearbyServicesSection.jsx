import { useState, useMemo, useRef } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Star, 
  ExternalLink, 
  Search, 
  Compass, 
  CheckCircle2, 
  X,
  Check,
  ChevronRight,
  ShieldCheck,
  HeartPulse,
  BedDouble,
  Clock
} from 'lucide-react';
import NearbyPlacesMap from './NearbyPlacesMap';
import { 
  getDestinationCoordinates, 
  getNearbyHotelsForLocation, 
  getNearbyHospitalsForLocation 
} from '../services/nearbyPlacesService';

export default function NearbyServicesSection({
  destination,
  onBookHotel = null
}) {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'hotels' | 'hospitals' | 'map'
  const [radiusFilter, setRadiusFilter] = useState(100); // km - generous default so all places show options
  const [searchQuery, setSearchQuery] = useState('');
  
  // Hotel Quick Booking Modal State
  const [bookingHotel, setBookingHotel] = useState(null);
  const [hotelBookingForm, setHotelBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'Deluxe AC Room'
  });
  const [hotelBookingConfirmed, setHotelBookingConfirmed] = useState(false);
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);

  const sectionRef = useRef(null);
  const mapSectionRef = useRef(null);

  // Synchronously compute destination coordinates
  const destCoords = useMemo(() => {
    return getDestinationCoordinates(destination);
  }, [destination?.id, destination?.title, destination?.name, destination?.coordinates?.lat, destination?.coordinates?.lng]);

  // Synchronously get nearby hotels & hospitals (instant calculation, zero loading flash/delay)
  const rawHotels = useMemo(() => {
    return getNearbyHotelsForLocation(destCoords, radiusFilter);
  }, [destCoords, radiusFilter]);

  const rawHospitals = useMemo(() => {
    return getNearbyHospitalsForLocation(destCoords, radiusFilter);
  }, [destCoords, radiusFilter]);

  // Nearest highlights
  const nearestHotel = rawHotels[0] || null;
  const nearestHospital = rawHospitals[0] || null;

  // Filtered hotels based on search
  const filteredHotels = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return rawHotels;
    return rawHotels.filter((hotel) => {
      return (
        hotel.name.toLowerCase().includes(query) ||
        hotel.locality?.toLowerCase().includes(query) ||
        hotel.address?.toLowerCase().includes(query) ||
        hotel.amenities?.some(a => a.toLowerCase().includes(query))
      );
    });
  }, [rawHotels, searchQuery]);

  // Filtered hospitals based on search
  const filteredHospitals = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return rawHospitals;
    return rawHospitals.filter((hospital) => {
      return (
        hospital.name.toLowerCase().includes(query) ||
        hospital.locality?.toLowerCase().includes(query) ||
        hospital.address?.toLowerCase().includes(query) ||
        hospital.facilities?.some(f => f.toLowerCase().includes(query))
      );
    });
  }, [rawHospitals, searchQuery]);

  // Scroll to map and highlight marker
  const handleViewOnMap = (placeId) => {
    setSelectedPlaceId(placeId);
    if (activeTab !== 'map' && activeTab !== 'all') {
      setActiveTab('all');
    }
    setTimeout(() => {
      if (mapSectionRef.current) {
        mapSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  };

  // Open booking modal
  const handleOpenHotelBooking = (hotel) => {
    setBookingHotel(hotel);
    setHotelBookingConfirmed(false);
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    setHotelBookingForm({
      name: '',
      email: '',
      phone: '',
      checkIn: today,
      checkOut: tomorrow,
      guests: '2',
      roomType: 'Deluxe AC Room'
    });
  };

  const handleHotelBookingSubmit = (e) => {
    e.preventDefault();
    const confCode = `#HT-${Math.floor(100000 + Math.random() * 900000)}`;
    const bookingDetails = {
      bookingId: confCode,
      hotelName: bookingHotel.name,
      hotelImage: bookingHotel.image,
      address: bookingHotel.address,
      nearDestination: destination.title || destination.name,
      ...hotelBookingForm,
      priceRange: bookingHotel.priceRange,
      confirmedAt: new Date().toISOString()
    };

    setConfirmedBookingData(bookingDetails);
    setHotelBookingConfirmed(true);

    if (onBookHotel) {
      onBookHotel(bookingDetails);
    }
  };

  if (!destination) return null;

  return (
    <div ref={sectionRef} className="pt-2 text-slate-800 space-y-6">
      
      {/* Dynamic Section Header Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-extrabold uppercase tracking-wider mb-2 border border-emerald-400/30">
            <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
            <span>Dynamic Location-Based Results</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
            Nearby <span className="text-sky-400">Hotels</span> &amp; <span className="text-rose-400">Hospitals</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Automatically detected for <strong className="text-amber-300">{destination.title || destination.name}</strong> ({destCoords.lat.toFixed(4)}° N, {destCoords.lng.toFixed(4)}° E) in {destCoords.district || destination.district} District.
          </p>
        </div>

        {/* Radius & Search Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Radius Selector */}
          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/15 text-xs text-white">
            <span className="text-[11px] font-bold text-slate-300 pl-1.5">Radius:</span>
            {[30, 50, 100, 200].map((rad) => (
              <button
                key={rad}
                type="button"
                onClick={() => setRadiusFilter(rad)}
                className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  radiusFilter === rad
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {rad}km
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-44">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stay/hospital..."
              className="w-full pl-8 pr-3 py-1.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Instant Highlights Banner: Nearest Hotel & Nearest Hospital (At a Glance) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Nearest Hotel Spotlight */}
        {nearestHotel && (
          <div className="p-3.5 rounded-2xl bg-sky-50/80 border border-sky-200/80 flex items-start gap-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-200">
              <img 
                src={nearestHotel.image} 
                alt={nearestHotel.name} 
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-1 left-1 px-1.5 py-0.2 rounded bg-sky-600 text-white text-[9px] font-black uppercase">
                Closest Stay
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-extrabold text-sky-800 uppercase tracking-wider flex items-center gap-1">
                  <BedDouble className="w-3 h-3 text-sky-600" />
                  <span>Nearest Accommodation</span>
                </span>
                <span className="text-[11px] font-bold text-amber-600 flex items-center gap-0.5">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{nearestHotel.rating}</span>
                </span>
              </div>
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 truncate mt-0.5">
                {nearestHotel.name}
              </h4>
              <p className="text-[11px] text-slate-600 flex items-center gap-1.5 mt-0.5">
                <span className="font-bold text-sky-700">📍 {nearestHotel.distanceFormatted}</span>
                <span>•</span>
                <span className="text-slate-500">{nearestHotel.driveTimeText}</span>
              </p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenHotelBooking(nearestHotel)}
                  className="px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-bold transition-all cursor-pointer shadow-xs"
                >
                  Book Stay (Free)
                </button>
                <button
                  type="button"
                  onClick={() => handleViewOnMap(nearestHotel.id)}
                  className="px-2 py-1 rounded-lg bg-white hover:bg-sky-100 text-sky-800 text-[11px] font-semibold transition-colors cursor-pointer border border-sky-200"
                >
                  View on Map
                </button>
                <a
                  href={nearestHotel.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded-lg bg-white hover:bg-sky-100 text-slate-700 text-[11px] font-semibold transition-colors border border-slate-200 flex items-center gap-0.5"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Nearest Hospital Spotlight */}
        {nearestHospital && (
          <div className="p-3.5 rounded-2xl bg-rose-50/80 border border-rose-200/80 flex items-start gap-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-200">
              <img 
                src={nearestHospital.image} 
                alt={nearestHospital.name} 
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-1 left-1 px-1.5 py-0.2 rounded bg-rose-600 text-white text-[9px] font-black uppercase">
                24×7 Care
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-extrabold text-rose-800 uppercase tracking-wider flex items-center gap-1">
                  <HeartPulse className="w-3 h-3 text-rose-600" />
                  <span>Nearest Medical Emergency</span>
                </span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-rose-100 text-rose-800 border border-rose-200">
                  108 Active
                </span>
              </div>
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 truncate mt-0.5">
                {nearestHospital.name}
              </h4>
              <p className="text-[11px] text-slate-600 flex items-center gap-1.5 mt-0.5">
                <span className="font-bold text-rose-700">📍 {nearestHospital.distanceFormatted}</span>
                <span>•</span>
                <span className="text-slate-500">{nearestHospital.driveTimeText}</span>
              </p>
              <div className="mt-2 flex items-center gap-2">
                {nearestHospital.phone && (
                  <a
                    href={`tel:${nearestHospital.phone.replace(/[^0-9+]/g, '')}`}
                    className="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold transition-all shadow-xs flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Care</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => handleViewOnMap(nearestHospital.id)}
                  className="px-2 py-1 rounded-lg bg-white hover:bg-rose-100 text-rose-800 text-[11px] font-semibold transition-colors cursor-pointer border border-rose-200"
                >
                  View on Map
                </button>
                <a
                  href={nearestHospital.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 rounded-lg bg-white hover:bg-rose-100 text-slate-700 text-[11px] font-semibold transition-colors border border-slate-200 flex items-center gap-0.5"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category Filter Pills: All vs Hotels vs Hospitals vs Map */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'all'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <span>🌟 All Surrounding Places</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
            {filteredHotels.length + filteredHospitals.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('hotels')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'hotels'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-sky-50 hover:bg-sky-100 text-sky-800'
          }`}
        >
          <span>🏨 Nearby Hotels</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'hotels' ? 'bg-white/20 text-white' : 'bg-sky-200 text-sky-900'}`}>
            {filteredHotels.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('hospitals')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'hospitals'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-rose-50 hover:bg-rose-100 text-rose-800'
          }`}
        >
          <span>🏥 Emergency Hospitals</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'hospitals' ? 'bg-white/20 text-white' : 'bg-rose-200 text-rose-900'}`}>
            {filteredHospitals.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('map')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'map'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800'
          }`}
        >
          <span>🗺️ Interactive Map View</span>
        </button>
      </div>

      {/* SECTION 1: NEARBY HOTELS */}
      {(activeTab === 'all' || activeTab === 'hotels') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs shadow-xs">
                🏨
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900 font-display">
                  Nearby Hotels &amp; Accommodations ({filteredHotels.length})
                </h4>
                <p className="text-[11px] text-slate-500">
                  Ranked by closest driving distance to {destination.title || destination.name}
                </p>
              </div>
            </div>

            <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200 shrink-0">
              Verified Stays
            </span>
          </div>

          {filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredHotels.map((hotel, index) => {
                const isSelected = selectedPlaceId === hotel.id;
                return (
                  <div
                    key={hotel.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between bg-white shadow-xs hover:shadow-md ${
                      isSelected
                        ? 'ring-2 ring-sky-500 border-sky-400 scale-[1.01]'
                        : 'border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    {/* Hotel Image with Badges */}
                    <div className="relative h-40 bg-slate-100 overflow-hidden group">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Distance Badge */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-white border border-white/20 text-[11px] font-black shadow-md">
                        <MapPin className="w-3 h-3 text-sky-400" />
                        <span>{hotel.distanceFormatted}</span>
                        <span className="text-[9px] opacity-75">({hotel.driveTimeText})</span>
                      </div>

                      {/* Ranking Badge */}
                      {index === 0 && (
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold shadow-sm uppercase tracking-wider">
                          Closest Stay
                        </div>
                      )}

                      {/* Rating */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-400 text-slate-950 text-[11px] font-extrabold shadow-sm">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{hotel.rating}</span>
                        <span className="text-[10px] font-medium opacity-80">({hotel.reviewsCount || 450})</span>
                      </div>

                      {/* Price Range */}
                      {hotel.priceRange && (
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-slate-950/85 backdrop-blur-md text-emerald-300 text-[11px] font-black border border-emerald-400/30">
                          {hotel.priceRange}
                        </div>
                      )}
                    </div>

                    {/* Hotel Content */}
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block">
                          {hotel.type}
                        </span>
                        <h5 className="font-extrabold text-sm text-slate-900 mt-0.5 leading-snug line-clamp-1">
                          {hotel.name}
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {hotel.address}
                        </p>

                        {/* Amenities */}
                        {hotel.amenities && (
                          <div className="mt-2.5 flex flex-wrap gap-1">
                            {hotel.amenities.slice(0, 3).map((amenity) => (
                              <span
                                key={amenity}
                                className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold"
                              >
                                ✓ {amenity}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleViewOnMap(hotel.id)}
                            className="flex-1 py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 font-bold text-[11px] transition-colors cursor-pointer flex items-center justify-center gap-1 border border-slate-200"
                          >
                            <MapPin className="w-3 h-3 text-sky-600" />
                            <span>View on Map</span>
                          </button>

                          <a
                            href={hotel.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-1.5 px-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-[11px] transition-colors flex items-center justify-center gap-1 border border-sky-200/80"
                          >
                            <Navigation className="w-3 h-3 text-sky-600" />
                            <span>Directions</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleOpenHotelBooking(hotel)}
                          className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-xs hover:shadow transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <span>Book This Stay (Free)</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-500">
                No hotels found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => { setRadiusFilter(200); setSearchQuery(''); }}
                className="mt-2 text-xs font-bold text-sky-700 hover:underline cursor-pointer"
              >
                Clear filter &amp; view all {rawHotels.length} surrounding stays
              </button>
            </div>
          )}
        </div>
      )}

      {/* SECTION 2: NEARBY HOSPITALS */}
      {(activeTab === 'all' || activeTab === 'hospitals') && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shadow-xs">
                ✚
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900 font-display">
                  Nearby Emergency Hospitals &amp; Healthcare ({filteredHospitals.length})
                </h4>
                <p className="text-[11px] text-slate-500">
                  24×7 Trauma Care, ambulances, and emergency centers closest to {destination.title || destination.name}
                </p>
              </div>
            </div>

            <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-[11px] font-extrabold flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
              <span>108 Standby</span>
            </span>
          </div>

          {filteredHospitals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredHospitals.map((hosp, index) => {
                const isSelected = selectedPlaceId === hosp.id;
                return (
                  <div
                    key={hosp.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between bg-white shadow-xs hover:shadow-md ${
                      isSelected
                        ? 'ring-2 ring-rose-500 border-rose-400 scale-[1.01]'
                        : 'border-slate-200 hover:border-rose-300'
                    }`}
                  >
                    {/* Hospital Image */}
                    <div className="relative h-36 bg-slate-100 overflow-hidden group">
                      <img
                        src={hosp.image}
                        alt={hosp.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Distance */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-white border border-white/20 text-[11px] font-black shadow-md">
                        <MapPin className="w-3 h-3 text-rose-400" />
                        <span>{hosp.distanceFormatted}</span>
                        <span className="text-[9px] opacity-75">({hosp.driveTimeText})</span>
                      </div>

                      {/* 24x7 Tag */}
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-extrabold shadow-sm uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        <span>24×7 Trauma</span>
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-400 text-slate-950 text-[11px] font-extrabold shadow-sm">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{hosp.rating}</span>
                      </div>

                      {/* 108 Emergency Tag */}
                      <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-slate-950/85 backdrop-blur-md text-rose-300 text-[10px] font-black border border-rose-500/30">
                        {hosp.emergencyHelpline || 'Helpline 108'}
                      </div>
                    </div>

                    {/* Hospital Info */}
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block">
                          {hosp.type}
                        </span>
                        <h5 className="font-extrabold text-sm text-slate-900 mt-0.5 leading-snug line-clamp-1">
                          {hosp.name}
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {hosp.address}
                        </p>

                        {/* Facilities */}
                        {hosp.facilities && (
                          <div className="mt-2.5 flex flex-wrap gap-1">
                            {hosp.facilities.slice(0, 2).map((fac) => (
                              <span
                                key={fac}
                                className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-800 text-[10px] font-semibold border border-rose-100"
                              >
                                ✓ {fac}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleViewOnMap(hosp.id)}
                            className="flex-1 py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-700 font-bold text-[11px] transition-colors cursor-pointer flex items-center justify-center gap-1 border border-slate-200"
                          >
                            <MapPin className="w-3 h-3 text-rose-600" />
                            <span>View on Map</span>
                          </button>

                          <a
                            href={hosp.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-1.5 px-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold text-[11px] transition-colors flex items-center justify-center gap-1 border border-rose-200/80"
                          >
                            <Navigation className="w-3 h-3 text-rose-600" />
                            <span>Directions</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>

                        {hosp.phone && (
                          <a
                            href={`tel:${hosp.phone.replace(/[^0-9+]/g, '')}`}
                            className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs shadow-xs transition-all flex items-center justify-center gap-1.5"
                          >
                            <Phone className="w-3.5 h-3.5 text-rose-400" />
                            <span>Call Hospital: {hosp.phone}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-xs text-slate-500">
                No hospitals found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => { setRadiusFilter(200); setSearchQuery(''); }}
                className="mt-2 text-xs font-bold text-rose-700 hover:underline cursor-pointer"
              >
                Clear filter &amp; view all {rawHospitals.length} emergency centers
              </button>
            </div>
          )}
        </div>
      )}

      {/* SECTION 3: INTERACTIVE LEAFLET MAP */}
      {(activeTab === 'all' || activeTab === 'map') && (
        <div ref={mapSectionRef} className="space-y-3 pt-2">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shadow-xs">
                🗺️
              </div>
              <div>
                <h4 className="font-extrabold text-base text-slate-900 font-display">
                  Live Interactive Map &amp; Navigation Proximity
                </h4>
                <p className="text-[11px] text-slate-500">
                  Centered on {destination.title || destination.name}. Click any hotel or hospital pin for direct routing.
                </p>
              </div>
            </div>

            <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">
              Drag &amp; zoom freely
            </span>
          </div>

          <NearbyPlacesMap
            destination={{
              id: destination.id,
              name: destination.title || destination.name,
              district: destination.district,
              lat: destCoords.lat,
              lng: destCoords.lng
            }}
            hotels={filteredHotels}
            hospitals={filteredHospitals}
            selectedPlaceId={selectedPlaceId}
            onSelectPlace={(place) => setSelectedPlaceId(place.id)}
            filterType={activeTab === 'map' ? 'all' : activeTab}
            onFilterChange={(newTab) => setActiveTab(newTab)}
          />
        </div>
      )}

      {/* Hotel Quick Booking Modal (100% Free Reservation) */}
      {bookingHotel && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 animate-fade-in text-slate-900">
          <div 
            className="fixed inset-0" 
            onClick={() => setBookingHotel(null)} 
            aria-hidden="true" 
          />

          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 my-auto">
            {/* Modal Header */}
            <div className="relative h-32 bg-slate-900 overflow-hidden">
              <img
                src={bookingHotel.image}
                alt={bookingHotel.name}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                type="button"
                onClick={() => setBookingHotel(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block">
                  Free Stay Reservation (₹0)
                </span>
                <h4 className="text-base font-extrabold text-white truncate">
                  {bookingHotel.name}
                </h4>
                <p className="text-[11px] text-slate-300 truncate">
                  Near {destination.title || destination.name} • {bookingHotel.distanceFormatted} away
                </p>
              </div>
            </div>

            {/* Modal Form */}
            <div className="p-5">
              {hotelBookingConfirmed ? (
                <div className="text-center py-4 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900">
                    Stay Reserved Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Confirmation Code: <strong className="text-slate-900 font-mono">{confirmedBookingData?.bookingId}</strong> has been logged to your booking ledger at <strong>₹0 (100% Free)</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setBookingHotel(null)}
                    className="mt-2 px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Done &amp; Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHotelBookingSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Siddhant Sharma"
                        value={hotelBookingForm.name}
                        onChange={(e) => setHotelBookingForm({ ...hotelBookingForm, name: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={hotelBookingForm.phone}
                        onChange={(e) => setHotelBookingForm({ ...hotelBookingForm, phone: e.target.value })}
                        className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="traveler@example.com"
                      value={hotelBookingForm.email}
                      onChange={(e) => setHotelBookingForm({ ...hotelBookingForm, email: e.target.value })}
                      className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                        Check-in
                      </label>
                      <input
                        type="date"
                        required
                        value={hotelBookingForm.checkIn}
                        onChange={(e) => setHotelBookingForm({ ...hotelBookingForm, checkIn: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                        Check-out
                      </label>
                      <input
                        type="date"
                        required
                        value={hotelBookingForm.checkOut}
                        onChange={(e) => setHotelBookingForm({ ...hotelBookingForm, checkOut: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                        Guests
                      </label>
                      <select
                        value={hotelBookingForm.guests}
                        onChange={(e) => setHotelBookingForm({ ...hotelBookingForm, guests: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests (Couple)</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests (Family)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">
                        Room Preference
                      </label>
                      <select
                        value={hotelBookingForm.roomType}
                        onChange={(e) => setHotelBookingForm({ ...hotelBookingForm, roomType: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        <option value="Deluxe AC Room">Deluxe AC Room</option>
                        <option value="Premium Sea/Valley View">Premium Sea/Valley View</option>
                        <option value="Eco Cottage / Tent">Eco Cottage / Tent</option>
                        <option value="Executive Suite">Executive Suite</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>Confirm Free Stay Reservation (₹0)</span>
                    </button>
                    <span className="text-[10px] text-slate-400 text-center block mt-1.5">
                      ✓ Instant lock with hotel concierge • Free cancellation
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
