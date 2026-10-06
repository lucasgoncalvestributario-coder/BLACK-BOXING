import React from 'react';
import { SITE_CONFIG } from '../config/siteData';
import { MapPin } from 'lucide-react';
import { MapInteractive } from './MapInteractive';

export const LocationSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 sm:py-24 px-4 sm:px-10 bg-[#060606] text-white border-t border-neutral-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-500 font-bold block mb-1">
            LOCALIZAÇÃO
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-white">
            ONDE ESTAMOS
          </h2>
        </div>

        {/* Mapa Interativo Branco Estilo Google Maps - Abre Imediatamente com Ruas Nítidas */}
        <MapInteractive
          address={SITE_CONFIG.contact.address}
          addressFull={SITE_CONFIG.contact.addressFull}
        />

        {/* Endereço Escrito Bonito na Parte de Baixo do Mapa (Sem Quadrado Próprio) */}
        <div className="text-center pt-2 pb-4 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-neutral-400">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400 font-bold">
              ENDEREÇO OFICIAL
            </span>
          </div>

          <p className="font-heading text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-wide max-w-2xl mx-auto leading-tight">
            {SITE_CONFIG.contact.address}
          </p>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 tracking-wider">
            {SITE_CONFIG.contact.addressZip}
          </p>

          <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto pt-1">
            {SITE_CONFIG.contact.addressNote}
          </p>
        </div>
      </div>
    </section>
  );
};
