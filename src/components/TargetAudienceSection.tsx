import React from 'react';
import { Sparkles, Award, Flame, Smile, Check } from 'lucide-react';

interface TargetAudienceSectionProps {
  onSelectOption: (optionId: string) => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({
  onSelectOption,
}) => {
  const profiles = [
    {
      id: 'comecar_boxe',
      question: 'ESTÁ COMEÇANDO?',
      desc: 'Não precisa ter experiência para começar. Você aprende do zero absoluto, no seu tempo e com suporte próximo.',
      icon: Sparkles,
      tag: 'PRIMEIROS PASSOS',
    },
    {
      id: 'experiencia',
      question: 'JÁ TREINA BOXE?',
      desc: 'Aprimore sua técnica e condicionamento. Refine a esquiva, tempo de golpe, contra-ataque e mobilidade de ringue.',
      icon: Flame,
      tag: 'APRIMORAMENTO',
    },
    {
      id: 'competir',
      question: 'QUER COMPETIR?',
      desc: 'Treinamento direcionado para quem busca performance esportiva de alto rendimento e ritmo de combate real.',
      icon: Award,
      tag: 'ALTO RENDIMENTO',
    },
    {
      id: 'funcional',
      question: 'QUER APENAS TREINAR?',
      desc: 'Boxe e preparação física para melhorar seu condicionamento e qualidade de vida, desestressar e fortalecer o corpo.',
      icon: Smile,
      tag: 'SAÚDE & ENERGIA',
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400">
            ACESSIBILIDADE & RESPEITO
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mt-1">
            PARA QUEM É A BLACK BOXING?
          </h2>
          <div className="w-10 h-0.5 bg-neutral-700 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.question}
                onClick={() => onSelectOption(p.id)}
                className="group p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-500 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-neutral-900 text-white group-hover:bg-white group-hover:text-black transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-wide">
                    {p.question}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mt-2.5">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-neutral-900 flex items-center gap-1.5 text-[11px] font-semibold text-neutral-400 group-hover:text-white transition-colors">
                  <Check className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                  <span>Espaço acolhedor e focado</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500">
            Você não precisa estar em forma para começar. Você precisa apenas começar.
          </p>
        </div>
      </div>
    </section>
  );
};
