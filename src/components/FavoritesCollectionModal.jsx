import { useState } from 'react';
import { 
  X, 
  Trash2, 
  MapPin, 
  ArrowRight, 
  Heart, 
  Sparkles, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Ticket, 
  Plus, 
  Clock, 
  DollarSign, 
  AlertCircle,
  Eye,
  Send,
  Flame,
  ChevronRight
} from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export default function FavoritesCollectionModal({ 
  isOpen, 
  onClose, 
  wishlist = [], 
  bookings = [], 
  onRemoveFromWishlist, 
  onSelectDestination,
  onAddBooking,
  onCancelBooking,
  onPlanTrip,
  initialTab = 'saved',
  currentUser = null
}) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'saved' | 'bookings'
  const [bookingModalItem, setBookingModalItem] = useState(null); // destination being booked
  const [bookingForm, setBookingForm] = useState({
    destinationId: '',
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: 2,
    packageStyle: 'eco', // 'standard' | 'eco' | 'luxury'
    notes: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [recentBookingRef, setRecentBookingRef] = useState('');
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  if (!isOpen) return null;

  const packageRates = {
    standard: { name: 'Standard Guided Tour', rate: 0, desc: 'Certified local guide, entry tickets, and standard cab transport.' },
    eco: { name: 'Eco-Retreat & Forest Camp', rate: 0, desc: 'Forest department eco-cottage stay, nature safari, and local Odia meals.' },
    luxury: { name: 'Signature Luxury Resort', rate: 0, desc: '4-star beachfront/resort stay, private SUV, and gourmet VIP access.' }
  };

  const handleStartBooking = (dest) => {
    setBookingModalItem(dest);
    setBookingForm({
      destinationId: dest.id,
      name: currentUser?.name || '',
      phone: currentUser?.phone || '',
      email: currentUser?.email || '',
      date: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0],
      guests: 2,
      packageStyle: 'eco',
      notes: ''
    });
    setBookingConfirmed(false);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const dest = bookingModalItem || DESTINATIONS.find(d => d.id === bookingForm.destinationId) || DESTINATIONS[0];
    const selectedPkg = packageRates[bookingForm.packageStyle];
    const totalCost = Number(bookingForm.guests) * selectedPkg.rate;
    const refCode = `#OD-${Math.floor(100000 + Math.random() * 900000)}`;

    const newBooking = {
      id: `booking-${Date.now()}`,
      refId: refCode,
      destinationId: dest.id,
      destinationTitle: dest.title,
      district: dest.district,
      category: dest.category,
      image: dest.image,
      isUnderrated: dest.isUnderrated,
      date: bookingForm.date,
      guests: Number(bookingForm.guests),
      travelerName: bookingForm.name,
      phone: bookingForm.phone,
      email: bookingForm.email,
      packageStyle: selectedPkg.name,
      ratePerPerson: selectedPkg.rate,
      totalCost: totalCost,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      notes: bookingForm.notes
    };

    if (onAddBooking) {
      onAddBooking(newBooking);
    }

    setRecentBookingRef(refCode);
    setBookingConfirmed(true);

    setTimeout(() => {
      setBookingModalItem(null);
      setBookingConfirmed(false);
      setActiveTab('bookings');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fade-in">
      {/* Click-away backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-rose-400 shrink-0 shadow-inner">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  Favorites Collection &amp; Bookings Hub
                </h3>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-amber-300 font-bold">
                  Odisha Tourism
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Manage your saved wishlist, explore booked itineraries, and reserve tours directly
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Switches */}
        <div className="flex items-center justify-between px-5 sm:px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-200/80 shrink-0">
          <div className="flex items-center gap-2">
            {/* Saved Destinations Tab */}
            <button
              onClick={() => {
                setActiveTab('saved');
                setBookingModalItem(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'saved'
                  ? 'bg-white text-rose-600 shadow-sm border border-slate-200/80 scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${activeTab === 'saved' ? 'fill-current' : ''}`} />
              <span>Saved Destinations</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'saved' ? 'bg-rose-100 text-rose-700' : 'bg-slate-200 text-slate-600'}`}>
                {wishlist.length}
              </span>
            </button>

            {/* My Bookings Tab */}
            <button
              onClick={() => {
                setActiveTab('bookings');
                setBookingModalItem(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'bookings'
                  ? 'bg-white text-emerald-800 shadow-sm border border-slate-200/80 scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Ticket className="w-3.5 h-3.5 text-emerald-600" />
              <span>My Bookings</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === 'bookings' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}`}>
                {bookings.length}
              </span>
            </button>
          </div>

          {/* Direct "+ New Booking" shortcut */}
          <button
            onClick={() => handleStartBooking(wishlist[0] || DESTINATIONS[0])}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-sm hover:from-emerald-500 hover:to-teal-500 transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Book A Tour</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* TAB 1: SAVED DESTINATIONS */}
          {activeTab === 'saved' && (
            <div>
              {wishlist.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center mx-auto mb-4 border border-rose-100">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-slate-800 mb-1">
                    Your Wishlist is Empty
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6 leading-relaxed">
                    Click the heart icon on any famous spot or hidden gem to save them here and compare them or book private guided tours.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Explore Destinations
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Saved Summary Bar */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-50/70 via-white to-emerald-50/70 border border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-rose-500" />
                      <span className="font-semibold text-slate-700">
                        {wishlist.length} destinations ready in your dream bucket list
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        if (onPlanTrip) onPlanTrip(wishlist);
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Book Multi-Stop Itinerary ({wishlist.length})</span>
                    </button>
                  </div>

                  {/* Saved Destinations Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {wishlist.map((dest) => (
                      <div
                        key={dest.id}
                        className="p-3.5 rounded-2xl border border-slate-200/80 bg-white hover:border-emerald-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          {/* Image & Badges */}
                          <div className="relative h-40 rounded-xl overflow-hidden mb-3 bg-slate-100">
                            <img
                              src={dest.image}
                              alt={dest.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            
                            {/* Badges */}
                            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                              {dest.isUnderrated ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs">
                                  <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                                  <span>💎 Hidden Gem</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-400 text-slate-950 shadow-xs">
                                  <Flame className="w-2.5 h-2.5 text-red-600" />
                                  <span>🔥 Famous Spot</span>
                                </span>
                              )}
                              <span className="px-2 py-0.5 rounded-full bg-white/90 text-slate-800 text-[9px] font-bold">
                                {dest.category}
                              </span>
                            </div>

                            {/* Remove button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onRemoveFromWishlist(dest.id);
                              }}
                              title="Remove from saved"
                              className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 hover:bg-rose-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>

                            {/* Location & Rating */}
                            <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px]">
                              <span className="flex items-center gap-1 font-medium">
                                <MapPin className="w-3 h-3 text-amber-400" />
                                {dest.district} District
                              </span>
                              <span className="font-bold text-amber-300">
                                ★ {dest.rating}
                              </span>
                            </div>
                          </div>

                          {/* Title & Desc */}
                          <h4 
                            onClick={() => {
                              onClose();
                              onSelectDestination(dest);
                            }}
                            className="font-bold text-slate-900 text-base font-display group-hover:text-emerald-700 cursor-pointer truncate mb-1"
                          >
                            {dest.title}
                          </h4>

                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                            {dest.shortDesc}
                          </p>

                          {/* Info tags */}
                          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3 bg-slate-50 p-2 rounded-xl">
                            <span>Season: <strong className="text-slate-800">{dest.bestTime}</strong></span>
                            <span>Pass: <strong className="text-emerald-700">{dest.entryFee}</strong></span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-2.5 border-t border-slate-100 flex items-center gap-2">
                          <button
                            onClick={() => {
                              onClose();
                              onSelectDestination(dest);
                            }}
                            className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Details</span>
                          </button>

                          <button
                            onClick={() => handleStartBooking(dest)}
                            className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
                          >
                            <Ticket className="w-3.5 h-3.5" />
                            <span>Book Tour</span>
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: MY BOOKINGS */}
          {activeTab === 'bookings' && (
            <div>
              {bookings.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                    <Ticket className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-slate-800 mb-1">
                    No Bookings Yet
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6 leading-relaxed">
                    You haven&apos;t booked any destinations or itineraries yet. Pick any saved place from your favorites and click &ldquo;Book Tour&rdquo; to see confirmed bookings here!
                  </p>
                  <button
                    onClick={() => setActiveTab('saved')}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    View Saved Places ({wishlist.length})
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Bookings Status Bar */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between text-xs text-emerald-900">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold">
                        You have {bookings.length} active/confirmed bookings in Odisha
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                      Odisha Tourism Verified
                    </span>
                  </div>

                  {/* Bookings List */}
                  <div className="space-y-3">
                    {bookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="p-4 rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-300 shadow-sm transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        {/* Left Info: Image & Titles */}
                        <div className="flex items-start gap-3.5">
                          <img
                            src={booking.image || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"}
                            alt={booking.destinationTitle}
                            className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-100"
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                                {booking.refId}
                              </span>
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-600 text-white">
                                ✓ {booking.status || 'Confirmed'}
                              </span>
                            </div>

                            <h4 className="font-bold text-slate-900 text-base font-display truncate">
                              {booking.destinationTitle}
                            </h4>

                            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 mt-1">
                              <span className="flex items-center gap-1 font-medium">
                                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                                {booking.date || 'Flexible Dates'}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1 font-medium">
                                <Users className="w-3.5 h-3.5 text-amber-500" />
                                {booking.guests || 2} Travelers
                              </span>
                              <span>•</span>
                              <span className="font-semibold text-emerald-700">
                                {booking.packageStyle}
                              </span>
                            </div>

                            <p className="text-[11px] text-slate-500 mt-1">
                              Lead Traveler: <strong>{booking.travelerName || 'Guest'}</strong> • {booking.phone || booking.email}
                            </p>
                          </div>
                        </div>

                        {/* Right: Cost & Actions */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 shrink-0 gap-2">
                          <div className="text-left sm:text-right">
                            <span className="text-[10px] uppercase font-bold text-slate-600 block">
                              Total Cost
                            </span>
                            <span className="text-lg font-extrabold text-emerald-600 font-display">
                              {booking.totalCost === 0 ? 'FREE (₹0)' : `₹${booking.totalCost ? booking.totalCost.toLocaleString('en-IN') : '0'}`}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedVoucher(booking)}
                              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                            >
                              Voucher
                            </button>

                            {onCancelBooking && (
                              <button
                                onClick={() => {
                                  if (confirm(`Are you sure you want to cancel booking ${booking.refId}?`)) {
                                    onCancelBooking(booking.id);
                                  }
                                }}
                                className="px-2.5 py-1.5 rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-colors cursor-pointer"
                                title="Cancel booking"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* INLINE BOOKING DRAWER / MODAL */}
          {bookingModalItem && (
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 text-white border border-emerald-500/40 shadow-2xl relative animate-fade-in">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h4 className="text-base font-bold font-display text-white">
                      Book Tour to {bookingModalItem.title}
                    </h4>
                    <p className="text-xs text-slate-300">
                      Select travel style, guests, and dates for your personalized journey
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setBookingModalItem(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {bookingConfirmed ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-400/40 animate-pulse">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-white">
                    Booking Confirmed! Reference: {recentBookingRef}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your reservation has been added to <strong>My Bookings</strong>. An Odisha Tourism certified coordinator will WhatsApp the details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConfirmBooking} className="space-y-4 text-xs">
                  {/* Select Tour Style Cards */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-2">
                      Choose Your Travel Style
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {Object.entries(packageRates).map(([key, pkg]) => {
                        const isSelected = bookingForm.packageStyle === key;
                        return (
                          <div
                            key={key}
                            onClick={() => setBookingForm({ ...bookingForm, packageStyle: key })}
                            className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-950/70 border-emerald-400 ring-2 ring-emerald-500/30'
                                : 'bg-slate-800/60 border-white/10 hover:border-white/30'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-white text-xs">{pkg.name}</span>
                              <span className="font-extrabold text-amber-300">₹{pkg.rate.toLocaleString('en-IN')}/p</span>
                            </div>
                            <p className="text-[10px] text-slate-300 leading-snug">
                              {pkg.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Traveler Details Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Srikant Mohanty"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">WhatsApp / Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="traveler@example.com"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Travel Date</label>
                      <input
                        type="date"
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Guests Selector & Cost Summary */}
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Number of Travelers</label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 6, 8].map((num) => (
                          <button
                            type="button"
                            key={num}
                            onClick={() => setBookingForm({ ...bookingForm, guests: num })}
                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              bookingForm.guests === num
                                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Booking Fee</span>
                      <span className="text-xl font-extrabold text-emerald-400 font-display">
                        FREE (₹0)
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setBookingModalItem(null)}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-transform active:scale-95 cursor-pointer"
                    >
                      Confirm Free Booking
                    </button>
                  </div>

                </form>
              )}
            </div>
          )}

        </div>

        {/* Voucher Preview Modal */}
        {selectedVoucher && (
          <div className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white text-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-700">Official Travel Voucher</span>
                  <h4 className="font-extrabold text-base font-display text-slate-900">Odisha Tourism Confirmation</h4>
                </div>
                <button
                  onClick={() => setSelectedVoucher(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Reference:</span>
                  <strong className="text-slate-900">{selectedVoucher.refId}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <strong className="text-slate-900">{selectedVoucher.destinationTitle}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Travel Date:</span>
                  <strong>{selectedVoucher.date}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Guests:</span>
                  <strong>{selectedVoucher.guests} Person(s)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tour Style:</span>
                  <strong>{selectedVoucher.packageStyle}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 text-sm">
                  <span className="font-bold text-slate-700">Total Price:</span>
                  <strong className="text-emerald-700 font-extrabold">{selectedVoucher.totalCost === 0 ? 'FREE (₹0)' : `₹${selectedVoucher.totalCost?.toLocaleString('en-IN')}`}</strong>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                Show this voucher code <strong>{selectedVoucher.refId}</strong> to the certified guide or hotel reception upon arrival.
              </p>

              <button
                onClick={() => setSelectedVoucher(null)}
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs cursor-pointer"
              >
                Close Voucher
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
