import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Star, Quote, ThumbsUp, MessageSquare } from 'lucide-react';
import CtaBlock from '../components/CtaBlock';

export default function ReviewsPage({ onOpenOrderModal }) {
  useEffect(() => {
    document.title = "Відгуки клієнтів про вантажників у Львові | SMART MOVING";
  }, []);

  return (
    <main className="py-12 bg-slate-950 space-y-16">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            Наша репутація
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-outfit uppercase">
            ВІДГУКИ НАШИХ <span className="text-gradient-amber">КЛІЄНТІВ</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Дякуємо за ваші відгуки та довіру. Понад 4500 успішно виконаних переїздів по Львову та області.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {(siteConfig.reviews || []).map((review) => (
            <div
              key={review.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">{review.date}</span>
                </div>

                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-outfit">{review.name}</h4>
                  <span className="text-[11px] text-amber-400 font-medium">{review.service}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <ThumbsUp className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <CtaBlock onOpenOrderModal={onOpenOrderModal} />
    </main>
  );
}
