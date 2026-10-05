import { useState, useEffect } from 'react';
import { 
  Compass, 
  Heart, 
  Menu, 
  X, 
  Sun, 
  PhoneCall, 
  Sparkles,
  ChevronRight,
  User,
  LogOut,
  Ticket
} from 'lucide-react';
import OdishaLogo from './OdishaLogo';

export default function Navbar({ 
  wishlistCount, 
  bookingsCount = 0,
  onOpenWishlist, 
  onOpenPlanner,
  onNavigateHiddenGems,
  currentUser = null,
  onOpenLogin,
  onLogout
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured', href: '#featured-trails' },
    { name: '💎 Hidden Gems', href: '#hidden-gems' },
    { name: '🗺️ Map', href: '#odisha-map' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Culture & Arts', href: '#culture' },
    { name: 'Trip Cost Planner', href: '#cost-planner' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav py-2 shadow-md shadow-emerald-950/5' 
            : 'glass-nav-transparent py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Authentic Konark Sun Wheel & Temple Emblem */}
            <a 
              href="#" 
              className="focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <OdishaLogo isScrolled={isScrolled} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-xs 2xl:text-sm font-semibold transition-all duration-200 hover:text-amber-400 relative py-1 group cursor-pointer whitespace-nowrap ${
                    isScrolled ? 'text-slate-700 hover:text-emerald-700' : 'text-slate-100 hover:text-amber-300'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Desktop Right Action Icons & CTA */}
            <div className="hidden xl:flex items-center gap-2.5">
              {/* Weather Ticker */}
              <div className={`hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
                isScrolled 
                  ? 'bg-emerald-50/80 border-emerald-200/60 text-emerald-900' 
                  : 'bg-white/10 border-white/20 text-white backdrop-blur-md'
              }`}>
                <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                <span>Puri 28°C</span>
                <span className="opacity-40">•</span>
                <span>Daringbadi 18°C</span>
              </div>

              {/* Heart Icon → Visible Bookings & Saved Button */}
              <button
                onClick={onOpenWishlist}
                aria-label="Bookings & Saved Destinations"
                title="View My Bookings & Saved Destinations"
                className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                  isScrolled
                    ? 'bg-rose-50 hover:bg-rose-100/90 text-rose-700 border border-rose-200/80 shadow-rose-900/5'
                    : 'bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md hover:shadow-lg'
                }`}
              >
                <div className="relative flex items-center justify-center">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="text-xs font-bold tracking-wide">
                  Bookings
                </span>
                {(wishlistCount > 0 || bookingsCount > 0) ? (
                  <span className="px-1.5 py-0.5 min-w-[18px] text-[10px] font-black leading-none rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow flex items-center justify-center">
                    {bookingsCount > 0 ? `${bookingsCount} Trip${bookingsCount > 1 ? 's' : ''}` : `${wishlistCount} Saved`}
                  </span>
                ) : (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                    isScrolled ? 'bg-rose-200/60 text-rose-800' : 'bg-white/20 text-white/90'
                  }`}>
                    0
                  </span>
                )}
              </button>

              {/* Luxury Plan CTA */}
              <button
                onClick={onOpenPlanner}
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none shadow-md shadow-emerald-900/10 hover:shadow-emerald-700/20 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 rounded-full transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative px-3.5 py-1.5 rounded-full bg-emerald-900/90 group-hover:bg-emerald-900/70 text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Plan Trip</span>
                </div>
              </button>

              {/* Right-side Login / Traveler Profile Button */}
              {currentUser ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    aria-label="User Account"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm border ${
                      isScrolled
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-300/80 hover:bg-emerald-100'
                        : 'bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-md'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-[9px] flex items-center justify-center shadow-xs">
                      {currentUser.avatar || 'TR'}
                    </span>
                    <span className="max-w-[75px] truncate">{currentUser.name.split(' ')[0]}</span>
                  </button>

                  {/* Account Dropdown */}
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-slate-900 rounded-2xl p-2.5 shadow-2xl border border-white/15 text-white z-50 animate-fade-in">
                      <div className="px-3 py-2 border-b border-white/10">
                        <p className="text-xs font-bold text-white truncate">{currentUser.name}</p>
                        <p className="text-[10px] text-emerald-400 truncate">{currentUser.email}</p>
                      </div>
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setUserMenuOpen(false);
                            onOpenWishlist();
                          }}
                          className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-xl flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Ticket className="w-3.5 h-3.5 text-emerald-400" />
                            <span>My Bookings</span>
                          </span>
                          <span className="px-1.5 py-0.2 rounded-full bg-emerald-900/60 text-emerald-300 text-[10px] font-bold">
                            {bookingsCount}
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            setUserMenuOpen(false);
                            onOpenWishlist();
                          }}
                          className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-xl flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Heart className="w-3.5 h-3.5 text-rose-400" />
                            <span>Saved Places</span>
                          </span>
                          <span className="px-1.5 py-0.2 rounded-full bg-rose-900/60 text-rose-300 text-[10px] font-bold">
                            {wishlistCount}
                          </span>
                        </button>
                      </div>
                      <div className="pt-1 border-t border-white/10">
                        <button
                          onClick={() => {
                            setUserMenuOpen(false);
                            onLogout && onLogout();
                          }}
                          className="w-full text-left px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/15 rounded-xl flex items-center gap-2 cursor-pointer font-semibold transition-colors"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onOpenLogin}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm border ${
                    isScrolled
                      ? 'bg-slate-900 hover:bg-emerald-900 text-white border-slate-800'
                      : 'bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-md hover:shadow-lg'
                  }`}
                >
                  <User className="w-3.5 h-3.5 text-amber-300" />
                  <span>Login</span>
                </button>
              )}
            </div>

            {/* Mobile & Tablet Actions: Bookings Pill + Login + Menu Toggle */}
            <div className="flex xl:hidden items-center gap-1.5 sm:gap-2">
              <button
                onClick={onOpenWishlist}
                aria-label="Bookings & Saved"
                title="Bookings & Saved Destinations"
                className={`relative flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${
                  isScrolled 
                    ? 'bg-rose-50 text-rose-700 border border-rose-200 shadow-sm' 
                    : 'bg-white/20 text-white border border-white/30 backdrop-blur-md'
                }`}
              >
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span className="hidden sm:inline">Bookings</span>
                {(wishlistCount > 0 || bookingsCount > 0) ? (
                  <span className="px-1.5 py-0.2 min-w-[16px] bg-rose-600 text-white font-black text-[9px] rounded-full flex items-center justify-center">
                    {bookingsCount > 0 ? bookingsCount : wishlistCount}
                  </span>
                ) : (
                  <span className="sm:hidden text-[10px] text-rose-300">0</span>
                )}
              </button>

              {/* Mobile Login / User Avatar */}
              {currentUser ? (
                <button
                  onClick={onOpenLogin}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full font-black text-[10px] text-white bg-emerald-600 cursor-pointer shadow-sm flex items-center justify-center"
                >
                  {currentUser.avatar || 'TR'}
                </button>
              ) : (
                <button
                  onClick={onOpenLogin}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${
                    isScrolled ? 'bg-slate-900 text-white' : 'bg-white/20 text-white border border-white/30'
                  }`}
                >
                  <User className="w-3.5 h-3.5 text-amber-300" />
                  <span className="text-[11px] hidden sm:inline">Login</span>
                </button>
              )}

              {/* Mobile / Tablet Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors cursor-pointer ${
                  isScrolled 
                    ? 'bg-slate-100 text-slate-800 hover:bg-slate-200' 
                    : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-md'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden animate-fade-in">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="fixed top-16 right-3 left-3 sm:right-6 sm:left-6 max-w-md sm:mx-auto glass-card rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/60 text-slate-800 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold text-slate-600">Puri 28°C • Daringbadi 18°C</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                Live Status
              </span>
            </div>

            {/* Traveler Account Status in Mobile Drawer */}
            <div className="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between">
              {currentUser ? (
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                    {currentUser.avatar || 'TR'}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{currentUser.name}</p>
                    <p className="text-[10px] text-emerald-400">{currentUser.email}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-200">Traveler Portal</span>
                </div>
              )}

              {currentUser ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout && onLogout();
                  }}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 cursor-pointer"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 cursor-pointer shadow-sm"
                >
                  Log In
                </button>
              )}
            </div>

            <div className="flex flex-col space-y-3 pt-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex items-center justify-between w-full py-2.5 px-3 rounded-xl hover:bg-emerald-50 text-left text-slate-700 hover:text-emerald-800 font-medium text-sm transition-colors cursor-pointer"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200/60 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWishlist();
                }}
                className="flex items-center justify-between w-full py-2.5 px-3 rounded-xl bg-rose-50/80 hover:bg-rose-100 text-rose-800 font-bold text-sm transition-colors cursor-pointer border border-rose-200/60"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-600 fill-current" />
                  <span>Favorites &amp; Bookings</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-200 text-rose-900 font-bold">
                  {wishlistCount} saved • {bookingsCount} booked
                </span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Custom Trip Planner</span>
              </button>

              <div className="flex items-center justify-center gap-2 py-1 text-xs text-slate-500">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <span>Odisha Tourism Helpline: 1800-208-1414</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
