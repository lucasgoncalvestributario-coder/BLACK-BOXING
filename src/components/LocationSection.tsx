import React from 'react';
import { SITE_CONFIG } from '../config/siteData';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  // Link oficial de busca direta no Google Maps
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Alameda Belo Horizonte, 584 - Santa Regina, Camboriú - SC, 88345-067'
  )}`;

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

        {/* Área do Mapa: Iframe Interativo Branco Original do Google Maps */}
        <div className="rounded-2xl overflow-hidden border border-neutral-700 bg-white shadow-2xl relative">
          <div className="aspect-[16/10] sm:aspect-[21/9] w-full min-h-[300px] sm:min-h-[380px] relative">
            <iframe
              title="Localização Black Boxing"
              src={SITE_CONFIG.contact.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Botão Flutuante de Traçar Rota sobre o Mapa */}
            <div className="absolute bottom-4 right-4 z-10">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-lg bg-black/90 hover:bg-black text-white border border-neutral-600 font-heading font-black uppercase tracking-wider text-xs inline-flex items-center gap-2 shadow-2xl transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>ABRIR NO APP DE MAPAS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>

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
