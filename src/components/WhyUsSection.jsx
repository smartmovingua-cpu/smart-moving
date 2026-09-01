import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Clock, Award, Headphones, Truck, Banknote, Users, Weight, MapPin, Zap, Calculator, CheckCircle2 } from 'lucide-react';

export default function WhyUsSection() {
  const iconList = [
    <Award className="w-7 h-7 text-amber-400" />,
    <Users className="w-7 h-7 text-amber-400" />,
    <Weight className="w-7 h-7 text-amber-400" />,
    <Truck className="w-7 h-7 text-amber-400" />,
    <MapPin className="w-7 h-7 text-amber-400" />,
    <Zap className="w-7 h-7 text-amber-400" />,
    <Calculator className="w-7 h-7 text-amber-400" />,
    <Clock className="w-7 h-7 text-amber-400" />
  ];

  const items = siteConfig.whyChooseUs || siteConfig.whyUs || [];

  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
            Наші ключові переваги
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-outfit uppercase">
            ЧОМУ КЛІЄНТИ ОБИРАЮТЬ <span className="text-gradient-amber">SMART MOVING</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            8 років бездоганного досвіду перевезень та вантажних робіт у Львові та області.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  {iconList[index % iconList.length]}
                </div>
                <h3 className="text-lg font-extrabold text-white font-outfit group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-900 flex items-center gap-1.5 text-[11px] text-amber-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Гарантія якості
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
