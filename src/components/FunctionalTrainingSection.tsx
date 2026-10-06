import React from 'react';
import { Dumbbell, Activity, Flame, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface FunctionalTrainingSectionProps {
  onOpenWhatsAppModal: (optionId?: string) => void;
}

export const FunctionalTrainingSection: React.FC<FunctionalTrainingSectionProps> = ({
  onOpenWhatsAppModal,
}) => {
  const capabilities = [
    { title: 'FORÇA & POTÊNCIA', desc: 'Fortalecimento de membros superiores, tronco (core) e base das pernas.' },
    { title: 'RESISTÊNCIA CARDIOVASCULAR', desc: 'Circuitos em alta intensidade que elevam sua capacidade pulmonar.' },
    { title: 'VELOCIDADE & REFLEXO', desc: 'Exercícios pliométricos e agilidade motora coordenada.' },
    { title: 'MOBILIDADE & ESTABILIDADE', desc: 'Prevenção de lesões articulares e postura blindada.' },
  ];

  return (
    <section id="funcional" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#0a0a0a] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Coluna Visual de Exercícios / Equipamentos (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group">
              <div className="aspect-[4/3] sm:aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                  alt="Preparação física e treinamento funcional"
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/85 backdrop-blur rounded border border-neutral-800">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-white" />
                    <span className="font-heading text-xs font-bold text-white uppercase tracking-wider">
                      CONDICIONAMENTO COMPLEMENTAR
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Exercícios integrados com corda naval, kettlebells, medicine balls e peso corporal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Conteúdo (7 cols) */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400">
                PREPARAÇÃO FÍSICA & CONDICIONAMENTO
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mt-1 leading-tight">
                TREINE PARA ALÉM DO RINGUE.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 font-medium leading-relaxed">
              Preparação física para desenvolver força, resistência, velocidade, coordenação e condicionamento.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              O boxe continua sendo nossa alma e identidade principal, mas o treinamento funcional constrói o motor que sustenta cada movimento. Um corpo resistente, ágil e preparado para qualquer desafio do dia a dia.
            </p>

            {/* Grid 2x2 com capacidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="p-3 rounded-lg bg-neutral-900/70 border border-neutral-800"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenWhatsAppModal('funcional')}
                className="px-5 py-2.5 rounded bg-transparent border border-neutral-700 hover:border-neutral-400 text-neutral-200 hover:text-white font-heading font-bold uppercase tracking-wider text-xs transition-colors active:scale-95"
              >
                QUERO TREINAMENTO FUNCIONAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
