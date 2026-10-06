import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SITE_CONFIG } from './config/siteData';

// Pré-carregamento imediato de todas as fotos e logos para exibição 100% instantânea e nítida
const preloadImages = () => {
  const urls = [
    SITE_CONFIG.brand.logoUrl,
    SITE_CONFIG.brand.logoDarkUrl,
    'https://i.ibb.co/Dfj6fQ2B/Ringue-Sombrio-em-N-voa.png',
    'https://i.ibb.co/fVVdc1xd/photo-1575747515871-2e323827539e.avif',
    'https://upload.wikimedia.org/wikipedia/commons/a/a0/WBC_I_OMB_2014-01-17_17-19.jpg',
    SITE_CONFIG.coach.photoUrl,
    ...SITE_CONFIG.gallery.map((item) => item.url),
    ...SITE_CONFIG.gallery.map((item) => item.thumbnail),
  ];

  urls.forEach((url) => {
    if (url) {
      const img = new Image();
      img.decoding = 'sync';
      img.src = url;
    }
  });
};

preloadImages();

createRoot(document.getElementById('root')!).render(<App />);
