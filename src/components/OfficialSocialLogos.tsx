import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Logo Oficial do WhatsApp sem fundo (vetor transparente limpo)
 */
export const OfficialWhatsAppIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => {
  return (
    <svg
      className={`${className} overflow-visible`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.472 14.382C17.182 14.237 15.759 13.537 15.494 13.44C15.229 13.344 15.036 13.296 14.843 13.585C14.65 13.874 14.1 14.526 13.931 14.719C13.762 14.912 13.593 14.936 13.303 14.791C13.013 14.646 12.08 14.341 10.974 13.355C10.113 12.588 9.532 11.64 9.363 11.35C9.194 11.06 9.345 10.904 9.49 10.76C9.621 10.63 9.782 10.419 9.927 10.25C10.072 10.081 10.12 9.96 10.216 9.767C10.313 9.574 10.265 9.405 10.192 9.26C10.12 9.115 9.541 7.692 9.3 7.113C9.066 6.549 8.828 6.626 8.652 6.617C8.483 6.608 8.29 6.608 8.097 6.608C7.904 6.608 7.59 6.68 7.325 6.97C7.06 7.26 6.312 7.959 6.312 9.382C6.312 10.805 7.349 12.18 7.494 12.373C7.639 12.566 9.532 15.485 12.438 16.74C13.129 17.038 13.669 17.217 14.088 17.35C14.782 17.571 15.414 17.54 15.913 17.465C16.47 17.382 17.628 16.764 17.87 16.088C18.112 15.412 18.112 14.833 18.04 14.712C17.967 14.591 17.762 14.526 17.472 14.382Z"
        fill="#25D366"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12C2 13.818 2.484 15.522 3.328 16.99L2.083 21.545L6.758 20.319C8.177 21.092 9.803 21.538 11.538 21.538C17.061 21.538 21.538 17.061 21.538 11.538C21.538 6.269 17.269 2 12 2ZM12 3.846C16.503 3.846 20.154 7.497 20.154 12C20.154 16.503 16.503 20.154 12 20.154C10.462 20.154 9.021 19.729 7.784 18.992L7.489 18.816L4.721 19.542L5.46 16.843L5.267 16.536C4.473 15.271 4.015 13.782 4.015 12.185C4.015 7.682 7.666 3.846 12 3.846Z"
        fill="#25D366"
      />
    </svg>
  );
};

/**
 * Logo Oficial do Instagram sem fundo (vetor com gradiente no desenho)
 */
export const OfficialInstagramIcon: React.FC<IconProps> = ({ className = 'w-7 h-7' }) => {
  return (
    <svg
      className={`${className} overflow-visible`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ig-official-gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f09433" />
          <stop offset="0.25" stopColor="#e6683c" />
          <stop offset="0.5" stopColor="#dc2743" />
          <stop offset="0.75" stopColor="#cc2366" />
          <stop offset="1" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      {/* Moldura externa suave da câmera */}
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5.5"
        stroke="url(#ig-official-gradient)"
        strokeWidth="2.2"
      />
      {/* Lente circular */}
      <circle
        cx="12"
        cy="12"
        r="4.5"
        stroke="url(#ig-official-gradient)"
        strokeWidth="2.2"
      />
      {/* Ponto do flash */}
      <circle
        cx="17.5"
        cy="6.5"
        r="1.2"
        fill="url(#ig-official-gradient)"
      />
    </svg>
  );
};
