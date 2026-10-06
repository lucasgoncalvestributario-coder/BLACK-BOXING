/**
 * Utilitário de alto desempenho para processamento de transparência da logo oficial Black Boxing.
 * Remove 100% de qualquer fundo escuro ou claro, remove margens vazias da foto
 * e gera um PNG transparente nítido com canal alpha puro e zero atraso.
 */

const transparentCache: Record<string, string> = {};

export function getCachedTransparentLogo(url: string, mode: 'white' | 'dark'): string | null {
  const key = `${url}_${mode}`;
  if (transparentCache[key]) return transparentCache[key];
  try {
    const stored = typeof window !== 'undefined' ? sessionStorage.getItem(`bb_logo_${key}`) : null;
    if (stored) {
      transparentCache[key] = stored;
      return stored;
    }
  } catch {
    // ignore
  }
  return null;
}

export function generateTransparentLogo(
  url: string,
  mode: 'white' | 'dark',
  onReady: (dataUrl: string) => void
): void {
  const key = `${url}_${mode}`;
  if (transparentCache[key]) {
    onReady(transparentCache[key]);
    return;
  }

  // Verificar se há em sessionStorage
  try {
    const stored = typeof window !== 'undefined' ? sessionStorage.getItem(`bb_logo_${key}`) : null;
    if (stored) {
      transparentCache[key] = stored;
      onReady(stored);
      return;
    }
  } catch {
    // ignore
  }

  if (typeof window === 'undefined') {
    onReady(url);
    return;
  }

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.decoding = 'sync';

  img.onload = () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || 800;
      canvas.height = img.naturalHeight || 400;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) {
        onReady(url);
        return;
      }

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      // Calcular limites da logo útil (remover bordas pretas / vazias da foto)
      let minX = canvas.width;
      let maxX = 0;
      let minY = canvas.height;
      let maxY = 0;

      const isWhite = mode === 'white';

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const idx = (y * canvas.width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          if (isWhite) {
            // Logo branca em fundo escuro
            const lum = Math.max(r, g, b);
            if (lum > 42) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          } else {
            // Logo escura em fundo claro
            const darkness = 255 - (0.299 * r + 0.587 * g + 0.114 * b);
            if (darkness > 42) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
      }

      if (minX > maxX || minY > maxY) {
        onReady(url);
        return;
      }

      // Adicionar margem sutil para não cortar o traço externo
      const padX = 6;
      const padY = 6;
      minX = Math.max(0, minX - padX);
      minY = Math.max(0, minY - padY);
      maxX = Math.min(canvas.width - 1, maxX + padX);
      maxY = Math.min(canvas.height - 1, maxY + padY);

      const cropW = maxX - minX + 1;
      const cropH = maxY - minY + 1;

      const outCanvas = document.createElement('canvas');
      outCanvas.width = cropW;
      outCanvas.height = cropH;
      const outCtx = outCanvas.getContext('2d');
      if (!outCtx) {
        onReady(url);
        return;
      }

      const outImgData = outCtx.createImageData(cropW, cropH);

      for (let y = 0; y < cropH; y++) {
        for (let x = 0; x < cropW; x++) {
          const srcIdx = ((minY + y) * canvas.width + (minX + x)) * 4;
          const dstIdx = (y * cropW + x) * 4;

          const r = data[srcIdx];
          const g = data[srcIdx + 1];
          const b = data[srcIdx + 2];

          if (isWhite) {
            // Logo branca isolada com 100% de fundo transparente
            const lum = Math.max(r, g, b);
            if (lum > 38) {
              const alpha = Math.min(255, Math.max(0, Math.round(((lum - 38) / 55) * 255)));
              outImgData.data[dstIdx] = 255;
              outImgData.data[dstIdx + 1] = 255;
              outImgData.data[dstIdx + 2] = 255;
              outImgData.data[dstIdx + 3] = alpha;
            } else {
              outImgData.data[dstIdx] = 0;
              outImgData.data[dstIdx + 1] = 0;
              outImgData.data[dstIdx + 2] = 0;
              outImgData.data[dstIdx + 3] = 0;
            }
          } else {
            // Logo escura isolada com 100% de fundo transparente
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            const darkness = 255 - lum;
            if (darkness > 38) {
              const alpha = Math.min(255, Math.max(0, Math.round(((darkness - 38) / 55) * 255)));
              outImgData.data[dstIdx] = 12;
              outImgData.data[dstIdx + 1] = 12;
              outImgData.data[dstIdx + 2] = 12;
              outImgData.data[dstIdx + 3] = alpha;
            } else {
              outImgData.data[dstIdx] = 0;
              outImgData.data[dstIdx + 1] = 0;
              outImgData.data[dstIdx + 2] = 0;
              outImgData.data[dstIdx + 3] = 0;
            }
          }
        }
      }

      outCtx.putImageData(outImgData, 0, 0);
      const cleanDataUrl = outCanvas.toDataURL('image/png');
      transparentCache[key] = cleanDataUrl;
      try {
        sessionStorage.setItem(`bb_logo_${key}`, cleanDataUrl);
      } catch {
        // ignore storage quota
      }
      onReady(cleanDataUrl);
    } catch {
      onReady(url);
    }
  };

  img.onerror = () => {
    onReady(url);
  };

  img.src = url;
}
