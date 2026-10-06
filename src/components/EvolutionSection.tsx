import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteData';
import { ArrowLeftRight, Activity, Shield, Sparkles, MessageCircle } from 'lucide-react';

interface EvolutionSectionProps {
  onOpenWhatsAppModal: (optionId?: string) => void;
}

export const EvolutionSection: React.FC<EvolutionSectionProps> = ({
  onOpenWhatsAppModal,
}) => {
  const [activeTab, setActiveTab] = useState<'fisica' | 'tecnica' | 'depoimentos'>('tecnica');

  return (
    <section id="evolucao" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400">
            PROCESSO & TRANSFORMAÇÃO
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mt-1">
            EVOLUÇÃO NÃO ACONTECE POR ACASO.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Resultados consolidados através de constância, técnica apurada e orientação profissional.
          </p>
        </div>

        {/* Abas de Navegação de Evolução */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('tecnica')}
            className={`px-4 py-2 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all ${
              activeTab === 'tecnica'
                ? 'bg-white text-black'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Evolução Técnica
          </button>
          <button
            onClick={() => setActiveTab('fisica')}
            className={`px-4 py-2 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all ${
              activeTab === 'fisica'
                ? 'bg-white text-black'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Antes & Depois / Física
          </button>
          <button
            onClick={() => setActiveTab('depoimentos')}
            className={`px-4 py-2 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all ${
              activeTab === 'depoimentos'
                ? 'bg-white text-black'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            Espaço de Depoimentos
          </button>
        </div>

        {/* Conteúdo Aba: Técnica */}
        {activeTab === 'tecnica' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                    FASE 1: GUARDA & BASE
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-white uppercase">
                  EQUILÍBRIO & POSTURA
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Correção de passada, fechamento de guarda e distribuição de peso entre os pés para estabilidade inquebrável.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-900 text-[11px] text-neutral-500 font-mono">
                Sem perda de energia desnecessária
              </div>
            </div>

            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                    FASE 2: COMBINAÇÕES
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-white uppercase">
                  CADÊNCIA & TEMPO DE GOLPE
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Jab, direto, cruzado e upper encadeados com rotação correta de quadril e retorno imediato à guarda.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-900 text-[11px] text-neutral-500 font-mono">
                Potência mecânica sem machucar o punho
              </div>
            </div>

            <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                    FASE 3: REFLEXO & ESQUIVA
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-white uppercase">
                  MOVIMENTAÇÃO DE CABEÇA
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Pêndulo, rotação de tronco e contragolpe no timing exato da abertura do adversário.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-900 text-[11px] text-neutral-500 font-mono">
                Autodomínio e inteligência de combate
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo Aba: Antes & Depois / Física */}
        {activeTab === 'fisica' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 text-center animate-fadeIn">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mx-auto text-neutral-300">
                <ArrowLeftRight className="w-6 h-6" />
              </div>

              <h3 className="font-heading font-bold text-xl text-white uppercase">
                GALERIA DE ANTES & DEPOIS
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Este espaço está estruturado para receber fotos reais de evolução física e composição corporal dos alunos da Black Boxing.
              </p>

              <div className="p-4 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/40 text-left">
                <p className="font-mono text-xs text-neutral-300 font-medium">
                  • [ESPAÇO RESERVADO PARA COMPARAÇÃO FOTOGRÁFICA]
                </p>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Não utilizamos números ou transformações fictícias. Quando novas imagens de alunos autorizadas forem disponibilizadas, serão inseridas aqui.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo Aba: Depoimentos */}
        {activeTab === 'depoimentos' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 text-center animate-fadeIn">
            <div className="max-w-md mx-auto space-y-4">
              <h3 className="font-heading font-bold text-xl text-white uppercase">
                DEPOIMENTOS DOS ALUNOS
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Espaço dedicado para os relatos reais de quem treina com o Dionei.
              </p>

              <div className="p-4 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/40 text-left space-y-2">
                <p className="font-mono text-xs text-neutral-300">
                  • [ESPAÇO RESERVADO PARA AVALIAÇÕES REAIS]
                </p>
                <p className="text-[11px] text-neutral-500">
                  Em conformidade com as diretrizes da academia, apenas avaliações enviadas voluntariamente por alunos serão exibidas aqui.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Rápido */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onOpenWhatsAppModal()}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>QUERO COMEÇAR MINHA EVOLUÇÃO NO WHATSAPP</span>
          </button>
        </div>
      </div>
    </section>
  );
};
