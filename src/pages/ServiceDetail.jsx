import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import { CheckCircle2, Clock, Truck, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import CtaBlock from '../components/CtaBlock';

export default function ServiceDetail({ onOpenOrderModal, onOpenCalculator }) {
  const { serviceId } = useParams();
  const service = (siteConfig.services || []).find((s) => s.id === serviceId);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} у Львові — Ціна від ${service.price} | SMART MOVING`;
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="py-12 bg-slate-950 space-y-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Breadcrumb & Back Link */}
        <div className="mb-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Назад до всіх послуг
          </Link>
        </div>

        {/* Hero Banner for Service */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Деталі послуги
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white font-outfit uppercase leading-tight">
              {service.title}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenOrderModal(service.title)}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all active:scale-95"
              >
                Замовити {service.title}
              </button>

              <button
                onClick={onOpenCalculator}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl border border-slate-700 transition-colors"
              >
                Калькулятор вартості
              </button>
            </div>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-400 block border-b border-slate-800 pb-2">
                Тариф на послугу:
              </span>
              <div className="text-3xl font-black text-amber-400 font-outfit">
                {service.price}
              </div>
              <p className="text-xs text-slate-400">
                Мінімальне замовлення — 2 години. Можливий готівковий та безготівковий розрахунок.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Подача протягом 25 хвилин</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>100% матеріальна гарантія</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <CtaBlock onOpenOrderModal={onOpenOrderModal} />
    </main>
  );
}
