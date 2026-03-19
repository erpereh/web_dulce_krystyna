---
paths:
  - "src/components/**/*.{tsx,jsx}"
  - "src/features/**/*.{tsx,jsx}"
  - "src/pages/**/*.{tsx,jsx}"
---

# Responsive Design — Mobile First

## Breakpoints (Tailwind defaults)

- Base (0-639px): Móvil — diseño base, SIEMPRE empezar aquí
- sm (640px+): Móvil grande / tablet pequeña
- md (768px+): Tablet
- lg (1024px+): Desktop
- xl (1280px+): Desktop grande
- 2xl (1536px+): Pantallas anchas

## Principios

- SIEMPRE mobile-first: escribir estilos base para 375px, luego añadir md: y lg:
- Testear PRIMERO en 375px (iPhone SE) antes de escalar
- Contenido debe ser legible y usable sin zoom en 320px
- Max-width del contenido: max-w-6xl (1152px) con mx-auto

## Patrones por Sección

### Hero
- Móvil: text-4xl, imagen estática (no vídeo), padding py-20
- Tablet: text-5xl, puede mostrar vídeo
- Desktop: text-6xl lg:text-7xl, vídeo de fondo, parallax activo

### Navegación
- Móvil: hamburger menu → overlay fullscreen con AnimatePresence
- Desktop (lg+): nav horizontal con links visibles
- Logo siempre visible en ambos estados

### Grid de Productos/Galería
- Móvil: grid-cols-1
- Tablet: grid-cols-2
- Desktop: grid-cols-3

### Tipografía Responsive
- H1: text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
- H2: text-2xl sm:text-3xl md:text-4xl lg:text-5xl
- Body: text-base md:text-lg
- Nav: text-xs sm:text-sm

### Espaciado Responsive
- Secciones: py-16 md:py-24 lg:py-32
- Lateral: px-6 md:px-12 lg:px-20
- Gaps: gap-4 md:gap-6 lg:gap-8

## Imágenes Responsive

- Usar srcset con 3 tamaños: 400w, 800w, 1200w
- sizes attribute adaptado a grid: sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
- aspect-ratio consistente en cards de producto

## Touch

- Mínimo 44x44px de área táctil en móvil
- Gestos: no depender de hover — toda interacción debe funcionar con tap
- Menú hamburger: botón de al menos 48x48px
