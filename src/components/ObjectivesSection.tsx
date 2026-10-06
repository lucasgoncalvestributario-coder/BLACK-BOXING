import React from 'react';
import { Target, Trophy, Dumbbell, UserCheck, ArrowRight } from 'lucide-react';

interface ObjectivesSectionProps {
  onSelectObjective: (optionId: string) => void;
}

export const ObjectivesSection: React.FC<ObjectivesSectionProps> = ({
  onSelectObjective,
}) => {
  const modalidades = [
    {
      id: 'comecar_boxe',
      title: 'BOXE TRADICIONAL',
      icon: Target,
      desc: 'Fundamentos, postura de guarda, footwork e esquiva. Do zero ao avançado.',
      badge: 'TÉCNICA',
    },
    {
      id: 'competir',
      title: 'COMPETIÇÃO',
      icon: Trophy,
      desc: 'Ritmo de combate real, estratégia de ringue e rendimento esportivo intenso.',
      badge: 'PERFORMANCE',
    },
    {
      id: 'funcional',
      title: 'PREPARAÇÃO FÍSICA',
      icon: Dumbbell,
      desc: 'Treinamento funcional para força, velocidade, fôlego e potência muscular.',
      badge: 'RESISTÊNCIA',
    },
    {
      id: 'personalizado',
      title: 'PERSONALIZADO 1 A 1',
      icon: UserCheck,
      desc: 'Aulas individuais com o treinador Dionei sob medida para o seu objetivo.',
      badge: 'EXCLUSIVO',
    },
  ];

  return (
    <section id="modalidades" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0a0a0a] text-white border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-400 font-bold block mb-2">
            MODALIDADES & OBJETIVOS
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter leading-[0.95] text-white">
            QUAL É O SEU FOCO?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3">
            Escolha seu objetivo e inicie seu treinamento com metodologia comprovada.
          </p>
        </div>

        {/* Grade Compacta no Celular (2 cols mobile, 4 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {modalidades.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectObjective(item.id)}
                className="group relative p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-white transition-all duration-200 cursor-pointer flex flex-col justify-between active:scale-[0.98]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-wide group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-neutral-900 flex items-center justify-between text-[11px] font-heading font-bold uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                  <span>AGENDAR</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
