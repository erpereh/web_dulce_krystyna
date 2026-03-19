---
paths:
  - "src/**/*.{tsx,jsx,ts}"
---

# Patrones React — Dulce Krystyna

## Estructura de Componentes

Orden dentro de cada componente:
1. Imports (externos → internos → types → styles)
2. Interface de props
3. Named export del componente
4. Hooks (useState, useEffect, custom hooks)
5. Estado derivado / useMemo
6. Handlers / useCallback
7. Early returns (loading, error)
8. Return JSX

## Componentes de Animación Reutilizables

Crear wrappers en src/components/animations/:
- FadeIn: fade + slide up, acepta delay y direction props
- StaggerContainer + StaggerItem: para listas y grids
- ParallaxSection: sección con parallax de fondo
- ScrollReveal: wrapper genérico para whileInView
- PageTransition: wrapper para AnimatePresence en páginas

Estos wrappers encapsulan la lógica de Motion y permiten uso declarativo:
```tsx
<FadeIn delay={0.2}>
  <h2>Nuestros Pasteles</h2>
</FadeIn>

<StaggerContainer>
  {products.map(p => (
    <StaggerItem key={p.id}>
      <ProductCard product={p} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

## Custom Hooks Recomendados

- useScrollPosition: posición de scroll para header dinámico
- usePrefersReducedMotion: detectar preferencia de reduced motion
- useMediaQuery: detectar breakpoints en JS cuando CSS no basta
- useIntersectionObserver: lazy loading personalizado

## State Management

- Estado local con useState para UI state (modales, menú abierto)
- NO se necesita Zustand/Redux para este proyecto — es un sitio informativo
- Datos estáticos en src/data/ como constantes TypeScript exportadas
- Si en el futuro se añade un CMS: usar @tanstack/react-query

## Barrel Exports

- Cada carpeta de componentes tiene un index.ts que re-exporta:
```ts
  // src/components/ui/index.ts
  export { Button } from "./Button/Button"
  export { Card } from "./Card/Card"
  export { Section } from "./Section/Section"
```
- Importar desde el barrel: import { Button, Card } from "@/components/ui"

## Error Boundaries

- Un ErrorBoundary global en App.tsx
- Fallback elegante acorde al diseño (no pantallas blancas de error)
