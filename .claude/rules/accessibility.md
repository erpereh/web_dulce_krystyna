---
paths:
  - "src/**/*.{tsx,jsx}"
---

# Accesibilidad Web — WCAG 2.2 AA

## HTML Semántico (Obligatorio)

- Usar SIEMPRE elementos semánticos: <header>, <main>, <nav>, <section>, <article>, <footer>
- NUNCA crear "div soup" — cada contenedor debe tener un propósito semántico
- Una sola <main> por página
- <nav> debe tener aria-label descriptivo: <nav aria-label="Navegación principal">
- Secciones con aria-labelledby apuntando a su heading:
```tsx
  <section aria-labelledby="menu-heading">
    <h2 id="menu-heading">Nuestro Menú</h2>
  </section>
```

## Imágenes y Vídeo

- TODAS las imágenes con alt descriptivo en español
- Imágenes decorativas: alt="" y role="presentation"
- Vídeos de fondo decorativos: aria-hidden="true"
- SIEMPRE proporcionar poster en <video>
- Implementar fallback de imagen estática cuando prefers-reduced-motion: reduce

## Contraste y Color

- Ratio mínimo texto normal: 4.5:1 (crema #f5f0e8 sobre #1c1c1e = ~12:1 ✓)
- Ratio mínimo texto grande (≥24px): 3:1
- El dorado #c9a84c sobre negro #0a0a0a = ~7:1 ✓ (cumple AA y AAA)
- Texto warm-gray #9a9a9a sobre #1c1c1e = ~4.8:1 ✓ (cumple AA)
- NUNCA transmitir información solo con color — usar texto, iconos o patrones adicionales

## Navegación por Teclado

- TODOS los elementos interactivos deben ser alcanzables con Tab
- Focus visible obligatorio: outline de 2-3px, outline-offset: 2px, color gold o cream
- NUNCA usar outline: none sin reemplazo visible
- Orden de tabulación lógico (sin tabIndex positivos)
- Modales: atrapar focus dentro, cerrar con Escape, devolver focus al trigger al cerrar

## Formularios (Contacto/Encargos)

- TODOS los inputs con <label> asociado via htmlFor/id
- Campos obligatorios: aria-required="true"
- Errores de validación: role="alert" aria-live="assertive"
- Mensajes de éxito: aria-live="polite"

## Reduced Motion

- Configurar MotionConfig con reducedMotion="user"
- En hero con vídeo: mostrar imagen estática cuando se prefiere reduced-motion
- CSS fallback:
```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
```

## Targets Táctiles

- Mínimo 44x44px para todos los elementos clickeables en móvil
- Botones CTA: mínimo py-3 px-6 (cumple sobradamente)
- Links de nav en móvil: padding suficiente para 44px de área táctil

## Testing de Accesibilidad

- ESLint: eslint-plugin-jsx-a11y en modo "recommended"
- Dev: @axe-core/react para auditoría runtime en desarrollo
- Lighthouse: score de accesibilidad objetivo ≥ 95
