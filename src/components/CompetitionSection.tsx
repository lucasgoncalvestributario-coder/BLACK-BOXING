import React from 'react';
import { OfficialWhatsAppIcon } from './OfficialSocialLogos';

interface CompetitionSectionProps {
  onOpenWhatsAppModal: (optionId?: string) => void;
}

export const CompetitionSection: React.FC<CompetitionSectionProps> = ({
  onOpenWhatsAppModal,
}) => {
  return (
    <section id="competicao" className="relative py-14 sm:py-20 px-4 sm:px-10 bg-black text-white overflow-hidden border-t border-neutral-900 flex items-center">
      {/* Imagem no Fundo: Cinturão de Boxe Campeão em Alta Resolução, Bem Aceso, Iluminado e Nítido */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a0/WBC_I_OMB_2014-01-17_17-19.jpg"
          alt="Cinturão de Boxe Campeão Mundial WBC OMB"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="w-full h-full object-cover object-[center_38%] filter brightness-135 contrast-125 saturate-135 scale-100"
        />
        {/* Iluminação Dourada Esplêndida e Reflexos de Holofote no Cinturão */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(255,215,0,0.22),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(255,255,255,0.14),transparent_45%)] pointer-events-none" />
        {/* Camadas Leves de Contraste para Garantir Leitura Perfeita do Texto sem Apagar o Cinturão */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Conteúdo Mais Fino e Discreto para Não Ser o Centro Excessivo das Atenções */}
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        <div className="max-w-md space-y-4">
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-none text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            QUER<br />
            COMPETIR?
          </h2>

          <p className="font-heading text-sm sm:text-base font-bold tracking-wider uppercase text-neutral-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Treinamento direcionado para evolução técnica e física.
          </p>

          <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Preparação com estratégia, sparring e fundamentos afiados para atletas e praticantes que buscam vivenciar a nobre arte.
          </p>

          {/* Botão com a Logo Oficial do WhatsApp Levemente Brilhando e Oscilando */}
          <div className="pt-2">
            <button
              onClick={() => onOpenWhatsAppModal('competir')}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/90 border border-neutral-600 hover:border-white transition-all text-white text-xs sm:text-sm font-heading font-black uppercase tracking-wider active:scale-95 shadow-xl cursor-pointer"
            >
              <div className="animate-whatsapp-glow flex items-center justify-center flex-shrink-0">
                <OfficialWhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="tracking-widest">FALAR SOBRE COMPETIÇÃO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
