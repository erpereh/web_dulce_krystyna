---
paths:
  - "src/components/**/*.{tsx,jsx}"
  - "src/features/**/*.{tsx,jsx}"
  - "src/pages/**/*.{tsx,jsx}"
  - "src/styles/**/*.css"
---

# Sistema de Diseño — Dulce Krystyna

## Paleta de Colores (Dark Luxury Theme)

| Rol | Variable CSS | Hex | Uso |
|-----|-------------|-----|-----|
| Fondo principal | --color-surface | #0a0a0a | Background body |
| Fondo elevado | --color-surface-elevated | #1a1a1a | Secciones alternadas |
| Fondo tarjeta | --color-surface-card | #1c1c1e | Cards, modales |
| Fondo hover | --color-surface-hover | #2c2c2e | Hover states |
| Acento primario | --color-gold | #c9a84c | CTAs, highlights, bordes |
| Acento hover | --color-gold-light | #d4b96a | Hover sobre dorado |
| Acento muted | --color-gold-muted | #b89d4f | Iconos, detalles |
| Texto primario | --color-cream | #f5f0e8 | Headings, body text |
| Texto secundario | --color-warm-gray | #9a9a9a | Captions, texto muted |
| Borde sutil | --color-border-subtle | rgba(201,168,76,0.15) | Dividers, card borders |
| Overlay | --color-overlay | rgba(0,0,0,0.6) | Sobre vídeos/imágenes |

## Tipografía

- **Headings**: font-display → "Playfair Display", Georgia, serif
- **Body/Nav**: font-sans → "Montserrat", "Helvetica Neue", sans-serif
- **Hero H1**: text-5xl md:text-6xl lg:text-7xl, tracking-tight, font-display
- **Section H2**: text-3xl md:text-4xl lg:text-5xl, tracking-tight, font-display
- **Subheadings**: text-lg md:text-xl, uppercase, tracking-[0.15em], font-sans, font-light
- **Body**: text-base md:text-lg, leading-relaxed (1.6-1.8), font-sans
- **Nav links**: text-sm, uppercase, tracking-[0.12em], font-sans
- NUNCA usar texto blanco puro (#fff) — siempre crema (#f5f0e8)
- NUNCA usar serif para body text extenso — solo headings

## Espaciado (Luxury = generoso)

- Padding entre secciones: py-20 md:py-28 lg:py-32
- Padding lateral: px-6 md:px-12 lg:px-20
- Max width contenido: max-w-6xl mx-auto (1152px)
- Gap en grids de productos: gap-6 md:gap-8
- Margin entre heading y contenido: mb-12 md:mb-16

## Componentes UI

- **Botones primarios**: bg-gold text-black px-8 py-3 font-sans text-sm uppercase tracking-[0.12em] hover:bg-gold-light transition-colors duration-300
- **Botones secundarios (outline)**: border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-black transition-all duration-300
- **Cards de producto**: bg-surface-card border border-border-subtle overflow-hidden group con hover que eleva (y: -8px) y escala imagen (scale-105)
- **Dividers**: border-t border-border-subtle con mx-auto max-w-xs para decorativos
- **Links de navegación**: text-cream hover:text-gold transition-colors, con underline animado en hover (pseudo-element ::after scale-x)

## Patrones de Diseño

- El dorado se usa SOLO como acento — nunca como fondo de secciones grandes
- Usar overlays negros al 60% sobre vídeos/imágenes de fondo
- Las imágenes de productos en aspect-[3/4] o aspect-square
- Alternar fondos surface y surface-elevated entre secciones para crear profundidad
- Los textos decorativos (como "Est. 2020") van en gold-muted con tracking-ultra
- Secciones de galería: grid masonry o grid uniforme con gap-2 para efecto mosaico
