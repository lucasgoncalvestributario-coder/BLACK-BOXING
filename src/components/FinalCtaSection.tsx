import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ChevronRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenWhatsAppModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenWhatsAppModal,
}) => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-10 bg-white text-black relative overflow-hidden border-t border-neutral-200 text-center">
      {/* Background Sutil com profundidade limpa */}
      <div className="absolute inset-0 bg-neutral-50/60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Penúltima Logo: Fundo Branco Direto com a Logo Oficial Preta */}
        <div className="mb-6">
          <BrandLogo variant="dark" className="h-24 sm:h-32 md:h-36 w-auto" />
        </div>

        {/* Subtítulo */}
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-600 mb-3 block font-bold">
          BLACK BOXING • PERFORMANCE & COMBATE
        </span>

        {/* Grande Título com Frase "PRONTO PARA O PRIMEIRO ROUND?" e Efeito de Luz Passando */}
        <h2 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter mb-4 select-none leading-[0.88] title-impact-sweep-dark">
          PRONTO PARA O<br />PRIMEIRO ROUND?
        </h2>

        {/* Texto Curto e Forte */}
        <p className="text-lg sm:text-2xl text-neutral-800 font-semibold max-w-lg mb-10">
          Vista as luvas. Comece seu treino.
        </p>

        {/* Botão Principal de Conversão Preto com Letras Brancas */}
        <button
          onClick={onOpenWhatsAppModal}
          className="group inline-flex items-center gap-3 px-10 sm:px-14 py-4.5 sm:py-5 bg-black text-white hover:bg-neutral-800 font-heading font-black uppercase tracking-wider text-base sm:text-xl rounded active:scale-95 transition-all shadow-[0_10px_35px_rgba(0,0,0,0.25)] cursor-pointer"
        >
          <span>COMEÇAR A TREINAR</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
        </button>

        <p className="mt-8 text-xs text-neutral-500 font-mono tracking-widest uppercase">
          Atendimento direto com o treinador Dionei
        </p>
      </div>
    </section>
  );
};
