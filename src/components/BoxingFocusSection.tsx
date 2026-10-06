import React from 'react';
import { BrandLogo } from './BrandLogo';

export const BoxingFocusSection: React.FC = () => {
  return (
    <section id="boxe" className="py-12 sm:py-16 px-4 sm:px-8 bg-white text-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Logo Oficial Preta da Black Boxing sobre Fundo Branco */}
        <div className="mb-3">
          <BrandLogo variant="dark" className="h-12 sm:h-16 w-auto" />
        </div>

        {/* Título Centralizado com Forte Presença */}
        <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.94] text-black mb-3">
          BOXE NÃO É SÓ DAR SOCO.
        </h2>

        {/* Subtítulo Conciso */}
        <p className="font-heading text-xs sm:text-base font-bold tracking-[0.2em] uppercase text-neutral-800 mb-6 max-w-lg">
          Técnica, disciplina, condicionamento e estratégia.
        </p>

        {/* Fotografia de Altura Baixa/Horizontal, Sem Poluição Visual */}
        <div className="w-full relative group overflow-hidden bg-black shadow-lg">
          <div className="aspect-[21/9] sm:aspect-[24/9] relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1800&auto=format&fit=crop"
              alt="Treinamento de Boxe na Black Boxing"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className="w-full h-full object-cover filter contrast-125 grayscale group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
