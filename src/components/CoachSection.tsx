import React from 'react';
import { SITE_CONFIG } from '../config/siteData';

export const CoachSection: React.FC = () => {
  return (
    <section id="dionei" className="py-16 sm:py-24 px-4 sm:px-10 bg-white text-black border-y border-neutral-200">
      <div className="max-w-4xl mx-auto">
        {/* Layout lado a lado em todas as telas (foto menor ao lado, nunca em cima) */}
        <div className="flex flex-row items-center gap-4 sm:gap-8 md:gap-12 justify-center">
          {/* Foto Menor ao Lado com Moldura Limpa e Elegante */}
          <div className="w-28 sm:w-44 md:w-56 flex-shrink-0">
            <div className="p-1.5 sm:p-2 bg-neutral-100 border-2 border-black shadow-xl">
              <div className="relative overflow-hidden bg-black border border-neutral-300">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={SITE_CONFIG.coach.photoUrl}
                    alt={`Treinador ${SITE_CONFIG.coach.name}`}
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-1.5 left-2 right-2 text-white">
                    <span className="font-mono text-[7px] sm:text-[9px] tracking-[0.2em] uppercase text-neutral-300 block">
                      TREINADOR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texto Exclusivo do Dionei (Sem menção a Black Boxing) */}
          <div className="flex-1 space-y-2 sm:space-y-4">
            <div className="w-8 sm:w-12 h-1 bg-black" />

            {/* Nome do Treinador */}
            <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-none text-black">
              {SITE_CONFIG.coach.name}
            </h2>

            {/* Atuação Escrita */}
            <div className="font-heading font-black text-xs sm:text-base md:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase text-neutral-800 space-y-0.5 sm:space-y-1">
              <p>PERSONAL TRAINER</p>
              <p>BOXE</p>
              <p>PREPARAÇÃO FÍSICA</p>
            </div>

            {/* Frase Curta */}
            <p className="text-xs sm:text-sm md:text-base text-neutral-700 font-medium leading-relaxed max-w-md pt-1">
              Treinamento focado em técnica refinada, disciplina e alta performance física.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
