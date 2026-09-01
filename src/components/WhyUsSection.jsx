import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Clock, Award, Headphones, Truck, Banknote } from 'lucide-react';

export default function WhyUsSection() {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-amber-400" />,
    Clock: <Clock className="w-8 h-8 text-amber-400" />,
    Award: <Award className="w-8 h-8 text-amber-400" />,
    Headphones: <Headphones className="w-8 h-8 text-amber-400" />,
    Truck: <Truck className="w-8 h-8 text-amber-400" />,
    Banknote: <Banknote className="w-8 h-8 text-amber-400" />
  };

  return (
    <section className="py-16 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            Наші переваги
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-outfit uppercase">
            ЧОМУ КЛІЄНТИ ОБИРАЮТЬ <span className="text-gradient-amber">SMART MOVING</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Працюємо швидко, відповідально та дбайливо ставимося до кожного майна.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(siteConfig.whyUs || []).map((item) => (
            <div
              key={item.id}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all hover:-translate-y-1 shadow-lg group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconMap[item.icon] || <ShieldCheck className="w-8 h-8 text-amber-400" />}
              </div>
              <h3 className="text-lg font-bold text-white font-outfit mb-2 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
