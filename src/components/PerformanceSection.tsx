import React from 'react';

export const PerformanceSection: React.FC = () => {
  return (
    <section id="performance" className="py-20 sm:py-32 px-4 sm:px-10 bg-white text-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Imagem de Preparação Funcional (6 colunas) - Altura Reduzida/Mais Baixa */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group overflow-hidden bg-black shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
              <div className="aspect-[16/10] sm:aspect-[16/9] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                  alt="Preparação Física Complementar"
                  className="w-full h-full object-cover filter contrast-125 grayscale group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400 block mb-1">
                    MOTOR ATLÉTICO
                  </span>
                  <p className="font-heading text-sm sm:text-base font-black uppercase tracking-wider">
                    POTÊNCIA • AGILIDADE • CAPACIDADE PULMONAR
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Título Gigante e Texto Curto (6 colunas) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="w-12 h-1 bg-black mb-4" />

            <h2 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] uppercase tracking-tighter leading-[0.88] text-black">
              PREPARAÇÃO<br />
              FÍSICA.
            </h2>

            <p className="font-heading text-base sm:text-xl font-black tracking-[0.15em] uppercase text-neutral-900">
              Velocidade. Força. Resistência. Condicionamento.
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-lg">
              O condicionamento que sustenta cada movimento. Exercícios integrados com o boxe para desenvolver um corpo resistente, ágil e preparado para qualquer intensidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
