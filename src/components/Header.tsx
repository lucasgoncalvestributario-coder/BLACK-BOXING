import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteData';
import { BrandLogo } from './BrandLogo';
import { OfficialWhatsAppIcon, OfficialInstagramIcon } from './OfficialSocialLogos';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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

  const navLinks = [
    { num: '01', label: 'INÍCIO', href: '#inicio', desc: 'Abertura & Filosofia' },
    { num: '02', label: 'BOXE', href: '#boxe', desc: 'Fundamentos da Nobre Arte' },
    { num: '03', label: 'PERFORMANCE', href: '#performance', desc: 'Preparação Física' },
    { num: '04', label: 'COMPETIÇÃO', href: '#competicao', desc: 'Ritmo de Combate' },
    { num: '05', label: 'GALERIA', href: '#galeria', desc: 'Acervo dos Treinos' },
    { num: '06', label: 'DIONEI', href: '#dionei', desc: 'Liderança Técnica' },
    { num: '07', label: 'LOCALIZAÇÃO', href: '#contato', desc: 'Endereço & Mapa' },
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
        {/* Fundo do Header Oficial: Ringue Sombrio em Névoa (https://ibb.co/SwZ1wBCk) - Aceso e Nítido */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://i.ibb.co/Dfj6fQ2B/Ringue-Sombrio-em-N-voa.png"
            alt="Fundo Ringue Sombrio"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="w-full h-full object-cover object-center filter brightness-110 contrast-110 saturate-105"
          />
          {/* Camada sutil para manter a imagem do ringue claramente visível */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>

        {/* Linha de acabamento superior suave */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-2" />

        {/* Conteúdo do Header: Alinhado à esquerda para posicionar a Logo com máxima presença */}
        <div className="w-full px-2 sm:px-6 md:px-8 h-full flex items-center justify-between relative z-10">
          {/* 
            LOGO BLACK BOXING:
            - Ocupa 100% da altura do cabeçalho
            - Posicionada mais à esquerda
            - Presença dominante e proporcional
          */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="h-full flex items-center group focus:outline-none select-none transition-all duration-500 origin-left py-0 sm:py-1 pl-0 sm:pl-1"
            aria-label="Black Boxing - Início"
          >
            <BrandLogo
              className={`transition-all duration-500 w-auto h-full max-h-full ${
                isScrolled
                  ? 'min-w-[170px] sm:min-w-[220px] md:min-w-[270px]'
                  : 'min-w-[190px] sm:min-w-[260px] md:min-w-[340px]'
              }`}
            />
          </a>

          {/* Lado Direito: SOMENTE ÍCONES (Instagram, WhatsApp, Menu) */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 pr-1 sm:pr-2">
            {/* Instagram: Ícone Oficial Sem Fundo */}
            <a
              href={SITE_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @blackboxing_"
              className="p-1 hover:scale-110 active:scale-95 transition-transform"
              title="Instagram @blackboxing_"
            >
              <OfficialInstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>

            {/* WhatsApp: Ícone Oficial Sem Fundo */}
            <button
              onClick={() => onOpenWhatsAppModal()}
              aria-label="Falar no WhatsApp"
              className="p-1 hover:scale-110 active:scale-95 transition-transform focus:outline-none"
              title="Falar no WhatsApp"
            >
              <OfficialWhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Divisor vertical sutil */}
            <span className="w-[1px] h-5 sm:h-6 bg-white/20 hidden sm:inline-block" />

            {/* Menu: Ícone de 3 linhas ☰ */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
              className="p-1 text-white hover:text-neutral-300 active:scale-95 transition-transform focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 sm:w-8 sm:h-8" />
              ) : (
                <Menu className="w-7 h-7 sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Degradê Suave na Base do Cabeçalho para se Juntar como uma coisa só com o Hero (sem risco) */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none z-2" />
      </header>

      {/* Menu Overlay Cinematográfico com Fundo Trabalhado e Títulos que Deslizam */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-35 bg-black/96 backdrop-blur-2xl pt-28 sm:pt-36 px-6 sm:px-12 flex flex-col justify-between pb-10 overflow-y-auto animate-fadeIn"
        >
          {/* Fundo do Menu: Ringue em Névoa + Grid + Spotlight */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <img
              src="https://i.ibb.co/Dfj6fQ2B/Ringue-Sombrio-em-N-voa.png"
              alt="Ringue Sombrio Fundo Menu"
              className="w-full h-full object-cover filter brightness-75 contrast-125"
            />
          </div>
          <div className="absolute inset-0 bg-boxing-grid opacity-20 pointer-events-none" />
          <div className="absolute inset-0 radial-spotlight opacity-50 pointer-events-none" />

          <div className="max-w-4xl mx-auto w-full relative z-10 space-y-6">
            {/* Cabeçalho do Menu */}
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400 font-bold">
                SELECIONE SEU DESTINO
              </span>
              <span className="text-xs font-mono text-white/50 tracking-wider">
                [DESLIZE E TOQUE]
              </span>
            </div>

            {/* Lista com Efeito Deslizante Suave nos Títulos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.09] hover:border-white/30 transition-all duration-300 group flex items-center justify-between active:scale-[0.98]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-neutral-500 group-hover:text-white transition-colors">
                      {link.num}
                    </span>
                    {/* Título que Desliza Suavemente para a Direita */}
                    <div className="transform group-hover:translate-x-3 transition-transform duration-300 ease-out">
                      <h4 className="font-heading text-xl sm:text-2xl font-black text-neutral-200 group-hover:text-white uppercase tracking-tight">
                        {link.label}
                      </h4>
                      <p className="text-[11px] font-mono text-neutral-400 group-hover:text-neutral-300">
                        {link.desc}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Rodapé do Menu com Acabamento */}
          <div className="max-w-4xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              BLACK BOXING • {SITE_CONFIG.brand.tagline}
            </p>
            <div className="flex items-center gap-4 text-xs font-heading font-bold tracking-widest uppercase">
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                {SITE_CONFIG.contact.instagramHandle}
              </a>
              <span className="text-neutral-700">•</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="text-[#25D366] hover:underline"
              >
                {SITE_CONFIG.contact.phoneFormatted}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
