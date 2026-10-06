import React from 'react';
import { SITE_CONFIG, buildWhatsAppLink, WhatsAppFlowOption } from '../config/siteData';
import { X, ArrowRight, MessageCircle } from 'lucide-react';

interface SmartWhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOptionId?: string;
}

export const SmartWhatsAppModal: React.FC<SmartWhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialOptionId,
}) => {
  if (!isOpen) return null;

  const handleSelectOption = (option: WhatsAppFlowOption) => {
    const url = buildWhatsAppLink(option.message);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md bg-[#0d0d0d] border-t sm:border border-neutral-800 rounded-t-2xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl text-white transform transition-transform duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Handle / Close */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="font-heading text-xs tracking-wider uppercase text-neutral-300 font-bold">
              WhatsApp Oficial • {SITE_CONFIG.contact.phoneFormatted}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Title & Subtitle */}
        <div className="mb-5 text-left">
          <h2 id="modal-title" className="font-heading text-2xl font-black tracking-tight text-white uppercase">
            O QUE VOCÊ PROCURA?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Escolha seu objetivo para iniciar a conversa diretamente com o treinador <span className="text-white font-semibold">Dionei</span>:
          </p>
        </div>

        {/* As 5 Opções Solicitadas */}
        <div className="space-y-2.5">
          {SITE_CONFIG.whatsappFlows.map((flow) => {
            const isInitial = flow.id === initialOptionId;
            return (
              <button
                key={flow.id}
                onClick={() => handleSelectOption(flow)}
                className={`w-full group text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                  isInitial
                    ? 'border-[#25D366] bg-[#25D366]/10'
                    : 'border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800 hover:border-neutral-700 active:scale-[0.98]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl select-none pt-0.5">{flow.emoji}</span>
                  <div>
                    <h3 className="font-heading text-sm font-bold tracking-wide text-white group-hover:text-white uppercase">
                      {flow.title}
                    </h3>
                    <p className="text-[12px] text-neutral-400 line-clamp-1 mt-0.5">
                      {flow.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
              </button>
            );
          })}
        </div>

        {/* Direct WhatsApp link */}
        <div className="mt-5 pt-4 border-t border-neutral-800 flex flex-col gap-2">
          <button
            onClick={() => {
              const url = buildWhatsAppLink('Olá, Dionei! Vim pelo site da Black Boxing e gostaria de tirar algumas dúvidas sobre os treinos.');
              window.open(url, '_blank', 'noopener,noreferrer');
              onClose();
            }}
            className="w-full text-center py-2.5 text-xs text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            <span>Prefere enviar uma mensagem livre? Clique aqui</span>
          </button>

          <p className="text-[11px] text-neutral-500 text-center font-mono">
            Atendimento direto com o treinador Dionei. Resposta rápida.
          </p>
        </div>
      </div>
    </div>
  );
};
