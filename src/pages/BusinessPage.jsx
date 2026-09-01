import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Building2, ShieldCheck, FileText, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import CtaBlock from '../components/CtaBlock';

export default function BusinessPage({ onOpenOrderModal }) {
  useEffect(() => {
    document.title = "Послуги вантажників для бізнесу та складів у Львові | SMART MOVING";
  }, []);

  return (
    <main className="py-12 bg-slate-950 space-y-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            B2B / Для корпоративних клієнтів
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-outfit uppercase leading-tight">
            ОФІСНІ ПЕРЕЇЗДИ ТА <span className="text-gradient-amber">СКТАДСЬКИЙ АУТСОРСИНГ</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Обслуговуємо компанії, магазини, ресторани та склади у Львові. Працюємо за безготівковим розрахунком з ПДВ та надаємо повний пакет документів.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-outfit">Офіційний договір</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Надаємо повний комплект бухгалтерських документів (акт виконаних робіт, договір, безготівка).
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-outfit">Нічні та вихідні зміни</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Виконуємо офісний переїзд вніч або у вихідні дні, щоб ваш бізнес не зупиняв роботу ні на хвилину.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-outfit">Матеріальна відповідальність</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Несемо 100% матеріальну відповідальність за оргтехніку, меблі, документи та серверне обладнання.
            </p>
          </div>
        </div>

        {/* B2B Services List */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-2xl font-black text-white font-outfit uppercase">
                ПОСЛУГИ ДЛЯ ЮРИДИЧНИХ ОСІБ
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Гнучкі умови співпраці та персональний менеджер об'єкта.
              </p>
            </div>

            <button
              onClick={() => onOpenOrderModal('Офісний переїзд')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-transform active:scale-95 shadow-lg shadow-amber-500/20"
            >
              Укласти договір
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Офісні переїзди будь-якого масштабу (від 2 до 200+ робочих місць)",
              "Перевезення та монтаж серверних шаф, сейфів, копірів",
              "Вантажники на склад на постійній або тимчасовій основі (аутсорсинг)",
              "Розвантаження фур, контейнерів, вагонів та розформування палет",
              "Розбірка, маркування, пакування та складання офісних меблів",
              "Вивіз пакувального сміття та старих офісних меблів"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CtaBlock onOpenOrderModal={onOpenOrderModal} />
    </main>
  );
}
