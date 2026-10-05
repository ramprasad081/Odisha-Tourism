import { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle
} from 'lucide-react';
import OdishaLogo from './OdishaLogo';

export default function Footer({ onCategoryClick }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <OdishaLogo size="lg" isScrolled={false} />

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Discover the soul of incredible India. From misty highlands in Koraput and roaring Similipal cascades to sacred Kalinga temples and pristine Blue Flag golden coastlines.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-400/50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-rose-400 hover:border-rose-400/50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 3: Categories & Exploration */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Explore Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {['Waterfalls', 'Hills', 'Temples', 'Beaches', 'Wildlife', 'Culture'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      if (onCategoryClick) onCategoryClick(cat);
                      const el = document.getElementById('destinations');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span className="text-emerald-500 text-xs">›</span>
                    <span>{cat}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Famous Circuits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
              Signature Circuits
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#curated-trails" className="hover:text-white transition-colors">
                  The Golden Triangle
                </a>
              </li>
              <li>
                <a href="#curated-trails" className="hover:text-white transition-colors">
                  Misty Eastern Ghats
                </a>
              </li>
              <li>
                <a href="#curated-trails" className="hover:text-white transition-colors">
                  Chilika & Marine Lagoon
                </a>
              </li>
              <li>
                <a href="#curated-trails" className="hover:text-white transition-colors">
                  Similipal Tiger Safari
                </a>
              </li>
              <li>
                <a href="#culture" className="hover:text-white transition-colors">
                  Konark Dance Festival
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Helpline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">
              Official Tourism Board
            </h4>
            <div className="space-y-3 text-xs text-slate-400 mb-5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Paryatan Bhawan, Lewis Road, Bhubaneswar, Odisha 751014</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-white">Toll-Free: 1800-208-1414</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>info@odishatourism.gov.in</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-[11px] font-semibold text-slate-300 mb-2">
                Subscribe to Seasonal Travel Journal:
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 py-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Subscribed to Odisha Travel Notes!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-l-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-r-xl text-white transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Explore Odisha. Government of Odisha Tourism Showcase.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Eco-Tourism Guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
