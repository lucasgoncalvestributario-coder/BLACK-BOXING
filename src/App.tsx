import React, { useState } from 'react';
import { OpeningIntro } from './components/OpeningIntro';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BoxingFocusSection } from './components/BoxingFocusSection';
import { BoxingPillarsSection } from './components/BoxingPillarsSection';
import { CompetitionSection } from './components/CompetitionSection';
import { GallerySection } from './components/GallerySection';
import { CoachSection } from './components/CoachSection';
import { LocationSection } from './components/LocationSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { SmartWhatsAppModal } from './components/SmartWhatsAppModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedFlowOptionId, setSelectedFlowOptionId] = useState<string | undefined>(undefined);

  const handleOpenWhatsAppModal = (optionId?: string) => {
    setSelectedFlowOptionId(optionId);
    setIsWhatsAppModalOpen(true);
  };

  const handleScrollToTrainings = () => {
    const el = document.querySelector('#boxe');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#f4f4f4] relative selection:bg-white selection:text-black font-sans antialiased">
      {/* 1. Experiência de Abertura Cinematográfica Curta */}
      {showIntro && (
        <OpeningIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. Cabeçalho com Fundo de Ringue Sombrio Integrado em Degradê com o Hero */}
      <Header onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* Sequência Editorial de Campanha: Fluida, Direta e Sem Excesso de Rolagem */}
      <main>
        {/* HERO: PRETO / FOTO OFICIAL COLORIDA NÍTIDA / TÍTULO GIGANTE / UM CTA */}
        <Hero
          onOpenWhatsAppModal={handleOpenWhatsAppModal}
          onExploreTrainings={handleScrollToTrainings}
        />

        {/* BOXE EDITORIAL: BRANCO / CENTRALIZADO / "BOXE NÃO É SÓ DAR SOCO" / ALTURA BAIXA */}
        <BoxingFocusSection />

        {/* PILARES INTEGRADOS: PRETO / BOXE, PREPARAÇÃO FÍSICA E TREINO INDIVIDUAL EM SEÇÃO COMPACTA */}
        <BoxingPillarsSection />

        {/* COMPETIÇÃO: PRETO / RINGUE OFICIAL / LOGO WHATSAPP OSCILANDO & BRILHANDO */}
        <CompetitionSection onOpenWhatsAppModal={handleOpenWhatsAppModal} />

        {/* GALERIA EDITORIAL: PRETO / BOXE & TREINAMENTO FUNCIONAL */}
        <GallerySection />

        {/* DIONEI: BRANCO / MOLDURA LIMPA / TEXTO SEM MENÇÃO A BLACK BOXING */}
        <CoachSection />

        {/* LOCALIZAÇÃO: ONDE ESTAMOS COM ENDEREÇO E VER NO MAPA (SEM HORÁRIOS) */}
        <LocationSection />

        {/* CTA FINAL: FUNDO BRANCO E LETRAS PRETAS / "VAI FICAR SÓ OLHANDO? VISTA AS LUVAS." */}
        <FinalCtaSection onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />
      </main>

      {/* Rodapé Preto com Instagram e WhatsApp na mesma linha e dimensão */}
      <Footer onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

      {/* Botão Flutuante Discreto: Círculo WhatsApp com Brilho Oscilante no Lugar do Chat */}
      <FloatingWhatsAppButton onClick={() => handleOpenWhatsAppModal()} />

      {/* Modal Inteligente de Fluxo do WhatsApp (As 5 Opções Oficiais) */}
      <SmartWhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        initialOptionId={selectedFlowOptionId}
      />
    </div>
  );
}
