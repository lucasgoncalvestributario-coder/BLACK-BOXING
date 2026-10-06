import React from 'react';
import { SITE_CONFIG } from '../config/siteData';

export const PersonalTrainingSection: React.FC = () => {
  return (
    <section id="personalizado" className="py-16 sm:py-24 px-4 sm:px-10 bg-[#080808] text-white border-t border-neutral-900">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Título e Texto Direto */}
        <div className="max-w-2xl space-y-4">
          <div className="w-12 h-1 bg-white mb-2" />

          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.92] text-white title-impact-sweep">
            TREINO PERSONALIZADO.
          </h2>

          <p className="font-heading text-sm sm:text-lg font-bold tracking-[0.2em] uppercase text-neutral-300">
            Um treinamento direcionado ao seu objetivo.
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
            Acompanhamento individualizado exclusivo. Foco absoluto nos seus fundamentos técnicos, ritmo cardiovascular e evolução real a cada aula.
          </p>
        </div>

        {/* Fotografia Horizontal (Ocupa o site horizontalmente, sem altura excessiva) */}
        <div className="w-full relative group overflow-hidden bg-black border border-neutral-800 shadow-2xl">
          <div className="aspect-[16/7] sm:aspect-[21/8] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1800&auto=format&fit=crop"
              alt="Treinamento Personalizado 1 a 1"
              className="w-full h-full object-cover object-center filter contrast-125 grayscale group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-4 left-4 sm:left-6 right-4 flex items-end justify-between">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400 block mb-0.5">
                  ATENDIMENTO INDIVIDUAL
                </span>
                <p className="font-heading text-xs sm:text-base font-black uppercase tracking-wider text-white">
                  METODOLOGIA PERSONALIZADA & EXCLUSIVA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
