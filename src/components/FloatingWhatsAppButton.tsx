import React from 'react';
import { OfficialWhatsAppIcon } from './OfficialSocialLogos';

interface FloatingWhatsAppButtonProps {
  onClick: () => void;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  onClick,
}) => {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={onClick}
        aria-label="Falar no WhatsApp com o treinador Dionei"
        className="group relative flex items-center justify-center p-3 rounded-full bg-black/85 border border-[#25D366]/40 shadow-[0_4px_25px_rgba(37,211,102,0.35)] hover:border-[#25D366] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Ícone Oficial do WhatsApp com Brilho Suave e Oscilação */}
        <div className="animate-whatsapp-glow flex items-center justify-center">
          <OfficialWhatsAppIcon className="w-9 h-9 sm:w-11 sm:h-11" />
        </div>

        {/* Indicador de status online sutil */}
        <span className="absolute top-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366] border border-black" />
        </span>

        {/* Tooltip no desktop ao passar o mouse */}
        <span className="pointer-events-none absolute right-full mr-3.5 hidden sm:inline-block whitespace-nowrap rounded-lg bg-black/95 border border-neutral-800 px-3 py-1.5 text-xs font-heading font-bold uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100 shadow-2xl">
          Falar com Dionei
        </span>
      </button>
    </div>
  );
};
