import React from 'react';
import { SITE_CONFIG } from '../config/siteData';
import { BrandLogo } from './BrandLogo';
import { OfficialInstagramIcon, OfficialWhatsAppIcon } from './OfficialSocialLogos';
import { MapPin } from 'lucide-react';

interface FooterProps {
  onOpenWhatsAppModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 pt-16 pb-20 sm:pb-14 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 pb-8 border-b border-neutral-900 text-center sm:text-left">
          {/* Logo & Marca Oficial */}
          <div className="space-y-3 flex flex-col items-center sm:items-start">
            <BrandLogo className="h-16 sm:h-20 w-auto" />
            <p className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              {SITE_CONFIG.coach.name} — Personal Trainer
            </p>
            <p className="text-xs text-neutral-500 font-mono tracking-widest uppercase">
              {SITE_CONFIG.brand.tagline}
            </p>
          </div>

          {/* Endereço */}
          <div className="space-y-2 flex flex-col items-center sm:items-start text-xs max-w-sm text-center sm:text-left">
            <div className="flex items-center gap-2 text-neutral-300">
              <MapPin className="w-4 h-4 text-neutral-500 flex-shrink-0" />
              <span>{SITE_CONFIG.contact.address}</span>
            </div>
            <p className="text-neutral-500 font-mono sm:pl-6 text-[11px]">
              {SITE_CONFIG.contact.addressZip}
            </p>
          </div>
        </div>

        {/* Linha Final com WhatsApp e Instagram na MESMA DIMENSÃO e na MESMA LINHA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          <div className="flex items-center justify-center gap-8 sm:gap-10">
            {/* WhatsApp com Ícone Oficial na mesma dimensão */}
            <button
              onClick={onOpenWhatsAppModal}
              className="group flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <OfficialWhatsAppIcon className="w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-heading font-bold tracking-wider uppercase text-white">
                {SITE_CONFIG.contact.phoneFormatted}
              </span>
            </button>

            {/* Instagram com Ícone Oficial na mesma dimensão exata */}
            <a
              href={SITE_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram oficial @blackboxing_"
              className="group flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <OfficialInstagramIcon className="w-7 h-7 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-heading font-bold tracking-wider uppercase text-white">
                {SITE_CONFIG.contact.instagramHandle}
              </span>
            </a>
          </div>

          {/* Rodapé inferior / Direitos */}
          <div className="text-[11px] text-neutral-600 font-mono text-center sm:text-right">
            <p>© {new Date().getFullYear()} BLACK BOXING • FORÇA • TÉCNICA • DISCIPLINA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
