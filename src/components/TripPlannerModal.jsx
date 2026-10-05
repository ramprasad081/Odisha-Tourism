import { useState } from 'react';
import { X, Sparkles, CheckCircle2, Send } from 'lucide-react';

export default function TripPlannerModal({ isOpen, onClose, initialData = {}, onAddBooking }) {
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    districts: initialData.district || 'Puri & Koraput',
    startDate: '',
    interests: ['Waterfalls', 'Heritage Temples'],
    notes: ''
  });

  if (!isOpen) return null;

  const toggleInterest = (interest) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      return {
        ...prev,
        interests: exists 
          ? prev.interests.filter(i => i !== interest)
          : [...prev.interests, interest]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRefId = `#OD-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(newRefId);
    if (onAddBooking) {
      onAddBooking({
        id: `booking-${Date.now()}`,
        refId: newRefId,
        destinationId: 'custom-itinerary',
        destinationTitle: initialData.notes ? `Custom Tour: ${initialData.notes.slice(0, 35)}...` : 'Custom Odisha Circuit',
        district: formData.districts || 'Multi-District Loop',
        category: formData.interests[0] || 'Culture',
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
        isUnderrated: false,
        date: formData.startDate || new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0],
        guests: 2,
        travelerName: formData.name,
        phone: formData.phone,
        email: formData.email,
        packageStyle: 'Personalized Custom Itinerary',
        totalCost: 12500,
        status: 'Active Inquiry',
        createdAt: new Date().toISOString(),
        notes: formData.notes
      });
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 my-8">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">Craft Your Odisha Journey</h3>
              <p className="text-xs text-emerald-200">Bespoke itineraries curated by certified Odisha Tourism guides</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content / Form */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-slate-900">
                Itinerary Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || 'Traveler'}</strong>! Our senior travel designer is preparing your custom schedule with luxury accommodations and private transport.
              </p>
              <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                Reference ID: {refId}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Interest Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                  Select Your Main Travel Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Waterfalls', 'Misty Hills', 'Heritage Temples', 'Blue Flag Beaches', 'Wildlife Safaris', 'Tribal Culture', 'Odia Gastronomy'].map((interest) => {
                    const active = formData.interests.includes(interest);
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          active
                            ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/20'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {active ? '✓ ' : '+ '}{interest}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grid 2-col inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Mishra"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="traveler@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Special Preferences or Specific Places
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. Want to visit Barehipani Falls, experience Jagannath Mahaprasad, and stay in eco-cottages in Daringbadi..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>Submit Personalized Request</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
