import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteData';
import { getCachedTransparentLogo, generateTransparentLogo } from '../utils/transparentLogo';

interface BrandLogoProps {
  className?: string;
  variant?: 'white' | 'dark' | 'auto';
  alt?: string;
}

/**
 * Componente oficial de exibição da logo Black Boxing.
 * Remove 100% de qualquer fundo, caixa, moldura ou quadrado preto/cinza.
 * Exibe a logo com transparência real em PNG isolado, ampliando a nitidez
 * e ocupando o espaço pretendido com impacto máximo.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-20 sm:h-24 md:h-28 w-auto',
  variant = 'white',
  alt = 'BLACK BOXING',
}) => {
  const [imgError, setImgError] = useState(false);

  const isDarkVariant = variant === 'dark';
  const rawSource = isDarkVariant ? SITE_CONFIG.brand.logoDarkUrl : SITE_CONFIG.brand.logoUrl;
  const mode = isDarkVariant ? 'dark' : 'white';

  const [activeSrc, setActiveSrc] = useState<string>(() => {
    return getCachedTransparentLogo(rawSource, mode) || rawSource;
  });

  const [isProcessed, setIsProcessed] = useState<boolean>(() => {
    return !!getCachedTransparentLogo(rawSource, mode);
  });

  useEffect(() => {
    const cached = getCachedTransparentLogo(rawSource, mode);
    if (cached) {
      setActiveSrc(cached);
      setIsProcessed(true);
      return;
    }

    generateTransparentLogo(rawSource, mode, (processedUrl) => {
      setActiveSrc(processedUrl);
      setIsProcessed(true);
    });
  }, [rawSource, mode]);

  if (imgError) {
    return (
      <div
        className={`font-heading font-black tracking-wider uppercase select-none ${
          isDarkVariant ? 'text-black' : 'text-white'
        } ${className} flex items-center`}
      >
        BLACK BOXING
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-start select-none bg-transparent overflow-visible ${className}`}
    >
      <img
        src={activeSrc}
        alt={alt}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        onError={() => setImgError(true)}
        className={`w-auto h-full max-h-full object-contain object-left bg-transparent transition-all duration-300 ${
          isProcessed
            ? 'filter drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]'
            : isDarkVariant
            ? 'filter contrast-150'
            : 'filter brightness-125 contrast-150'
        }`}
        style={
          isProcessed
            ? { background: 'transparent' }
            : {
                mixBlendMode: isDarkVariant ? 'multiply' : 'screen',
                background: 'transparent',
              }
        }
      />
    </div>
  );
};
