import { useState, useMemo, useEffect } from 'react';
import { 
  RotateCcw, 
  Compass,
  CheckCircle,
  Star,
  Sparkles,
  Flame
} from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import DestinationCard from './components/DestinationCard';
import DestinationModal from './components/DestinationModal';
import CuratedTrails from './components/CuratedTrails';
import FamousVsHiddenGems from './components/FamousVsHiddenGems';
import InteractiveOdishaMap from './components/InteractiveOdishaMap';
import OdishaCulture from './components/OdishaCulture';
import CostPlanner from './components/CostPlanner';
import FavoritesCollectionModal from './components/FavoritesCollectionModal';
import TripPlannerModal from './components/TripPlannerModal';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

import { DESTINATIONS, CATEGORIES } from './data/destinations';

function App() {
  // State for Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [spotTypeFilter, setSpotTypeFilter] = useState('all'); // 'all' | 'famous' | 'hidden-gem'
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  // State for Modals and Drawers
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [destinationInitialTab, setDestinationInitialTab] = useState('details');

  const handleOpenDestination = (dest, initialTab = 'details') => {
    if (dest) {
      setSelectedDestination(dest);
      setDestinationInitialTab(initialTab || 'details');
    }
  };

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [plannerInitialData, setPlannerInitialData] = useState({});
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  // Authenticated User State (persisted in localStorage)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('explore_odisha_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Wishlist State (persisted in localStorage)
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('explore_odisha_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Bookings State (persisted in localStorage)
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('explore_odisha_bookings');
      if (saved) return JSON.parse(saved);
      // Helpful default confirmed booking to demonstrate the feature immediately
      return [
        {
          id: 'booking-init-1',
          refId: '#OD-592810',
          destinationId: 'golden-beach-puri',
          destinationTitle: 'Golden Beach Puri & Sacred Coast',
          district: 'Puri',
          category: 'Beaches',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
          isUnderrated: false,
          date: '2026-10-15',
          guests: 2,
          travelerName: 'Siddhant Sharma',
          phone: '+91 98765 12345',
          email: 'traveler@odisha.com',
          packageStyle: 'Signature Luxury Resort',
          totalCost: 0,
          status: 'Confirmed',
          createdAt: '2026-09-18T10:00:00Z',
          notes: 'Beachfront sunrise tour and Konark coastal pass'
        }
      ];
    } catch {
      return [];
    }
  });

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  useEffect(() => {
    try {
      localStorage.setItem('explore_odisha_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('explore_odisha_bookings', JSON.stringify(bookings));
    } catch {
      // ignore
    }
  }, [bookings]);

  // Toggle Destination in Wishlist
  const handleToggleWishlist = (destination) => {
    const exists = wishlist.some((item) => item.id === destination.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== destination.id));
      showToast(`Removed "${destination.title}" from saved favorites`);
    } else {
      setWishlist((prev) => [...prev, destination]);
      showToast(`Added "${destination.title}" to saved favorites`);
    }
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddBooking = (newBooking) => {
    setBookings((prev) => [newBooking, ...prev]);
    showToast(`Booking ${newBooking.refId} confirmed for "${newBooking.destinationTitle}"!`);
  };

  const handleCancelBooking = (bookingId) => {
    const found = bookings.find(b => b.id === bookingId);
    setBookings((prev) => prev.filter(b => b.id !== bookingId));
    if (found) {
      showToast(`Cancelled booking ${found.refId}`);
    }
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    try {
      localStorage.setItem('explore_odisha_user', JSON.stringify(userData));
    } catch {
      // ignore
    }
    showToast(`Welcome back, ${userData.name}!`);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('explore_odisha_user');
    } catch {
      // ignore
    }
    showToast('Signed out successfully.');
  };

  // Filtered destinations calculation
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      // Spot Type filter (Famous vs Hidden Gem)
      if (spotTypeFilter === 'famous' && item.isUnderrated) {
        return false;
      }
      if (spotTypeFilter === 'hidden-gem' && !item.isUnderrated) {
        return false;
      }
      // Featured only filter
      if (onlyFeatured && !item.isFeatured) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // District filter
      if (selectedDistrict !== 'All Districts' && item.district !== selectedDistrict) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDistrict = item.district.toLowerCase().includes(query);
        const matchesDesc = item.shortDesc.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(query));
        const matchesGem = item.isUnderrated && ('hidden gem underrated'.includes(query));
        const matchesFamous = !item.isUnderrated && ('famous iconic landmark'.includes(query));
        if (!matchesTitle && !matchesDistrict && !matchesDesc && !matchesCategory && !matchesTags && !matchesGem && !matchesFamous) {
          return false;
        }
      }
      return true;
    });
  }, [spotTypeFilter, onlyFeatured, selectedCategory, selectedDistrict, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDistrict('All Districts');
    setSelectedCategory('all');
    setSpotTypeFilter('all');
    setOnlyFeatured(false);
  };

  const scrollToDestinations = () => {
    const section = document.getElementById('destinations');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHiddenGems = () => {
    const section = document.getElementById('hidden-gems');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTrail = (trail) => {
    setPlannerInitialData({
      interests: [trail.category],
      notes: `Interested in booking the "${trail.title}" (${trail.route}) - ${trail.duration}`,
    });
    setIsPlannerOpen(true);
  };

  const handleBookCustomPlan = (customPlan) => {
    setPlannerInitialData({
      days: customPlan.days,
      guests: customPlan.guests,
      notes: `Selected Plan: ${customPlan.travelStyle} for ${customPlan.days} days (Total approx: ₹${customPlan.totalCost.toLocaleString('en-IN')})`,
    });
    setIsPlannerOpen(true);
  };

  const isAnyFilterActive = searchQuery !== '' || 
                            selectedDistrict !== 'All Districts' || 
                            selectedCategory !== 'all' || 
                            spotTypeFilter !== 'all' || 
                            onlyFeatured;

  const famousCount = DESTINATIONS.filter(d => !d.isUnderrated).length;
  const hiddenGemCount = DESTINATIONS.filter(d => d.isUnderrated).length;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fcfdfd] text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/95 text-white shadow-2xl backdrop-blur-md border border-slate-700 text-xs font-semibold">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Transparent / Adaptive Glassmorphism Navbar with Heart -> Favorites & Bookings and Login */}
      <Navbar
        wishlistCount={wishlist.length}
        bookingsCount={bookings.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenPlanner={() => {
          setPlannerInitialData({});
          setIsPlannerOpen(true);
        }}
        onNavigateHiddenGems={scrollToHiddenGems}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Full-Screen Hero Section */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onExploreClick={scrollToDestinations}
        onExploreHiddenGems={() => {
          setSpotTypeFilter('hidden-gem');
          scrollToHiddenGems();
        }}
      />

      {/* Floating Metrics Stats Banner */}
      <StatsBanner />

      {/* Featured Signature Curated Trails Section with Nearby Explorer */}
      <CuratedTrails 
        onSelectTrail={handleSelectTrail} 
        onSelectDestination={handleOpenDestination} 
        onAddBooking={handleAddBooking}
      />

      {/* Famous Places vs. Underrated Locations Showcase */}
      <FamousVsHiddenGems 
        onSelectDestination={handleOpenDestination} 
        onAddBooking={handleAddBooking}
      />

      {/* Interactive Odisha Map with District Attractions Explorer */}
      <InteractiveOdishaMap
        onSelectDestination={handleOpenDestination}
        onBookDestination={handleOpenDestination}
        onToggleWishlist={handleToggleWishlist}
        wishlist={wishlist}
        onFilterByDistrict={(districtName) => {
          setSelectedDistrict(districtName);
          scrollToDestinations();
        }}
      />

      {/* Trending Destinations Section */}
      <section id="destinations" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2.5 border border-emerald-200/60">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span>Comprehensive Travel Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
              Explore <span className="text-emerald-700">Famous Icons &amp; Hidden Gems</span>
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mt-2 leading-relaxed">
              From global tourist magnets to quiet, crowd-free sanctuaries across Odisha&apos;s 30 districts.
            </p>
          </div>

          {/* Reset Filters when active */}
          {isAnyFilterActive && (
            <div className="flex items-center gap-3">
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Spot Type Switcher: All vs Famous Landmarks vs Hidden Gems */}
        <div className="flex flex-wrap items-center gap-2 mb-6 p-1.5 bg-slate-100/90 rounded-2xl w-fit border border-slate-200/80 shadow-xs">
          <button
            onClick={() => setSpotTypeFilter('all')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              spotTypeFilter === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>All Destinations</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-100 font-bold text-slate-600">
              {DESTINATIONS.length}
            </span>
          </button>

          <button
            onClick={() => setSpotTypeFilter('famous')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              spotTypeFilter === 'famous'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-red-600" />
            <span>🔥 Famous Landmarks</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${spotTypeFilter === 'famous' ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-200 text-slate-600'}`}>
              {famousCount}
            </span>
          </button>

          <button
            onClick={() => setSpotTypeFilter('hidden-gem')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              spotTypeFilter === 'hidden-gem'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>💎 Hidden Gems (Underrated)</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${spotTypeFilter === 'hidden-gem' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
              {hiddenGemCount}
            </span>
          </button>
        </div>

        {/* Category Filter Chips with "Featured Only" toggle */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          
          {/* Featured Only Special Button */}
          <button
            onClick={() => setOnlyFeatured(!onlyFeatured)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap shadow-sm cursor-pointer ${
              onlyFeatured
                ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-amber-500/30 scale-105 ring-2 ring-amber-300'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${onlyFeatured ? 'fill-current' : 'text-amber-500'}`} />
            <span>★ Featured Only</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
              onlyFeatured ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-100 text-slate-500'
            }`}>
              {DESTINATIONS.filter(d => d.isFeatured).length}
            </span>
          </button>

          {/* Category Chips */}
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all' 
              ? DESTINATIONS.length 
              : DESTINATIONS.filter(d => d.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap shadow-sm cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-emerald-700/20 scale-105'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Destination Cards Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                isWishlisted={wishlist.some((item) => item.id === destination.id)}
                onToggleWishlist={handleToggleWishlist}
                onSelect={handleOpenDestination}
              />
            ))}
          </div>
        ) : (
          /* Empty State when no results match */
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300 p-8">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-800 mb-2">
              No matching destinations found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
              We couldn&apos;t find any places matching your current criteria. Try resetting filters to explore all famous and hidden destinations.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </section>

      {/* Living Soul of Odisha (Culture, Dance, Art & Cuisine) */}
      <OdishaCulture />

      {/* Interactive Trip Cost Calculator & Estimator */}
      <CostPlanner onBookCustomPlan={handleBookCustomPlan} />

      {/* Footer with State Tourism Board info and Newsletter */}
      <Footer onCategoryClick={(cat) => setSelectedCategory(cat)} />

      {/* Destination In-depth Details Modal */}
      {selectedDestination && (
        <DestinationModal
          destination={selectedDestination}
          initialTab={destinationInitialTab}
          onClose={() => setSelectedDestination(null)}
          isWishlisted={wishlist.some((item) => item.id === selectedDestination.id)}
          onToggleWishlist={handleToggleWishlist}
          onSelectDestination={handleOpenDestination}
          onAddBooking={handleAddBooking}
        />
      )}

      {/* Favorites Collection & Bookings Hub (Opened by Heart Icon) */}
      <FavoritesCollectionModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        bookings={bookings}
        currentUser={currentUser}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onSelectDestination={handleOpenDestination}
        onAddBooking={handleAddBooking}
        onCancelBooking={handleCancelBooking}
        onPlanTrip={(savedItems) => {
          setPlannerInitialData({
            notes: `Saved Bucket: ${savedItems.map(i => i.title).join(', ')}`,
          });
          setIsPlannerOpen(true);
        }}
      />

      {/* Trip Inquiry & Planner Modal */}
      <TripPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        initialData={plannerInitialData}
        onAddBooking={handleAddBooking}
      />

      {/* Traveler Login & Authentication Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />

    </div>
  );
}

export default App;
