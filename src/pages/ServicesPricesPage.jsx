import React, { useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Tag, Truck, ShieldCheck, Check, ArrowRight, ShoppingBag, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaBlock from '../components/CtaBlock';

export default function ServicesPricesPage({ onOpenOrderModal }) {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'loaders', 'moving', 'special'

  useEffect(() => {
    document.title = "Послуги та Ціни вантажників у Львові | SMART MOVING 24/7";
  }, []);

  const filteredServices = (siteConfig.services || []).filter((svc) => {
    if (!svc) return false;
    if (activeCategory === 'all') return true;
    if (activeCategory === 'loaders' && (svc.id === 'loaders' || svc.id === 'warehouse-loaders' || svc.id === 'floor-lifting')) return true;
    if (activeCategory === 'moving' && (svc.id === 'apartment-moving' || svc.id === 'office-moving' || svc.id === 'cargo-transportation')) return true;
    if (activeCategory === 'special' && (svc.id === 'furniture-assembly' || svc.id === 'rigging-work' || svc.id === 'demolition-work' || svc.id === 'garbage-removal')) return true;
    return true;
  });

  return (
    <main className="py-12 bg-slate-950 space-y-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            ПРАЙС-ЛИСТ ТА ПОСЛУГИ 24/7
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-outfit uppercase">
            ПОСЛУГИ ТА ЦІНИ <span className="text-gradient-amber">У ЛЬВОВІ</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Прозорі фіксовані тарифи без прихованих платежів. Замовляйте послуги вантажників чи вантажний автотранспорт окремо або в комплексі.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Всі 12 послуг' },
            { id: 'loaders', label: 'Вантажники & Склад' },
            { id: 'moving', label: 'Квартирні & Офісні переїзди' },
            { id: 'special', label: 'Збірка меблів, Такелаж & Демонтаж' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 border border-amber-400'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services & Price Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {(filteredServices || []).map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <h3 className="text-lg font-bold text-white font-outfit group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-extrabold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20 shrink-0">
                    {service.price}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Sub Features */}
                <div className="space-y-1.5 pt-2">
                  {(service.features || []).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-2">
                <Link
                  to={`/services/${service.id}`}
                  className="text-xs text-slate-400 hover:text-white font-semibold flex items-center gap-1"
                >
                  Детальніше <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl transition-transform active:scale-95 flex items-center gap-1.5 shadow-md shadow-amber-500/20"
                >
                  <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                  ЗАМОВИТИ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Transport Price List Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white font-outfit uppercase">
                  ТАРИФИ НА ВАНТАЖНІ АВТОМОБІЛІ
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Всі автомобілі чисто вимиті, обладнані стяжними ременями та ковдрами
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(siteConfig.transportOptions || []).map((item) => (
              <div
                key={item.id}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white font-outfit">{item.title}</h3>
                  <span className="text-xl font-black text-emerald-400 block">{item.price}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>

                <button
                  onClick={() => onOpenOrderModal(item.title)}
                  className="w-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold text-xs py-3 rounded-xl border border-emerald-500/30 transition-colors uppercase tracking-wider"
                >
                  Замовити {item.title.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CtaBlock onOpenOrderModal={onOpenOrderModal} />
    </main>
  );
}
