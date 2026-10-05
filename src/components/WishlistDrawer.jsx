import { X, Trash2, MapPin, ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlist, 
  onRemove, 
  onSelectDestination,
  onPlanTrip 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-lg font-display">Saved Destinations</h3>
                <p className="text-xs text-slate-400">{wishlist.length} places in your itinerary bucket</p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close wishlist"
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-700 mb-1">Your wishlist is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Click the heart icon on any waterfalls, peaks, temples, or beaches to save them for your personalized tour.
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-emerald-50/40 hover:border-emerald-200 transition-all group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onSelectDestination(item);
                    }}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h5
                          onClick={() => {
                            onClose();
                            onSelectDestination(item);
                          }}
                          className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 truncate cursor-pointer"
                        >
                          {item.title}
                        </h5>
                        <button
                          onClick={() => onRemove(item.id)}
                          aria-label="Remove item"
                          className="text-slate-400 hover:text-rose-600 transition-colors shrink-0 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                        <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                        <span>{item.district} District</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs mt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {item.category}
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectDestination(item);
                        }}
                        className="text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1 text-xs cursor-pointer"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onPlanTrip(wishlist);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 hover:from-emerald-500 hover:to-teal-500 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Build Route with Saved Places</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
