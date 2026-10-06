import React, { useEffect, useState } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenWhatsAppModal: (optionId?: string) => void;
  onExploreTrainings: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsAppModal,
  onExploreTrainings,
}) => {
  // Inicializado em 3 para que o título apareça 100% imediatamente assim que o site abrir
  const [step] = useState(3);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pb-12 sm:pb-20 pt-28 sm:pt-36 px-4 sm:px-10 overflow-hidden bg-black text-white text-center"
    >
      {/* Background Cinematográfico Oficial: Foto Mais Acesa, Colorida e Nítida */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/fVVdc1xd/photo-1575747515871-2e323827539e.avif"
          alt="Treino Real Black Boxing"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-110 saturate-115 scale-100 transform motion-safe:transition-transform motion-safe:duration-[10000ms]"
        />

        {/* Camadas de Contraste Equilibradas para manter a foto viva e o texto com leitura perfeita */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/50" />
        {/* Degradê superior para fundir perfeitamente com o cabeçalho como se fossem uma coisa só */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />
        <div className="absolute inset-0 radial-spotlight opacity-30 pointer-events-none" />
      </div>

      {/* Conteúdo Centralizado e de Máximo Impacto Visual */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center justify-center my-auto">
        {/* Título Principal Gigante e Centralizado */}
        <div className="mb-6 sm:mb-10 select-none w-full">
          <h1 className="font-heading font-black text-[14vw] sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[12rem] uppercase tracking-tighter leading-[0.84] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            {/* Linha 1 */}
            <span
              className={`block transform transition-all duration-500 ease-out ${
                step >= 1
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <span className="title-impact-sweep">SEU TREINO.</span>
            </span>

            {/* Linha 2 */}
            <span
              className={`block transform transition-all duration-500 ease-out text-neutral-300 drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)] ${
                step >= 2
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              SEU LIMITE.
            </span>

            {/* Linha 3 */}
            <span
              className={`block transform transition-all duration-500 ease-out ${
                step >= 3
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <span className="title-impact-sweep text-white">SUPERE.</span>
            </span>
          </h1>
        </div>

        {/* Subtítulo e CTA Centralizados */}
        <div className="flex flex-col items-center justify-center gap-6 pt-4 border-t border-white/20 w-full max-w-2xl">
          <p className="font-heading font-bold text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.3em] text-neutral-200 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            BOXE • PERFORMANCE • PREPARAÇÃO FÍSICA
          </p>

          {/* ÚNICO CTA TEXTUAL NO HERO CENTRALIZADO */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenWhatsAppModal()}
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-black hover:bg-neutral-200 font-heading font-black uppercase tracking-wider text-sm sm:text-base rounded active:scale-95 transition-all shadow-[0_0_35px_rgba(255,255,255,0.35)]"
            >
              <span>COMEÇAR A TREINAR</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Indicador sutil de rolagem */}
            <button
              onClick={onExploreTrainings}
              aria-label="Rolar para baixo"
              className="p-3.5 rounded-full border border-neutral-700 bg-black/40 text-neutral-300 hover:text-white hover:border-white transition-colors hidden sm:flex items-center justify-center"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
