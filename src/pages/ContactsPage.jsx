import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight } from 'lucide-react';
import CtaBlock from '../components/CtaBlock';

export default function ContactsPage({ onOpenOrderModal }) {
  useEffect(() => {
    document.title = "Контакти вантажників у Львові 24/7 | SMART MOVING (+380990821475)";
  }, []);

  return (
    <main className="py-12 bg-slate-950 space-y-16">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            Контакти та Диспетчерська
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-outfit uppercase">
            ЗВ'ЯЖІТЬСЯ З НАМИ <span className="text-gradient-amber">24/7</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Диспетчер цілодобово на зв'язку. Приймаємо термінові дзвінки та прораховуємо вартість перевезення за 2 хвилини.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Phone Numbers Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-outfit">Телефони диспетчера</h3>
              <p className="text-xs text-slate-400">Телефонуйте у будь-який час — працюємо без вихідних:</p>
              
              <div className="space-y-3 pt-2">
                {(siteConfig.phones || []).map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-colors group"
                  >
                    <span className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{phone.display}</span>
                    <span className="text-[10px] text-amber-400 font-extrabold uppercase bg-amber-500/10 px-2 py-0.5 rounded">Дзвінок</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Подача авто за 20-30 хв по Львову</span>
            </div>
          </div>

          {/* Messengers Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-outfit">Месенджери</h3>
              <p className="text-xs text-slate-400">Надішліть фото або відео вантажу для точного розрахунку:</p>

              <div className="space-y-3 pt-2">
                <a
                  href={siteConfig.messengers.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-sky-600/10 border border-sky-500/30 hover:bg-sky-600/20 transition-colors group"
                >
                  <span className="text-sm font-bold text-sky-400 flex items-center gap-2">
                    <Send className="w-4 h-4" /> Telegram
                  </span>
                  <span className="text-xs text-sky-400 font-semibold">@Oleksandrovych26 ➔</span>
                </a>

                <a
                  href={siteConfig.messengers.viber}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-purple-600/10 border border-purple-500/30 hover:bg-purple-600/20 transition-colors group"
                >
                  <span className="text-sm font-bold text-purple-400 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> Viber
                  </span>
                  <span className="text-xs text-purple-400 font-semibold">+380 99 082 14 75 ➔</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Відповідаємо у чаті за 1-2 хвилини</span>
            </div>
          </div>

          {/* Location & Coverage Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-outfit">Географія та Базування</h3>
              <p className="text-xs text-slate-400">Обслуговуємо місто Львів та уся область:</p>

              <div className="space-y-2 text-xs text-slate-300 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <p className="font-bold text-amber-400">📍 Райони Львова:</p>
                <p className="text-slate-400 leading-relaxed">
                  Галицький, Франківський, Сихівський, Личаківський, Шевченківський, Залізничний.
                </p>
                <p className="font-bold text-amber-400 pt-2">📍 Область:</p>
                <p className="text-slate-400 leading-relaxed">
                  Брюховичі, Винники, Зимна Вода, Сокільники, Стрий, Дрогобич, Самбір, Червоноград, Жовква та ін.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenOrderModal()}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            >
              Замовити виїзд вантажників
            </button>
          </div>

        </div>

      </div>

      <CtaBlock onOpenOrderModal={onOpenOrderModal} />
    </main>
  );
}
