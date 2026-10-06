/**
 * CONFIGURAÇÃO GERAL DA BLACK BOXING
 * 
 * Todos os textos, mídias e informações da academia estão centralizados aqui.
 * Para alterar telefone, endereço, fotos ou vídeos, basta editar os valores abaixo.
 */

export interface WhatsAppFlowOption {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'boxe' | 'funcional' | 'treino' | 'ringue' | 'luvas' | 'dionei';
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  description?: string;
}

export const SITE_CONFIG = {
  brand: {
    name: 'BLACK BOXING',
    tagline: 'DISCIPLINA. TÉCNICA. RESULTADO.',
    heroTitle: 'SEU TREINO.\nSEU LIMITE.\nSUPERE.',
    heroSubtitle: 'Boxe, preparação física e treinamento personalizado para quem quer evoluir de verdade.',
    // Logotipo oficial fornecido (versão branca para fundos escuros)
    logoUrl: 'https://i.ibb.co/HLMVhF3d/Whats-App-Image-2026-10-06-at-09-25-02.jpg?utm_source=chatgpt.com',
    // Logotipo oficial fornecido (versão preta para fundos claros - https://ibb.co/QFCMKb2f)
    logoDarkUrl: 'https://i.ibb.co/6R1FWn3m/Whats-App-Image-2026-10-06-at-11-15-02.jpg',
  },

  coach: {
    name: 'DIONEI',
    role: 'PERSONAL TRAINER | BOXE | PREPARAÇÃO FÍSICA',
    bio: 'Treinamento focado em técnica refinada, disciplina militar e alta performance física. Seja você um iniciante buscando qualidade de vida e condicionamento ou alguém focado em superar os próprios limites, o treino é planejado sob medida para a sua evolução.',
    // Espaço preparado para foto real do Dionei (substituir por sua foto real quando desejar)
    photoUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
    photoPlaceholderHint: 'Espaço reservado para a foto oficial do treinador Dionei',
  },

  contact: {
    phoneFormatted: '(47) 99944-5009',
    phoneRaw: '5547999445009',
    instagramHandle: '@blackboxing_',
    instagramUrl: 'https://www.instagram.com/blackboxing_/',
    // Endereço Oficial Black Boxing
    address: 'Alameda Belo Horizonte, 584 - Santa Regina, Camboriú - SC',
    addressZip: 'CEP: 88345-067',
    addressFull: 'Alameda Belo Horizonte, 584 - Santa Regina, Camboriú - SC, CEP: 88345-067',
    addressNote: 'Centro de treinamento Black Boxing. Atendimento e treinos com o treinador Dionei.',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Alameda%20Belo%20Horizonte%2C%20584%20-%20Santa%20Regina%2C%20Cambori%C3%BA%20-%20SC%2C%2088345-067&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },

  // Fluxo inteligente de mensagens do WhatsApp
  whatsappFlows: [
    {
      id: 'comecar_boxe',
      emoji: '🥊',
      title: 'COMEÇAR NO BOXE',
      subtitle: 'Iniciantes sem experiência prévia',
      message: 'Olá, Dionei! Vim pelo site da Black Boxing e quero começar no boxe. Gostaria de saber como funcionam os treinos.',
    },
    {
      id: 'competir',
      emoji: '🏆',
      title: 'TREINAR PARA COMPETIR',
      subtitle: 'Foco em ritmo de luta e rendimento',
      message: 'Olá, Dionei! Vim pelo site da Black Boxing. Tenho interesse em treinamento de boxe voltado para competição e gostaria de saber como funciona.',
    },
    {
      id: 'funcional',
      emoji: '💪',
      title: 'TREINAMENTO FUNCIONAL',
      subtitle: 'Preparação física, força e resistência',
      message: 'Olá, Dionei! Vim pelo site da Black Boxing. Tenho interesse em treinamento funcional e preparação física. Gostaria de saber como funcionam os treinos.',
    },
    {
      id: 'personalizado',
      emoji: '🎯',
      title: 'TREINAMENTO PERSONALIZADO',
      subtitle: 'Acompanhamento individualizado 1 a 1',
      message: 'Olá, Dionei! Vim pelo site da Black Boxing. Tenho interesse em treinamento personalizado e gostaria de saber mais.',
    },
    {
      id: 'experiencia',
      emoji: '🔥',
      title: 'JÁ TENHO EXPERIÊNCIA',
      subtitle: 'Aprimoramento técnico e sparring',
      message: 'Olá, Dionei! Vim pelo site da Black Boxing. Já tenho experiência com boxe e gostaria de conhecer os treinamentos disponíveis.',
    },
  ] as WhatsAppFlowOption[],

  // Espaços preparados para mídias da galeria dividida em Boxe e Treinamento Funcional
  gallery: [
    {
      id: 'g1',
      title: 'Treino de Sparring & Combate',
      category: 'boxe',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600&auto=format&fit=crop',
      description: 'Fundamentos de guarda e movimentação.',
    },
    {
      id: 'g2',
      title: 'Equipamentos & Luvas Profissionais',
      category: 'boxe',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=600&auto=format&fit=crop',
      description: 'Equipamentos e bandagens para treino intenso.',
    },
    {
      id: 'g3',
      title: 'Trabalho no Saco Pesado',
      category: 'boxe',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      description: 'Potência, cadência e explosão de golpes.',
    },
    {
      id: 'g4',
      title: 'Manopla & Instrução no Ringue',
      category: 'boxe',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=600&auto=format&fit=crop',
      description: 'Correção milimétrica de esquiva e contragolpe.',
    },
    {
      id: 'g5',
      title: 'Preparação Física e Condicionamento',
      category: 'funcional',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
      description: 'Treinamento funcional complementar ao boxe.',
    },
    {
      id: 'g6',
      title: 'Mobilidade, Agilidade & Core',
      category: 'funcional',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
      description: 'Treinamento para explosão muscular e prevenção de lesões.',
    },
    {
      id: 'g7',
      title: 'Resistência & Circuito de Alta Intensidade',
      category: 'funcional',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop',
      description: 'Desenvolvimento cardiovascular com foco em ritmo de combate.',
    },
    {
      id: 'g8',
      title: 'Força Funcional & Kettlebell',
      category: 'funcional',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop',
      description: 'Potência de quadris e tronco para sustentar os rounds.',
    },
  ] as GalleryItem[],

  // Espaço estruturado para evolução (antes/depois e marcos técnicos)
  evolutionSlots: [
    {
      id: 'evo1',
      title: 'Evolução Técnica & Postura',
      subtitle: 'Desenvolvimento de guarda, esquiva e tempo de reação',
      tag: 'TÉCNICA',
      description: 'O aluno aprende a se movimentar com inteligência, dominar a distância e golpear com precisão e controle.',
      slotLabel: '[ESPAÇO RESERVADO PARA FOTO / VÍDEO REAL DE EVOLUÇÃO]',
    },
    {
      id: 'evo2',
      title: 'Condicionamento Físico & Resistência',
      subtitle: 'Capacidade cardiorrespiratória e tônus muscular',
      tag: 'CONDICIONAMENTO',
      description: 'Treinos intensos que aceleram o metabolismo, aumentam a resistência muscular e proporcionam alto gasto calórico.',
      slotLabel: '[ESPAÇO RESERVADO PARA ANTES & DEPOIS / EVOLUÇÃO REAL]',
    },
    {
      id: 'evo3',
      title: 'Mentalidade & Disciplina',
      subtitle: 'Foco, alívio de estresse e superação diária',
      tag: 'DISCIPLINA',
      description: 'A nobre arte desenvolve autocontrole, clareza mental e resiliência dentro e fora da academia.',
      slotLabel: '[ESPAÇO RESERVADO PARA DEPOIMENTO / VÍDEO REAL]',
    },
  ],
};

/**
 * Função utilitária para gerar link direto do WhatsApp com mensagem codificada
 */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${SITE_CONFIG.contact.phoneRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
