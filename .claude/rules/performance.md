---
paths:
  - "src/**/*.{tsx,jsx,ts}"
  - "vite.config.ts"
---

# Performance y Optimización

## Objetivos Core Web Vitals

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay) / INP: < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## Code Splitting

- Lazy loading de TODAS las páginas con React.lazy() + Suspense:
```tsx
  const MenuPage = React.lazy(() => import("@/pages/Menu"))
```
- Suspense fallback: skeleton loader o spinner minimalista en dorado
- Manual chunks en vite.config.ts: separar vendor (react, react-dom), router, motion, ui

## Imágenes

- Formato preferido: AVIF > WebP > JPEG (usar <picture> con fallbacks)
- SIEMPRE especificar width y height para prevenir CLS
- loading="lazy" en TODAS las imágenes below-the-fold
- loading="eager" SOLO en hero image/LCP element
- Usar srcset para imágenes responsive (400w, 800w, 1200w)
- Imágenes de producto: máximo 200KB en WebP, calidad 80%
- Considerar LQIP (Low-Quality Image Placeholder) con blur-up effect

## Vídeo Hero

- Formato: WebM (VP9) como primario + MP4 (H.264) como fallback
- Tamaño máximo: 5MB (preferible 2-3MB)
- Resolución: 720p suficiente, 1080p solo si el archivo < 5MB
- Duración: 10-20 segundos, loop seamless
- SIEMPRE strip audio: no hay audio en vídeos de fondo
- Poster image optimizado como fallback inmediato
- En móvil (< 768px): mostrar imagen estática en lugar de vídeo
- preload="auto" solo para hero video; preload="none" para el resto

## Bundle y Dependencies

- Usar @vitejs/plugin-react-swc (SWC es 20x más rápido que Babel)
- tree-shaking: usar siempre ES module imports (lodash-es, date-fns)
- Evitar librerías pesadas innecesarias — preferir soluciones nativas
- LazyMotion de Motion reduce bundle de ~34KB a ~5KB
- Target build: esnext (navegadores modernos)
- Analizar bundle con rollup-plugin-visualizer periódicamente

## Fonts

- Preload de fuentes críticas en index.html:
```html
  <link rel="preload" href="/fonts/PlayfairDisplay-Bold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/Montserrat-Regular.woff2" as="font" type="font/woff2" crossorigin>
```
- font-display: swap en @font-face
- Subsetear fuentes para incluir solo latin + latin-extended

## Rendering

- React.memo para componentes puros que reciben props estables
- useMemo para cómputos derivados costosos
- useCallback para callbacks pasados a componentes hijos memoizados
- Nunca crear objetos/arrays inline en props de componentes memoizados
- Virtualización (@tanstack/react-virtual) si hay listas > 50 items
