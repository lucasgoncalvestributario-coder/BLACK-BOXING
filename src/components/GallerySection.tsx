import React, { useState } from 'react';
import { SITE_CONFIG, GalleryItem } from '../config/siteData';
import { Maximize2, X, Play } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'boxe' | 'funcional'>('boxe');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filtra itens estritamente pela categoria selecionada
  const filteredItems = SITE_CONFIG.gallery.filter((item) => item.category === activeTab);

  return (
    <section id="galeria" className="py-20 sm:py-32 px-4 sm:px-10 bg-black text-white border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-500 font-bold block mb-2">
              ACERVO VISUAL
            </span>
            <h2 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter text-white leading-none">
              AQUI O TREINO<br />ACONTECE.
            </h2>
          </div>

          {/* Abas Exclusivas: Somente Boxe e Treinamento Funcional com instrução explícita de clique */}
          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 font-bold flex items-center gap-1.5">
              <span>👉</span> CLIQUE PARA ESCOLHER A CATEGORIA:
            </span>
            <div className="inline-flex items-center gap-2 bg-neutral-950 p-1.5 rounded-lg border border-neutral-800">
              <button
                onClick={() => setActiveTab('boxe')}
                className={`px-5 sm:px-7 py-3 rounded font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'boxe'
                    ? 'bg-white text-black shadow-lg scale-100 ring-2 ring-white/50'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                🥊 BOXE
              </button>
              <button
                onClick={() => setActiveTab('funcional')}
                className={`px-5 sm:px-7 py-3 rounded font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'funcional'
                    ? 'bg-white text-black shadow-lg scale-100 ring-2 ring-white/50'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                ⚡ TREINAMENTO FUNCIONAL
              </button>
            </div>
          </div>
        </div>

        {/* Grid Editorial da Categoria Selecionada */}
        <div className="space-y-3 sm:space-y-4">
          {/* Bloco 1: Imagem de Destaque */}
          {filteredItems[0] && (
            <div
              onClick={() => setSelectedItem(filteredItems[0])}
              className="group relative overflow-hidden bg-neutral-950 border border-neutral-800 aspect-[16/9] sm:aspect-[21/9] cursor-pointer"
            >
              <img
                src={filteredItems[0].url}
                alt={filteredItems[0].title}
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover filter contrast-125 grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block">
                    {filteredItems[0].category === 'boxe' ? 'BOXE' : 'TREINAMENTO FUNCIONAL'}
                  </span>
                  <p className="font-heading text-base sm:text-xl font-bold uppercase text-white">
                    {filteredItems[0].title}
                  </p>
                </div>
                <span className="p-2 rounded bg-black/80 text-white border border-neutral-700">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
            </div>
          )}

          {/* Bloco 2: Duas Imagens Lado a Lado */}
          {filteredItems.length > 1 && (
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {filteredItems.slice(1, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden bg-neutral-950 border border-neutral-800 aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="eager"
                    decoding="sync"
                    className="w-full h-full object-cover filter contrast-125 grayscale group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-neutral-400 block line-clamp-1">
                        {item.category === 'boxe' ? 'BOXE' : 'FUNCIONAL'}
                      </span>
                      <p className="font-heading text-xs sm:text-sm font-bold uppercase text-white line-clamp-1">
                        {item.title}
                      </p>
                    </div>
                    <span className="p-1.5 rounded bg-black/80 text-white border border-neutral-700 flex-shrink-0 ml-1">
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bloco 3: Imagem Larga / Adicional se existir */}
          {filteredItems[3] && (
            <div
              onClick={() => setSelectedItem(filteredItems[3])}
              className="group relative overflow-hidden bg-neutral-950 border border-neutral-800 aspect-[16/9] sm:aspect-[21/9] cursor-pointer"
            >
              <img
                src={filteredItems[3].url}
                alt={filteredItems[3].title}
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover filter contrast-125 grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-400 block">
                    {filteredItems[3].category === 'boxe' ? 'BOXE' : 'TREINAMENTO FUNCIONAL'}
                  </span>
                  <p className="font-heading text-base sm:text-xl font-bold uppercase text-white">
                    {filteredItems[3].title}
                  </p>
                </div>
                <span className="p-2 rounded bg-black/80 text-white border border-neutral-700">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal em Tela Cheia */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
              <h3 className="font-heading text-base font-bold text-white uppercase">
                {selectedItem.title}
              </h3>
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Fechar modal"
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
