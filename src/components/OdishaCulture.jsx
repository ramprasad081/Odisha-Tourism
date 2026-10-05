import { Sparkles, Palette, Music, Utensils, Award } from 'lucide-react';

const CULTURAL_PILLARS = [
  {
    title: "Pattachitra & Stone Carving",
    tagline: "Cloth Scroll Art dating back 2,500 years",
    description: "Intricate mythological stories hand-painted using natural mineral colors on treated cloth scrolls, alongside rock-hewn stone sculptures continuing the Konark legacy.",
    icon: Palette,
    badge: "GI Tagged Art",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Odissi Classical Dance",
    tagline: "Poetry in Motion sculpted in stone",
    description: "One of the oldest surviving classical dance forms of India, originating in sacred temples where dancers emulate the sinuous postures of temple relief sculptures.",
    icon: Music,
    badge: "Classical Heritage",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Culinary Heritage & Chhena Poda",
    tagline: "India's first baked cheese dessert & Mahaprasad",
    description: "Savor the caramelized sweetness of Chhena Poda, the 56 sacred delicacies of Jagannath Temple Mahaprasad, and fresh coastal delicacies from Chilika.",
    icon: Utensils,
    badge: "Gastronomy",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Tarakasi - Cuttack Silver Filigree",
    tagline: "Spun silver threads woven into fine gossamer",
    description: "Centuries-old artisanal technique of transforming gossamer threads of pure silver into celestial jewelry, royal chariots, and ornate peacock motifs.",
    icon: Award,
    badge: "UNESCO Recognized",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
  }
];

export default function OdishaCulture() {
  return (
    <section id="culture" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Timeless Traditions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display">
              The Living Soul of <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">Odisha</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed">
            Beyond scenic vistas, Odisha cradles one of the world's most vibrant ancient civilizations with master artisans, sacred cuisines, and classical performing arts.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CULTURAL_PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wider shadow">
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-xl bg-emerald-500/90 backdrop-blur-md flex items-center justify-center text-slate-950 shadow-md">
                    <Icon className="w-4 h-4 text-slate-950" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400 mb-2">
                      {item.tagline}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                    <span>Odisha Heritage Board</span>
                    <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
