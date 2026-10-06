import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteData';

interface BrandLogoProps {
  className?: string;
  variant?: 'white' | 'dark' | 'auto';
  alt?: string;
}

/**
 * Componente oficial de exibição da logo Black Boxing.
 * Remove completamente o fundo escuro e amplia a área útil das letras e do símbolo,
 * eliminando as margens vazias da foto enviada para atingir o tamanho real pretendido de ~5cm.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-20 sm:h-24 md:h-28 w-auto',
  variant = 'white',
  alt = 'BLACK BOXING',
}) => {
  const [imgError, setImgError] = useState(false);

  const isDarkVariant = variant === 'dark';
  const logoSource = isDarkVariant ? SITE_CONFIG.brand.logoDarkUrl : SITE_CONFIG.brand.logoUrl;

  if (imgError) {
    return (
      <div
        className={`font-heading font-black tracking-wider uppercase ${
          isDarkVariant ? 'text-black' : 'text-white'
        } ${className} flex items-center`}
      >
        BLACK BOXING
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center justify-start overflow-hidden select-none ${className}`}>
      {/* 
        Para fundos escuros (variant='white'): logo branca oficial com mix-blend-mode: screen.
        Para fundos claros (variant='dark'): logo preta oficial (https://ibb.co/QFCMKb2f) com mix-blend-mode: multiply.
      */}
      <img
        src={logoSource}
        alt={alt}
        onError={() => setImgError(true)}
        className={`w-full h-full object-contain transform scale-[1.38] transition-transform duration-300 ${
          isDarkVariant ? 'filter contrast-150' : 'filter brightness-125 contrast-125'
        }`}
        style={{
          mixBlendMode: isDarkVariant ? 'multiply' : 'screen',
        }}
      />
    </div>
  );
};
