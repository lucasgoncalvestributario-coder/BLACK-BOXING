import React from 'react';

export const BoxingPillarsSection: React.FC = () => {
  const pillars = [
    {
      tag: 'A NOBRE ARTE',
      title: 'BOXE',
      sub: 'TÉCNICA. DISCIPLINA. CONTROLE.',
      desc: 'Para quem está começando, para quem quer evoluir e para quem busca autodomínio.',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    },
    {
      tag: 'MOTOR ATLÉTICO',
      title: 'PREPARAÇÃO FÍSICA',
      sub: 'FORÇA. VELOCIDADE. RESISTÊNCIA.',
      desc: 'Condicionamento integrado que sustenta cada movimento com agilidade e explosão.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    },
    {
      tag: 'EXCLUSIVIDADE',
      title: 'TREINO INDIVIDUAL',
      sub: 'DIRECIONADO AO SEU OBJETIVO.',
      desc: 'Acompanhamento individualizado exclusivo para máxima evolução técnica e corporal.',
      image: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="modalidades" className="py-14 sm:py-20 px-4 sm:px-8 bg-black text-white border-t border-neutral-900">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <h3 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white">
              PILARES DE EVOLUÇÃO
            </h3>
          </div>
          <p className="text-xs font-mono text-neutral-400 tracking-wider">
            Boxe • Condicionamento • Treinamento Individual
          </p>
        </div>

        {/* 3 Colunas Compactas que não cansam a rolagem do usuário */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((item) => {
            return (
              <div
                key={item.title}
                className="group relative rounded-xl overflow-hidden bg-neutral-950 border border-white/10 hover:border-white/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Imagem de Fundo Compacta sem ícones nos cantos */}
                <div className="aspect-[16/10] relative overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="eager"
                    decoding="sync"
                    className="w-full h-full object-cover filter brightness-75 contrast-125 grayscale group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                </div>

                {/* Conteúdo Conciso e Direto */}
                <div className="p-5 space-y-2 bg-neutral-950 relative -mt-4 z-10 rounded-t-xl">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400 block font-bold">
                    {item.tag}
                  </span>
                  <h4 className="font-heading font-black text-xl uppercase tracking-tight text-white">
                    {item.title}
                  </h4>
                  <p className="font-heading text-xs font-bold text-neutral-300 tracking-wider uppercase">
                    {item.sub}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
