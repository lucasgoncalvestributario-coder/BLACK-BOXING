import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteData';
import { BrandLogo } from './BrandLogo';
import { OfficialInstagramIcon } from './OfficialSocialLogos';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenWhatsAppModal: (optionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links limpos e diretos - Pegada minimalista de alto impacto tipo Nike
  const navLinks = [
    { label: 'INÍCIO', href: '#inicio' },
    { label: 'BOXE', href: '#boxe' },
    { label: 'PERFORMANCE', href: '#performance' },
    { label: 'COMPETIÇÃO', href: '#competicao' },
    { label: 'GALERIA', href: '#galeria' },
    { label: 'DIONEI', href: '#dionei' },
    { label: 'LOCALIZAÇÃO', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
          isScrolled
            ? 'h-[68px] sm:h-[76px] md:h-[84px] shadow-2xl'
            : 'h-[80px] sm:h-[96px] md:h-[110px]'
        }`}
      >
        {/* Fundo do Header Oficial: Ringue Sombrio em Névoa (https://ibb.co/SwZ1wBCk) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://i.ibb.co/Dfj6fQ2B/Ringue-Sombrio-em-N-voa.png"
            alt="Fundo Ringue Sombrio"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="w-full h-full object-cover object-center filter brightness-110 contrast-110 saturate-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>

        {/* Linha de acabamento superior suave */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-2" />

        {/* Conteúdo do Header */}
        <div className="w-full pl-2 sm:pl-4 md:pl-6 pr-3 sm:pr-6 md:pr-8 h-full flex items-center justify-between relative z-10">
          {/* Logo Black Boxing no canto superior esquerdo sem fundo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="h-full flex items-center group focus:outline-none select-none transition-all duration-300 origin-left py-1 pl-0 ml-0 bg-transparent shrink-0"
            aria-label="Black Boxing - Início"
          >
            <BrandLogo
              variant="white"
              className={`transition-all duration-500 w-auto bg-transparent ${
                isScrolled
                  ? 'h-[52px] sm:h-[62px] md:h-[72px]'
                  : 'h-[68px] sm:h-[82px] md:h-[94px]'
              }`}
            />
          </a>

          {/* Lado Direito: SOMENTE Instagram e Menu (WhatsApp removido do topo conforme solicitado) */}
          <div className="flex items-center gap-4 sm:gap-6 pr-1 sm:pr-2">
            {/* Instagram Oficial */}
            <a
              href={SITE_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @blackboxing_"
              className="p-1 hover:scale-110 active:scale-95 transition-transform text-white"
              title="Instagram @blackboxing_"
            >
              <OfficialInstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>

            {/* Menu: Ícone de 3 linhas ☰ */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
              className="p-1 text-white hover:text-neutral-300 active:scale-95 transition-transform focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Degradê Suave na Base do Cabeçalho */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none z-2" />
      </header>

      {/* Menu Overlay Estilo Nike: Tipografia Gigante, Sem Quadrados, Sem Números, Puro Impacto Visual */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex flex-col justify-between px-6 sm:px-14 md:px-20 pt-24 sm:pt-28 pb-10 overflow-y-auto animate-fadeIn"
        >
          {/* Fundo Atmosférico de Ringue em Névoa */}
          <div className="absolute inset-0 pointer-events-none opacity-15">
            <img
              src="https://i.ibb.co/Dfj6fQ2B/Ringue-Sombrio-em-N-voa.png"
              alt="Ringue Sombrio Fundo Menu"
              className="w-full h-full object-cover filter brightness-75 contrast-125"
            />
          </div>
          <div className="absolute inset-0 radial-spotlight opacity-40 pointer-events-none" />

          {/* Botão Fechar no Canto Superior Direito */}
          <div className="absolute top-6 right-6 sm:right-10 z-20">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
              className="p-2 text-white/80 hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
          </div>

          {/* Lista de Navegação Estilo Nike: Títulos em Caixa Alta, Grandes, sem Caixas ou Números */}
          <div className="relative z-10 max-w-4xl my-auto py-6">
            <nav className="flex flex-col space-y-2 sm:space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white/90 hover:text-white transition-all duration-200 transform hover:translate-x-3 sm:hover:translate-x-6 cursor-pointer select-none inline-flex items-center gap-4 group py-1"
                >
                  <span className="relative">
                    {link.label}
                    {/* Linha discreta ao passar o mouse estilo Nike */}
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xl sm:text-3xl text-white transform -translate-x-2 group-hover:translate-x-0 font-light">
                    →
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Rodapé Minimalista do Menu com Instagram e Marca */}
          <div className="relative z-10 max-w-4xl pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="font-heading font-black text-white uppercase tracking-widest text-sm">
                BLACK BOXING
              </span>
              <span>•</span>
              <span className="tracking-widest uppercase">
                {SITE_CONFIG.brand.tagline}
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-300 transition-colors uppercase font-bold tracking-wider inline-flex items-center gap-1.5"
              >
                <span>INSTAGRAM</span>
                <span>↗</span>
              </a>
              <span className="text-neutral-700">•</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="text-neutral-300 hover:text-white transition-colors uppercase font-bold tracking-wider cursor-pointer"
              >
                CONTATO
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
