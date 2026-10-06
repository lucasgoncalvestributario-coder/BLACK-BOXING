import React from 'react';

export const BoxingImpactSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-end pb-16 sm:pb-24 px-4 sm:px-10 bg-black text-white overflow-hidden">
      {/* Imagem Dominante em Tela Cheia */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=2200&auto=format&fit=crop"
          alt="Boxe e Performance Black Boxing"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-125 grayscale scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        <div className="absolute inset-0 radial-vignette pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400 font-bold block">
            A NOBRE ARTE
          </span>

          <h2 className="font-heading font-black text-6xl sm:text-8xl md:text-9xl uppercase tracking-tighter leading-none text-white title-impact-sweep">
            BOXE.
          </h2>

          <p className="font-heading font-bold text-lg sm:text-2xl tracking-[0.15em] uppercase text-neutral-200">
            TÉCNICA. DISCIPLINA. CONTROLE.
          </p>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-2 max-w-lg">
            Para quem está começando, para quem quer evoluir e para quem quer competir.
          </p>
        </div>
      </div>
    </section>
  );
};
