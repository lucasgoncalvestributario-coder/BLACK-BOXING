import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Navigation, ExternalLink, Plus, Minus, RotateCcw } from 'lucide-react';

interface MapInteractiveProps {
  address: string;
  addressFull: string;
}

// Coordenadas precisas de Alameda Belo Horizonte, 584 - Santa Regina, Camboriú - SC
const GYM_COORDS: [number, number] = [-27.0322696, -48.6709402];
const DEFAULT_ZOOM = 16;

export const MapInteractive: React.FC<MapInteractiveProps> = ({
  address,
  addressFull,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addressFull || 'Alameda Belo Horizonte, 584 - Santa Regina, Camboriú - SC, 88345-067'
  )}`;

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Criar mapa imediatamente
    const map = L.map(mapContainerRef.current, {
      center: GYM_COORDS,
      zoom: DEFAULT_ZOOM,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false, // Evitar interceptar rolagem da página por acidente
      touchZoom: true,
      dragging: true,
    });

    mapInstanceRef.current = map;

    // Camada de Azulejos Estilo Google Maps Branco / Positron (Nítido, Claro, Imediato)
    const positronLayer = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        subdomains: 'abcd',
        maxZoom: 19,
        minZoom: 12,
      }
    );

    positronLayer.addTo(map);

    // Ícone Oficial Personalizado Estilo Pin Vermelho do Google Maps
    const pinHtml = `
      <div style="position: relative; width: 44px; height: 54px; display: flex; flex-direction: column; align-items: center; cursor: pointer; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.35));">
        <svg viewBox="0 0 384 512" width="38" height="48" fill="#e53935">
          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"/>
          <circle cx="192" cy="192" r="76" fill="#ffffff" />
          <circle cx="192" cy="192" r="50" fill="#111111" />
        </svg>
        <span style="position: absolute; bottom: 0; width: 14px; height: 5px; background: rgba(0,0,0,0.3); border-radius: 50%; filter: blur(1px);"></span>
      </div>
    `;

    const customPinIcon = L.divIcon({
      className: 'custom-google-maps-pin',
      html: pinHtml,
      iconSize: [44, 54],
      iconAnchor: [22, 50],
      popupAnchor: [0, -48],
    });

    const marker = L.marker(GYM_COORDS, { icon: customPinIcon }).addTo(map);

    // Popup estilizado com dados do centro de treinamento
    const popupContent = `
      <div style="font-family: Montserrat, sans-serif; padding: 4px 6px; color: #111; min-width: 190px;">
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
          <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #e53935;"></span>
          <strong style="font-weight: 900; font-size: 13px; letter-spacing: 0.5px;">BLACK BOXING</strong>
        </div>
        <p style="margin: 0; font-size: 11px; line-height: 1.35; color: #333; font-weight: 600;">
          ${address}
        </p>
        <p style="margin: 3px 0 0 0; font-size: 10px; color: #666; font-family: monospace;">
          Camboriú • SC
        </p>
      </div>
    `;

    marker.bindPopup(popupContent, { closeButton: false }).openPopup();

    // Redimensionar imediatamente assim que montar
    setTimeout(() => {
      map.invalidateSize();
      setIsMapReady(true);
    }, 50);

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [address, addressFull]);

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleResetCenter = () => {
    mapInstanceRef.current?.setView(GYM_COORDS, DEFAULT_ZOOM, { animate: true });
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-700 bg-white shadow-2xl relative select-none">
      {/* Container do Mapa Branco Estilo Google Maps com Carregamento Imediato */}
      <div className="aspect-[16/10] sm:aspect-[21/9] w-full min-h-[320px] sm:min-h-[400px] relative bg-[#f2f3f4]">
        {/* Elemento de renderização do Leaflet */}
        <div
          ref={mapContainerRef}
          className="w-full h-full z-1"
          style={{ background: '#f2f3f4' }}
        />

        {/* Marca d'água oficial Google Maps no canto superior esquerdo */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/95 shadow-md border border-neutral-200 backdrop-blur">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335] -ml-1.5"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05] -ml-1.5"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#34A853] -ml-1.5"></span>
            <span className="text-[11px] font-bold text-neutral-800 tracking-tight font-sans pl-1">
              Google Maps
            </span>
            <span className="text-[9px] font-mono text-neutral-500 uppercase px-1 rounded bg-neutral-100">
              Ao Vivo
            </span>
          </div>
        </div>

        {/* Controles de Zoom Flutuantes no Canto Superior Direito */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5">
          <button
            onClick={handleZoomIn}
            aria-label="Aumentar zoom"
            className="w-9 h-9 rounded bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 shadow-md flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            title="Aumentar zoom (+)"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            aria-label="Diminuir zoom"
            className="w-9 h-9 rounded bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 shadow-md flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            title="Diminuir zoom (-)"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetCenter}
            aria-label="Centralizar na academia"
            className="w-9 h-9 rounded bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 shadow-md flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            title="Centralizar na Black Boxing"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Botão de Ação: Abrir no Google Maps e Traçar Rota */}
        <div className="absolute bottom-4 right-4 z-10">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-5 rounded-lg bg-black/90 hover:bg-black text-white border border-neutral-600 font-heading font-black uppercase tracking-wider text-xs inline-flex items-center gap-2 shadow-2xl transition-all active:scale-95 cursor-pointer group"
          >
            <Navigation className="w-4 h-4 text-red-500 group-hover:rotate-12 transition-transform" />
            <span>ABRIR NO GOOGLE MAPS</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
};
