import React, { useEffect, useState } from 'react';
import { SITE_CONFIG } from '../config/siteData';
import { BrandLogo } from './BrandLogo';

interface OpeningIntroProps {
  onComplete: () => void;
}

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'standby' | 'clash' | 'reveal' | 'exit'>('standby');

  useEffect(() => {
    // Verificar se o usuário prefere redução de movimento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Cronograma dinâmico de combate de boxe
    const tClash = setTimeout(() => {
      setPhase('clash');
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate([30, 40, 80]);
        } catch {
          // ignore
        }
      }
    }, 700);

    const tReveal = setTimeout(() => {
      setPhase('reveal');
    }, 1100);

    const tExit = setTimeout(() => {
      setPhase('exit');
    }, 1850);

    const tFinish = setTimeout(() => {
      onComplete();
    }, 2250);

    return () => {
      clearTimeout(tClash);
      clearTimeout(tReveal);
      clearTimeout(tExit);
      clearTimeout(tFinish);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500 select-none cursor-pointer overflow-hidden ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Introdução Black Boxing - Toque para entrar"
    >
      {/* Imagem de Fundo Oficial: Ringue em Névoa */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <img
          src="https://i.ibb.co/Dfj6fQ2B/Ringue-Sombrio-em-N-voa.png"
          alt="Ringue Black Boxing"
          className="w-full h-full object-cover filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
        <div className="absolute inset-0 radial-spotlight opacity-70" />
      </div>

      {/* Botão Pular */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-5 right-5 z-50 text-[10px] font-mono tracking-widest text-neutral-400 hover:text-white uppercase px-3 py-1.5 rounded border border-neutral-800 bg-black/70 backdrop-blur transition-all"
      >
        Pular
      </button>

      {/* Flash Branco no Momento do Impacto das Luvas */}
      {phase === 'clash' && (
        <div className="absolute inset-0 bg-white pointer-events-none z-40 animate-flash-impact" />
      )}

      {/* Onda de Choque no Impacto */}
      {phase === 'clash' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <div className="w-32 h-32 rounded-full border-2 border-white/90 animate-ping" />
          <div className="w-64 h-64 rounded-full border border-neutral-300/40 animate-ping" />
        </div>
      )}

      {/* As Duas Luvas de Boxe se Encontrando no Centro (Toque de Luvas antes do Round) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-25 overflow-hidden">
        {/* Luva da Esquerda */}
        <div
          className={`absolute transition-all duration-300 ease-out transform ${
            phase === 'standby'
              ? '-translate-x-[180%] opacity-0 rotate-12'
              : phase === 'clash'
              ? '-translate-x-6 sm:-translate-x-8 scale-110 opacity-100 rotate-0'
              : '-translate-x-[250%] opacity-0 scale-90 -rotate-12'
          }`}
        >
          <div className="w-28 sm:w-36 h-28 sm:h-36 relative flex items-center justify-center drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
              <path
                d="M50,85 C50,45 85,35 125,48 C155,58 165,90 160,120 C155,148 130,165 95,160 C75,157 60,145 50,130 C40,128 28,120 22,105 C18,92 28,82 50,85 Z"
                fill="#ffffff"
                stroke="#171717"
                strokeWidth="4"
              />
              <path
                d="M55,95 C45,95 32,88 35,75 C38,62 55,68 65,75 Z"
                fill="#e5e5e5"
                stroke="#171717"
                strokeWidth="3"
              />
              <rect x="25" y="125" width="45" height="40" rx="6" transform="rotate(-15 25 125)" fill="#171717" stroke="#ffffff" strokeWidth="2" />
              <line x1="38" y1="135" x2="62" y2="130" stroke="#ffffff" strokeWidth="2" />
              <line x1="35" y1="145" x2="59" y2="140" stroke="#ffffff" strokeWidth="2" />
              <path d="M100,55 C125,65 140,85 140,110" stroke="#737373" strokeWidth="3" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>

        {/* Luva da Direita se Chocando */}
        <div
          className={`absolute transition-all duration-300 ease-out transform ${
            phase === 'standby'
              ? 'translate-x-[180%] opacity-0 -rotate-12'
              : phase === 'clash'
              ? 'translate-x-6 sm:translate-x-8 scale-110 opacity-100 rotate-0'
              : 'translate-x-[250%] opacity-0 scale-90 rotate-12'
          }`}
        >
          <div className="w-28 sm:w-36 h-28 sm:h-36 relative flex items-center justify-center drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-x-[-1]">
            <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
              <path
                d="M50,85 C50,45 85,35 125,48 C155,58 165,90 160,120 C155,148 130,165 95,160 C75,157 60,145 50,130 C40,128 28,120 22,105 C18,92 28,82 50,85 Z"
                fill="#ffffff"
                stroke="#171717"
                strokeWidth="4"
              />
              <path
                d="M55,95 C45,95 32,88 35,75 C38,62 55,68 65,75 Z"
                fill="#e5e5e5"
                stroke="#171717"
                strokeWidth="3"
              />
              <rect x="25" y="125" width="45" height="40" rx="6" transform="rotate(-15 25 125)" fill="#171717" stroke="#ffffff" strokeWidth="2" />
              <line x1="38" y1="135" x2="62" y2="130" stroke="#ffffff" strokeWidth="2" />
              <line x1="35" y1="145" x2="59" y2="140" stroke="#ffffff" strokeWidth="2" />
              <path d="M100,55 C125,65 140,85 140,110" stroke="#737373" strokeWidth="3" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Conteúdo Central que Surge Após o Toque de Luvas com Máxima Força */}
      <div
        className={`relative z-20 flex flex-col items-center px-6 text-center max-w-lg transition-all duration-700 ${
          phase === 'reveal'
            ? 'opacity-100 scale-100 translate-y-0'
            : phase === 'clash'
            ? 'opacity-0 scale-95 translate-y-2'
            : 'opacity-0 scale-90 translate-y-4'
        }`}
      >
        {/* Indicador de Combate */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-300 font-bold">
            ROUND 1 • TOUCH GLOVES
          </span>
        </div>

        {/* Logo Oficial em Destaque */}
        <div className="relative mb-5 flex items-center justify-center">
          <BrandLogo className="h-28 sm:h-36 md:h-40 w-auto filter drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]" />
        </div>

        {/* Linha Divisória de Ringue */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mb-3" />

        {/* Slogan Oficial */}
        <p className="font-heading text-sm sm:text-lg tracking-[0.35em] font-black text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          {SITE_CONFIG.brand.tagline}
        </p>

        {/* Cidade e Treinador */}
        <p className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mt-2">
          CAMBORIÚ • SC • TREINADOR DIONEI
        </p>

        {/* Toque para Entrar */}
        <div className="mt-6 flex items-center gap-2 text-[11px] font-mono text-neutral-500 uppercase tracking-widest animate-pulse">
          <span>TOQUE PARA ENTRAR NO SITE</span>
        </div>
      </div>
    </div>
  );
};
